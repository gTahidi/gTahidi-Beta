import * as msal from "@azure/msal-node";
import axios from "axios";
import { msalConfig } from "./authConfig";

class AuthProvider {
  msalConfig;
  cryptoProvider;

  constructor(msalConfig: any) {
    this.msalConfig = msalConfig;
    this.cryptoProvider = new msal.CryptoProvider();
  }

  login(options: any) {
    return async (req: any, res: any, next: any) => {
      /**
       * MSAL Node library allows you to pass your custom state as state parameter in the Request object.
       * The state parameter can also be used to encode information of the app's state before redirect.
       * You can pass the user's state in the app, such as the page or view they were on, as input to this parameter.
       */
      const state = this.cryptoProvider.base64Encode(
        JSON.stringify({
          successRedirect: options.successRedirect || "/",
        })
      );

      const authCodeUrlRequestParams = {
        state: state,
        scopes: options.scopes || [],
        redirectUri: options.redirectUri,
      };

      const authCodeRequestParams = {
        state: state,

        /**
         * By default, MSAL Node will add OIDC scopes to the auth code request. For more information, visit:
         * https://docs.microsoft.com/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
         */
        scopes: options.scopes || [],
        redirectUri: options.redirectUri,
      };

      /**
       * If the current msal configuration does not have cloudDiscoveryMetadata or authorityMetadata, we will
       * make a request to the relevant endpoints to retrieve the metadata. This allows MSAL to avoid making
       * metadata discovery calls, thereby improving performance of token acquisition process. For more, see:
       * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-node/docs/performance.md
       */
      if (
        !this.msalConfig.auth.cloudDiscoveryMetadata ||
        !this.msalConfig.auth.authorityMetadata
      ) {
        const [cloudDiscoveryMetadata, authorityMetadata] = await Promise.all([
          this.getCloudDiscoveryMetadata(this.msalConfig.auth.authority),
          this.getAuthorityMetadata(this.msalConfig.auth.authority),
        ]);

        this.msalConfig.auth.cloudDiscoveryMetadata = JSON.stringify(
          cloudDiscoveryMetadata
        );
        this.msalConfig.auth.authorityMetadata =
          JSON.stringify(authorityMetadata);
      }

      const msalInstance = this.getMsalInstance(this.msalConfig);

      // trigger the first leg of auth code flow
      return this.redirectToAuthCodeUrl(
        authCodeUrlRequestParams,
        authCodeRequestParams,
        msalInstance
      )(req, res, next);
    };
  }

  acquireToken(options: any) {
    return async (
      req: {
        session: {
          tokenCache: string;
          account: msal.AccountInfo | null;
          accessToken: string;
          idToken: string;
        };
      },
      res: { redirect: (arg0: any) => void },
      next: (arg0: unknown) => void
    ) => {
      try {
        const msalInstance = this.getMsalInstance(this.msalConfig);

        /**
         * If a token cache exists in the session, deserialize it and set it as the
         * cache for the new MSAL CCA instance. For more, see:
         * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-node/docs/caching.md
         */
        if (req.session.tokenCache) {
          msalInstance.getTokenCache().deserialize(req.session.tokenCache);
        }

        const tokenResponse = await msalInstance.acquireTokenSilent({
          account: req.session.account!,
          scopes: options.scopes || [],
        });

        /**
         * On successful token acquisition, write the updated token
         * cache back to the session. For more, see:
         * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-node/docs/caching.md
         */
        req.session.tokenCache = msalInstance.getTokenCache().serialize();
        req.session.accessToken = tokenResponse.accessToken;
        req.session.idToken = tokenResponse.idToken;
        req.session.account = tokenResponse.account;

        res.redirect(options.successRedirect);
      } catch (error) {
        if (error instanceof msal.InteractionRequiredAuthError) {
          return this.login({
            scopes: options.scopes || [],
            redirectUri: options.redirectUri,
            successRedirect: options.successRedirect || "/",
          })(req, res, next);
        }

        next(error);
      }
    };
  }

  handleRedirect(options = {}) {
    return async (
      req: {
        body: msal.AuthorizationCodePayload | undefined;
        session: {
          authCodeRequest: any;
          pkceCodes: { verifier: any };
          tokenCache: string;
          idToken: string;
          account: msal.AccountInfo | null;
          isAuthenticated: boolean;
        };
      },
      res: { redirect: (arg0: any) => void },
      next: (arg0: unknown) => void
    ) => {
      if (!req.body || !req.body.state) {
        return next(new Error("Error: response not found"));
      }

      const authCodeRequest = {
        ...req.session.authCodeRequest,
        code: req.body.code,
        codeVerifier: req.session.pkceCodes.verifier,
      };

      try {
        const msalInstance = this.getMsalInstance(this.msalConfig);

        if (req.session.tokenCache) {
          msalInstance.getTokenCache().deserialize(req.session.tokenCache);
        }

        const tokenResponse = await msalInstance.acquireTokenByCode(
          authCodeRequest,
          req.body
        );

        req.session.tokenCache = msalInstance.getTokenCache().serialize();
        req.session.idToken = tokenResponse.idToken;
        req.session.account = tokenResponse.account;
        req.session.isAuthenticated = true;

        const state = JSON.parse(
          this.cryptoProvider.base64Decode(req.body.state)
        );
        res.redirect(state.successRedirect);
      } catch (error) {
        next(error);
      }
    };
  }

  logout(options: any) {
    return (
      req: { session: { destroy: (arg0: () => void) => void } },
      res: { redirect: (arg0: string) => void },
      next: any
    ) => {
      /**
       * Construct a logout URI and redirect the user to end the
       * session with Azure AD. For more information, visit:
       * https://docs.microsoft.com/azure/active-directory/develop/v2-protocols-oidc#send-a-sign-out-request
       */
      let logoutUri = `${this.msalConfig.auth.authority}/oauth2/v2.0/`;

      if (options.postLogoutRedirectUri) {
        logoutUri += `logout?post_logout_redirect_uri=${options.postLogoutRedirectUri}`;
      }

      req.session.destroy(() => {
        res.redirect(logoutUri);
      });
    };
  }

  /**
   * Instantiates a new MSAL ConfidentialClientApplication object
   * @param msalConfig: MSAL Node Configuration object
   * @returns
   */
  getMsalInstance(msalConfig: msal.Configuration) {
    return new msal.ConfidentialClientApplication(msalConfig);
  }

  /**
   * Prepares the auth code request parameters and initiates the first leg of auth code flow
   * @param req: Express request object
   * @param res: Express response object
   * @param next: Express next function
   * @param authCodeUrlRequestParams: parameters for requesting an auth code url
   * @param authCodeRequestParams: parameters for requesting tokens using auth code
   */
  redirectToAuthCodeUrl(
    authCodeUrlRequestParams: {
      state: string;
      /**
       * By default, MSAL Node will add OIDC scopes to the auth code url request. For more information, visit:
       * https://docs.microsoft.com/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
       */
      scopes: any;
      redirectUri: any;
    },
    authCodeRequestParams: {
      state: string;
      /**
       * By default, MSAL Node will add OIDC scopes to the auth code request. For more information, visit:
       * https://docs.microsoft.com/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
       */
      scopes: any;
      redirectUri: any;
    },
    msalInstance: msal.ConfidentialClientApplication
  ) {
    return async (
      req: {
        session: {
          pkceCodes: {
            challenge: any;
            challengeMethod: any;
            verifier?: string;
          };
          authCodeUrlRequest: any;
          authCodeRequest: any;
        };
      },
      res: { redirect: (arg0: any) => void },
      next: (arg0: unknown) => void
    ) => {
      // Generate PKCE Codes before starting the authorization flow
      const { verifier, challenge } =
        await this.cryptoProvider.generatePkceCodes();

      // Set generated PKCE codes and method as session vars
      req.session.pkceCodes = {
        challengeMethod: "S256",
        verifier: verifier,
        challenge: challenge,
      };

      /**
       * By manipulating the request objects below before each request, we can obtain
       * auth artifacts with desired claims. For more information, visit:
       * https://azuread.github.io/microsoft-authentication-library-for-js/ref/modules/_azure_msal_node.html#authorizationurlrequest
       * https://azuread.github.io/microsoft-authentication-library-for-js/ref/modules/_azure_msal_node.html#authorizationcoderequest
       **/
      req.session.authCodeUrlRequest = {
        ...authCodeUrlRequestParams,
        responseMode: msal.ResponseMode.FORM_POST, // recommended for confidential clients
        codeChallenge: req.session.pkceCodes.challenge,
        codeChallengeMethod: req.session.pkceCodes.challengeMethod,
      };

      req.session.authCodeRequest = {
        ...authCodeRequestParams,
        code: "",
      };

      try {
        const authCodeUrlResponse = await msalInstance.getAuthCodeUrl(
          req.session.authCodeUrlRequest
        );
        res.redirect(authCodeUrlResponse);
      } catch (error) {
        next(error);
      }
    };
  }

  /**
   * Retrieves cloud discovery metadata from the /discovery/instance endpoint
   * @returns
   */
  async getCloudDiscoveryMetadata(authority: any) {
    const endpoint =
      "https://login.microsoftonline.com/common/discovery/instance";

    try {
      const response = await axios.get(endpoint, {
        params: {
          "api-version": "1.1",
          authorization_endpoint: `${authority}/oauth2/v2.0/authorize`,
        },
      });

      return await response.data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Retrieves oidc metadata from the openid endpoint
   * @returns
   */
  async getAuthorityMetadata(authority: any) {
    const endpoint = `${authority}/v2.0/.well-known/openid-configuration`;

    try {
      const response = await axios.get(endpoint);
      return await response.data;
    } catch (error) {
      console.log(error);
    }
  }
}

export const authProvider = new AuthProvider(msalConfig);

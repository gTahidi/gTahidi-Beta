import * as msal from "@azure/msal-node";

const confidentialClientConfig = {
  auth: {
    clientId: process.env.NEXT_PUBLIC_APP_CLIENT_ID,
    authority: process.env.NEXT_PUBLIC_SIGN_UP_SIGN_IN_POLICY_AUTHORITY,
    clientSecret: process.env.NEXT_PUBLIC_APP_CLIENT_SECRET,
    knownAuthorities: [process.env.NEXT_PUBLIC_AUTHORITY_DOMAIN], //This must be an array
    redirectUri: process.env.NEXT_PUBLIC_APP_REDIRECT_URI,
    validateAuthority: false,
  },
  system: {
    loggerOptions: {
      //@ts-ignore
      loggerCallback(loglevel, message, containsPii) {
        console.log(message);
      },
      piiLoggingEnabled: false,
      logLevel: msal.LogLevel.Verbose,
    },
  },
};

export const confidentialClientApplication =
  // @ts-ignore
  new msal.ConfidentialClientApplication(confidentialClientConfig);

//<ms_docref_api_config>
const apiConfig = {
  webApiScopes: [
    `https://${process.env.NEXT_PUBLIC_TENANT_NAME}.onmicrosoft.com/tasks-api/tasks.read`,
  ],
  anonymousUri: "http://localhost:5000/public",
  protectedUri: "http://localhost:5000/hello",
};

const APP_STATES = {
  LOGIN: "login",
  CALL_API: "call_api",
};

/**
 * Request Configuration
 * We manipulate these two request objects below
 * to acquire a token with the appropriate claims.
 */
const authCodeRequest: any = {
  redirectUri: confidentialClientConfig.auth.redirectUri,
};

const tokenRequest: any = {
  redirectUri: confidentialClientConfig.auth.redirectUri,
};

export const sessionConfig = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, // set this to true on production
  },
};

/**
 * This method is used to generate an auth code request
 * @param {string} authority: the authority to request the auth code from
 * @param {array} scopes: scopes to request the auth code for
 * @param {string} state: state of the application, tag a request
 * @param {Object} res: express middleware response object
 */

const getAuthCode = (
  authority: any,
  scopes: any,
  state: any,
  res: {
    redirect: (arg0: string) => void;
    status: (arg0: number) => {
      (): any;
      new (): any;
      send: { (arg0: any): void; new (): any };
    };
  }
) => {
  // prepare the request
  console.log("Fetching Authorization code");
  authCodeRequest.authority = authority;
  authCodeRequest.scopes = scopes;
  authCodeRequest.state = state;

  //Each time you fetch Authorization code, update the authority in the tokenRequest configuration
  tokenRequest.authority = authority;

  // request an authorization code to exchange for a token
  return confidentialClientApplication
    .getAuthCodeUrl(authCodeRequest)
    .then((response) => {
      console.log("\nAuthCodeURL: \n" + response);
      //redirect to the auth code URL/send code to
      res.redirect(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

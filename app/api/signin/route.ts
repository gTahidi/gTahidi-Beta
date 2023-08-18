import { msalConfig, REDIRECT_URI } from "@/msal/authConfig";
import { authProvider } from "@/msal/AuthProvider";
import { NextRequest, NextResponse } from "next/server";
import * as msal from "@azure/msal-node";

const cryptoProvider = new msal.CryptoProvider();

export async function GET(req: NextRequest, res: NextResponse) {
  const options = await req.json();

  const state = cryptoProvider.base64Encode(
    JSON.stringify({
      successRedirect: options.successRedirect || "/",
    })
  );

  const authCodeUrlRequestParams = {
    state: state,
    scopes: options.scopes || [],
    redirectUri: options.redirectUri,
  };

  if (
    !msalConfig.auth.cloudDiscoveryMetadata ||
    !msalConfig.auth.authorityMetadata
  ) {
    const [cloudDiscoveryMetadata, authorityMetadata] = await Promise.all([
      getCloudDiscoveryMetadata(msalConfig.auth.authority),
      getAuthorityMetadata(msalConfig.auth.authority),
    ]);

    msalConfig.auth.cloudDiscoveryMetadata = JSON.stringify(
      cloudDiscoveryMetadata
    );
    msalConfig.auth.authorityMetadata = JSON.stringify(authorityMetadata);
  }

  return authProvider.login({
    scopes: [],
    redirectUri: REDIRECT_URI,
    successRedirect: "/",
  });
}

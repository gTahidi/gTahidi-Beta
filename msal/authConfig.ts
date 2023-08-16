/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

/**
 * Configuration object to be passed to MSAL instance on creation.
 * For a full list of MSAL Node configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-node/docs/configuration.md
 */
export const msalConfig = {
  auth: {
    clientId: process.env.NEXT_PUBLIC_NEXT_PUBLIC_CLIENT_ID, // 'Application (client) ID' of app registration in Azure portal - this value is a GUID
    authority:
      process.env.NEXT_PUBLIC_CLOUD_INSTANCE! +
      process.env.NEXT_PUBLIC_TENANT_ID, // Full directory URL, in the form of https://login.microsoftonline.com/<tenant>
    clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET, // Client secret generated from the app registration in Azure portal
  },
  system: {
    loggerOptions: {
      loggerCallback(loglevel: any, message: any, containsPii: any) {
        console.log({ message, loglevel, containsPii });
      },
      piiLoggingEnabled: false,
      logLevel: 3,
    },
  },
};

export const REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URI;
export const POST_LOGOUT_REDIRECT_URI =
  process.env.NEXT_PUBLIC_POST_LOGOUT_REDIRECT_URI;
export const GRAPH_ME_ENDPOINT =
  process.env.NEXT_PUBLIC_GRAPH_API_ENDPOINT + "v1.0/me";

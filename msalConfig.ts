import { PublicClientApplication, Configuration } from "@azure/msal-browser";

// MSAL Configuration
const msalConfig: Configuration = {
    auth: {
        clientId: process.env.AZURE_AD_B2C_CLIENT_ID as string,
        authority: `https://${process.env.AZURE_AD_B2C_TENANT_NAME}.b2clogin.com/${process.env.AZURE_AD_B2C_TENANT_NAME}.onmicrosoft.com/${process.env.AZURE_AD_B2C_PRIMARY_USER_FLOW}`,
        redirectUri: "http://localhost:3000/redirect",
        postLogoutRedirectUri: "http://localhost:3000/",
        knownAuthorities: [`${process.env.AZURE_AD_B2C_TENANT_NAME}.b2clogin.com`]
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: false,
    }
};

let msalInstance: PublicClientApplication | null = null;

export const initializeMsal = () => {
    if (!msalInstance) {
        msalInstance = new PublicClientApplication(msalConfig);
    }
    return msalInstance;
};

export const getMsalInstance = () => {
    if (!msalInstance) {
        initializeMsal();
    }
    return msalInstance;
};

import type { NextAuthOptions } from "next-auth";
import AzureADB2CProvider from "next-auth/providers/azure-ad-b2c";

export const options: NextAuthOptions = {
    providers: [
        AzureADB2CProvider({
            tenantId: process.env.AZURE_AD_B2C_TENANT_NAME,
            clientId: process.env.AZURE_AD_B2C_CLIENT_ID!,
            clientSecret: process.env.AZURE_AD_B2C_CLIENT_SECRET!,
            primaryUserFlow: process.env.AZURE_AD_B2C_PRIMARY_USER_FLOW,
            authorization: { params: { scope: "offline_access openid" } },
            profile: profile => {
                return {
                    id: profile.oid, // Use the OID as the unique identifier
                    name: profile.given_name, // Use the given name
                    email: profile.email || null, // Extract email, or default to null if not provided
                    image: null // No image in the provided OAuth profile
                }
            }
        }),
    ],
    pages: {
        signIn: undefined,
        newUser: undefined,
    },
};

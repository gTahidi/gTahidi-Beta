import type { NextAuthOptions } from "next-auth";
import AzureADB2CProvider from "next-auth/providers/azure-ad-b2c";

let userAccount = null;  // store user deetails temporarily


export const options: NextAuthOptions = {
    providers: [
        AzureADB2CProvider({
            tenantId: process.env.AZURE_AD_B2C_TENANT_NAME,
            clientId: process.env.AZURE_AD_B2C_CLIENT_ID!,
            clientSecret: process.env.AZURE_AD_B2C_CLIENT_SECRET!,
            primaryUserFlow: process.env.AZURE_AD_B2C_PRIMARY_USER_FLOW,
            authorization: { params: { scope: "offline_access openid" } },
            profile: profile => {
                userAccount =  {
                    id: profile.oid, // Use the OID as the unique identifier
                    name: profile.name, // Use the given name
                    email: profile.email || null, // Extract email, or default to null if not provided
                    image: null // No image in the provided OAuth profile
                }
                return userAccount;
            }
        }),
    ],
    pages: {
        signIn: undefined,
        newUser: undefined,
    },
    session: {
        maxAge: 30 * 24 * 60 * 60 // 30 days
    },
    callbacks: {
        async jwt({ token, user, account, profile, isNewUser }: { token: any; user: any; account: any; profile?: any; isNewUser?: boolean; }) {
            if (user) {
                token.user = user;
            }
            return token;
        },
        async session({ session, token, user, newSession, trigger }: { session: any; token: any; user: any; newSession: any; trigger: string; }) {
            if (token.user) {
                session.user = token.user;
            }
            return session;
        },
    },
};

import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import AzureADB2CProvider from "next-auth/providers/azure-ad-b2c";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    // AzureADProvider({
    //   clientId: process.env.AZURE_AD_CLIENT_ID as string,
    //   clientSecret: process.env.AZURE_AD_CLIENT_SECRET as string,
    //   tenantId: process.env.AZURE_AD_TENANT_ID as string,
    // }),
    AzureADB2CProvider({
      tenantId: process.env.AZURE_AD_B2C_TENANT_NAME,
      clientId: process.env.AZURE_AD_B2C_CLIENT_ID!,
      clientSecret: process.env.AZURE_AD_B2C_CLIENT_SECRET!,
      primaryUserFlow: process.env.AZURE_AD_B2C_PRIMARY_USER_FLOW,
      authorization: { params: { scope: "offline_access openid" } },
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
        },
        email: {
          label: "email:",
          type: "email",
          placeholder: "Email address",
        },
      },
      async authorize(credentials, req) {
        // This is where you need to retrieve user data
        // to verify with credentials
        // Docs: https://next-auth.js.org/configuration/providers/credentials
        const user = {
          id: "42",
          email: "testuser@gmail.com",
          password: "nextauth",
        };

        if (
          credentials?.email.toLowerCase() === user.email.toLowerCase() &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    // error: "/auth/error", // Error code passed in query string as ?error=
    // verifyRequest: "/auth/verify-request", // (used for check email message)
    newUser: "/auth/signup", // New users will be directed here on first sign in (leave the property out if not of interest)
  },
};

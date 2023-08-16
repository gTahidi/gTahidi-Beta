import { REDIRECT_URI } from "@/msal/authConfig";
import { authProvider } from "@/msal/AuthProvider";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  authProvider.acquireToken({
    scopes: ["User.Read"],
    redirectUri: REDIRECT_URI,
    successRedirect: "/users/profile",
  });
}

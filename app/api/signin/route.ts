import { REDIRECT_URI } from "@/msal/authConfig";
import { authProvider } from "@/msal/AuthProvider";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  return authProvider.login({
    scopes: [],
    redirectUri: REDIRECT_URI,
    successRedirect: "/",
  });
}

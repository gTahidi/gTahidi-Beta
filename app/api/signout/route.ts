import { POST_LOGOUT_REDIRECT_URI } from "@/msal/authConfig";
import { authProvider } from "@/msal/AuthProvider";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  authProvider.logout({
    postLogoutRedirectUri: POST_LOGOUT_REDIRECT_URI,
  });
}

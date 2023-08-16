import { authProvider } from "@/AuthProvider";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  authProvider.handleRedirect();
}

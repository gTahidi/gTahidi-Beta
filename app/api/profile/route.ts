import { GRAPH_ME_ENDPOINT } from "@/msal/authConfig";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const { accessToken } = await req.json();
  try {
    const graphResponse = await fetch(GRAPH_ME_ENDPOINT, accessToken);
    NextResponse.json(graphResponse);
  } catch (error) {
    NextResponse.error();
  }
}

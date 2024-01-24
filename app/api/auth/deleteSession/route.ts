import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: NextRequest) {
  const { nextUrl } = request;

  console.log("delete session");

  cookies().delete("authjs.session-token");
  cookies().delete("authjs.csrf-token");

  return NextResponse.redirect(new URL("/auth/logout", nextUrl));
}

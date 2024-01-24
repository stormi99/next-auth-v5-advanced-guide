import { getUserById } from "@/data/user";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.nextUrl);
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json({ status: "error", message: "No id provided" });
  }

  const existingUser = await getUserById(id);

  if (!existingUser) {
    return NextResponse.json({ status: "error", message: "User not found" });
  }

  return NextResponse.json({
    status: "ok",
    role: existingUser.role,
  });
}

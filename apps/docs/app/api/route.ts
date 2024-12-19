import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    routes: [{ name: "hooks", path: "/api/hooks" }],
  });
}

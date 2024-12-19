import { ratelimit } from "@/lib/ratelimit";
import { NextResponse } from "next/server";
import type { Hook } from "@rehooks/utils";
import path from "path";
import fs from "fs";

const filePath = path.join(process.cwd(), "lib", "hooks.json");

async function loadData(): Promise<Hook[]> {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error("Error loading data:", err);
        reject(err);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
}

export async function GET(
  request: Request,
  { params }: { params: { title: string } },
) {
  const { title } = params;

  const clientIp = (
    request.headers.get("x-forwarded-for") ?? "127.0.0.1"
  ).split(",")[0];

  const identifier = clientIp;
  const rateLimitResult = await ratelimit.limit(identifier);

  NextResponse.next().headers.set(
    "X-RateLimit-Limit",
    rateLimitResult.limit.toString(),
  );
  NextResponse.next().headers.set(
    "X-RateLimit-Remaining",
    rateLimitResult.remaining.toString(),
  );

  try {
    const data: Hook[] = await loadData();
    const hook = data.find((hook) => hook.title === title);

    if (!hook) {
      return NextResponse.json(
        { error: "Couldn't find the requested hook." },
        { status: 404 },
      );
    }

    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: "Ratelimit exceeded. Please try again in a few seconds." },
        { status: 429 },
      );
    }

    return NextResponse.json(hook, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

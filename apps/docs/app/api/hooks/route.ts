import { NextRequest, NextResponse } from "next/server";
import { ratelimit } from "@/lib/ratelimit";
import type { Hook } from "@rehooks/utils";
import path from "path";
import fs from "fs";

export const dynamic = "force-dynamic";

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

export async function GET(req: NextRequest) {
  const clientIp = (req.headers.get("x-forwarded-for") ?? "127.0.0.1").split(
    ",",
  )[0];

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
    const url = new URL(req.url);
    const limit = url.searchParams.get("limit");
    const search = url.searchParams.get("search");
    const data: Hook[] = await loadData();
    let result = data;
    if (search) {
      result = data.filter((hook) =>
        hook.title.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (limit) {
      const parsedLimit = Number(limit);
      if (isNaN(parsedLimit) || parsedLimit <= 0) {
        return NextResponse.json(
          { error: "Invalid limit. It must be a positive number." },
          { status: 400 },
        );
      }
      result = result.slice(0, parsedLimit);
    }

    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: "Ratelimit exceeded. Please try again in a few seconds." },
        { status: 429 },
      );
    }

    return NextResponse.json(result, {
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
      {
        status: 500,
      },
    );
  }
}

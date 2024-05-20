import { NextResponse } from "next/server";
import { client } from "@/libs/client";

export async function GET() {
  try {
    const res = await client.get({
      customRequestInit: {
        cache: "no-store", // キャッシュを利用せずに常に新しいデータを取得する
      },
      endpoint: "work",
    });
    console.log("response", res);
    return NextResponse.json(res);
  } catch (error) {
    console.error("Error fetching data from Notion:", error);
    return NextResponse.json({ error: "Error fetching data from MicroCMS" }, { status: 500 });
  }
}
// Work Item API

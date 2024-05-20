import { NextRequest, NextResponse } from "next/server";
import { client } from "@/libs/client";
import { error, log } from "console";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const pageId = params.id;
  // console.log("apiId", pageId);

  try {
    const res = await client.get({
      customRequestInit: {
        cache: "no-store", // キャッシュを利用せずに常に新しいデータを取得する
      },
      endpoint: "work",
      contentId: pageId,
    });
    console.log("res", res);
    return NextResponse.json(res);
  } catch (error) {
    console.error("Error fetching data from Notion:", error);
    return NextResponse.json({ error: "Error fetching data from MicroCMS" }, { status: 500 });
  }
}

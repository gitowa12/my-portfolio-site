import { NextRequest, NextResponse } from "next/server";
import { client } from "@/libs/client";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  console.log("req", req);

  try {
    const res = await client.get({
      customRequestInit: {
        cache: "no-store", // キャッシュを利用せずに常に新しいデータを取得する
      },
      endpoint: "blog",
      contentId: id,
    });

    return NextResponse.json(res);
  } catch (error) {
    console.error("Failed to fetch blog data:", error);
    return NextResponse.json({ error: "Failed to fetch blog data" }, { status: 500 });
  }
}

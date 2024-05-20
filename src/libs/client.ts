import { createClient } from "microcms-js-sdk";
import type { MicroCMSQueries, MicroCMSImage, MicroCMSDate } from "microcms-js-sdk";

//ブログの型定義
export type Blog = {
  id: string;
  title: string;
  content: string;
  eyecatch?: MicroCMSImage;
} & MicroCMSDate;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN as string,
  apiKey: process.env.MICROCMS_API_KEY as string,
});

// // ブログ一覧を取得
// export const getList = async (queries?: MicroCMSQueries) => {
//   const listData = await client.getList<Blog>({
//     endpoint: "blogs",
//     queries,
//   });

//   // データの取得が目視しやすいよう明示的に遅延効果を追加
//   await new Promise((resolve) => setTimeout(resolve, 3000));

//   return listData;
// };

// // ブログの詳細を取得
// export const getDetail = async (contentId: string, queries?: MicroCMSQueries) => {
//   const detailData = await client.getListDetail<Blog>({
//     endpoint: "blogs",
//     contentId,
//     queries,
//   });

//   // データの取得が目視しやすいよう明示的に遅延効果を追加
//   await new Promise((resolve) => setTimeout(resolve, 3000));

//   return detailData;
// };

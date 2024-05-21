import Button from "@/components/Button";
import Card from "@/components/Card";
import { client } from "@/libs/client";
import { BlogItem, WorkItem } from "@/types/types";

import { useEffect, useState } from "react";

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const Top = async () => {
  //Nextjsはfetchをキャッシュし続けるからrevalidateでキャッシュを使わないように指定する
  const res_works = await fetch(`${apiUrl}/api/work/top`, { next: { revalidate: 0 } });
  const data_works = await res_works.json();
  const works = data_works.contents;
  console.log("top-works", works);

  const res_blogs = await fetch(`${apiUrl}/api/blog/top`, { next: { revalidate: 0 } });
  const data_blogs = await res_blogs.json();
  const blogs = data_blogs.contents;
  console.log("top-blogs", blogs);

  //↓clientから直接使う場合。どっちにしてもキャッシュを使わせないようにオプションを書く必要がある。
  // const res_works = await client.get({
  //   customRequestInit: {
  //     cache: "no-store", // キャッシュを利用せずに常に新しいデータを取得する
  //   },
  //   endpoint: "work",
  // });
  // const works = res_works.contents;
  // console.log("top-work", works);

  // const res_blogs = await client.get({
  //   customRequestInit: {
  //     cache: "no-store", // キャッシュを利用せずに常に新しいデータを取得する
  //   },
  //   endpoint: "blog",
  // });
  // const blogs = res_blogs.contents;
  // console.log("top-blog", blogs);

  return (
    <div className="flex flex-col gap-y-[64px] my-[32px] md:my-[48px] lg:my-[62px] md:gap-y-[80px] lg:gap-y-[100px]">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-[40px] font-bold mb-[32px] md:text-[48px] md:mb-[48px] lg:text-[56px]">
          About
        </h2>
        <div className="flex flex-col justify-center items-center md:flex-row">
          <img
            className="w-[120px] rounded-full bg-slate-200 mb-[16px] md:w-[160px] md:mr-[24px] md:mb-0"
            src="/僕のアイコン画像400x400.jpg"
            alt="icon"
          />
          <div className="flex flex-col items-center md:items-start">
            <p className="font-bold text-[20px] mb-[16px] md:text-[24px] md:mb-0">towa</p>
            <p className=" text-[18px] md:text-[20px] md:max-w-[480px] ">
              フロントエンドエンジニア。
              <br />
              1999年生まれ。沖縄県出身、東京都在住。大学時代に上京し、新卒で入社した会社でフロントエンドエンジニアとしてのキャリアをスタート。JavaScriptとUIデザインが好き。
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-[40px] font-bold mb-[32px] md:text-[48px] md:mb-[48px] lg:text-[56px]">
          Work
        </h2>
        <div className="flex flex-col justify-center gap-y-[24px] mb-[32px] md:mb-[48px] md:flex-row md:justify-between">
          {works.map((item: WorkItem) => (
            <Card key={item.id} item={item} category="work"></Card>
          ))}
        </div>
        <Button href="/work"></Button>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-[40px] font-bold mb-[32px] md:text-[48px]  md:mb-[48px] lg:text-[56px]">
          Blog
        </h2>

        <div className="flex flex-col justify-center gap-y-[24px] mb-[32px] md:mb-[48px] md:flex-row md:justify-between">
          {blogs.map((item: BlogItem) => (
            <Card key={item.id} item={item} category="blog"></Card>
          ))}
        </div>

        <Button href="/blog"></Button>
      </div>
      <div></div>
    </div>
  );
};

export default Top;

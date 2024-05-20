import Card from "@/components/Card";
import { client } from "@/libs/client";

import { useEffect, useState } from "react";

type Work = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAtstring: string;
  title: string;
  content: string;
  eyecatch: {
    url: string;
    height: number;
    width: number;
  };
  category: null;
};

type Blog = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAtstring: string;
  title: string;
  content: string;
  eyecatch: {
    url: string;
    height: number;
    width: number;
  };
  category: null;
};

const Top = async () => {
  const res_works = await fetch("http://localhost:3000/api/work", { next: { revalidate: 0 } });
  const data_works = await res_works.json();
  const works = data_works.contents;
  console.log("top-works", works);

  const res_blogs = await fetch("http://localhost:3000/api/blog", { next: { revalidate: 0 } });
  const data_blogs = await res_blogs.json();
  const blogs = data_blogs.contents;
  console.log("top-blogs", blogs);

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
    <div>
      <div className="flex flex-col justify-center items-center mt-[32px] mb-[64px]">
        <h2 className="text-[40px] font-bold mb-[32px]">About</h2>
        <img className="w-[120px] rounded-full bg-slate-200 mb-[16px]" src="/person.svg" alt="" />
        <p className="mb-[16px]">towa</p>
        <p className="max-w-[340px] ">
          フロントエンドエンジニア。
          <br />
          1999年生まれ。沖縄県出身、東京都在住。大学時代に上京し、新卒で入社した会社でフロントエンドエンジニアとし��のキャリアを孤独にスタートしました。
        </p>
      </div>
      <div className="flex flex-col justify-center items-center mt-[32px] mb-[64px]">
        <h2 className="text-[40px] font-bold mb-[32px]">Work</h2>
        <div className="flex flex-col gap-y-[24px]">
          {works.map((item: Work) => (
            <Card key={item.id} item={item} category="work"></Card>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-[32px] mb-[64px]">
        <h2 className="text-[40px] font-bold mb-[32px]">Blog</h2>

        <div className="flex flex-col gap-y-[28px]">
          <div className="flex flex-col gap-y-[24px]">
            {blogs.map((item: Blog) => (
              <Card key={item.id} item={item} category="work"></Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;

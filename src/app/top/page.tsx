import Button from "@/components/Button";
import Card from "@/components/Card";
import Profile from "@/components/Profile";
import SeparatorLine from "@/components/SeparatorLine";
import { client } from "@/libs/client";
import { BlogItem, WorkItem } from "@/types/types";

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const Top = async () => {
  //Nextjsはfetchをキャッシュし続けるからrevalidateでキャッシュを使わないように指定する
  // const res_works = await fetch(`${apiUrl}/api/work/top`, { next: { revalidate: 0 } });
  // const data_works = await res_works.json();
  // const works = data_works.contents;
  // console.log("top-works", works);

  // const res_blogs = await fetch(`${apiUrl}/api/blog/top`, { next: { revalidate: 0 } });
  // const data_blogs = await res_blogs.json();
  // const blogs = data_blogs.contents;
  // console.log("top-blogs", blogs);

  //↓clientから直接使う場合。どっちにしてもキャッシュを使わせないようにオプションを書く必要がある。
  const res_works = await client.get({
    // customRequestInit: {
    //   cache: "no-store", // キャッシュを利用せずに常に新しいデータを取得する
    // },
    endpoint: "work",
    queries: { limit: 2 },
    // customRequestInit: {
    //   cache: "no-cache", // キャッシュを利用するけど、サーバーに再検証する
    // },
  });
  const works = res_works.contents;
  console.log("top-work", works);

  const res_blogs = await client.get({
    // customRequestInit: {
    //   cache: "no-store", // キャッシュを利用せずに常に新しいデータを取得する
    // },
    endpoint: "blog",
    queries: { limit: 2 },
    // customRequestInit: {
    //   cache: "no-cache", // キャッシュを利用するけど、サーバーに再検証する
    // },
  });
  const blogs = res_blogs.contents;
  console.log("top-blog", blogs);

  return (
    <div className="flex flex-col gap-y-[64px] my-[32px] md:my-[48px] lg:my-[62px] md:gap-y-[80px] lg:gap-y-[100px] ">
      <Profile></Profile>
      <SeparatorLine></SeparatorLine>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-[40px] font-bold mb-[32px] md:text-[48px] md:mb-[48px] lg:text-[56px]">
          Work
        </h2>
        <div className="flex flex-col justify-center gap-y-[32px] mb-[32px] md:mb-[48px] md:flex-row md:justify-between">
          {works.map((item: WorkItem) => (
            <Card key={item.id} item={item} category="work"></Card>
          ))}
        </div>
        <Button href="/work"></Button>
      </div>
      <SeparatorLine></SeparatorLine>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-[40px] font-bold mb-[32px] md:text-[48px]  md:mb-[48px] lg:text-[56px]">
          Blog
        </h2>
        <div className="flex flex-col justify-center gap-y-[32px] mb-[32px] md:mb-[48px] md:flex-row md:justify-between">
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

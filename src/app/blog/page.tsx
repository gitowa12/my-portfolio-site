import Card from "@/components/Card";
import { client } from "@/libs/client";

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

const Blog = async () => {
  const res = await fetch("http://localhost:3000/api/blog", { next: { revalidate: 0 } });
  const data = await res.json();
  const blogs = data.contents;
  console.log("blogs", blogs);

  // const res = await client.get({
  //   customRequestInit: {
  //     cache: "no-store", // キャッシュを利用せずに常に新しいデータを取得する
  //   },
  //   endpoint: "blog",
  // });
  // console.log("response", res);
  // const blogs = res.contents;
  // return NextResponse.json(res);

  return (
    <>
      {/* <div className="flex flex-col justify-center items-center mt-[32px] mb-[64px]">
        <h2 className="text-[40px] font-bold mb-[32px]">Blog</h2>
        <div className="flex flex-col gap-y-[28px]">
          {blogs.map((item: Blog) => (
            <Card key={item.id} item={item} category="blog"></Card>
          ))}
        </div>
      </div> */}
      <div className="  my-[32px] md:my-[48px] lg:my-[62px] ">
        <div className="flex flex-col justify-center items-center ">
          <h2 className="text-[40px] font-bold mb-[32px] md:text-[48px]  md:mb-[48px] lg:text-[56px]">
            Blog
          </h2>

          <div className="flex flex-col justify-center gap-y-[24px] mb-[32px] md:mb-[48px] md:flex-row md:flex-wrap md:justify-between">
            {blogs.map((item: Blog) => (
              <Card key={item.id} item={item} category="work"></Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;

import Card from "@/components/Card";
import { client } from "@/libs/client";
import { BlogItem } from "@/types/types";
const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const Blog = async () => {
  // const res = await fetch(`${apiUrl}/api/blog`, { next: { revalidate: 0 } });
  // const data = await res.json();
  // const blogs = data.contents;
  // console.log("blogs", blogs);

  const res = await client.get({
    endpoint: "blog",
    // customRequestInit: {
    //   cache: "no-cache", // キャッシュを利用せずに常に新しいデータを取得する
    // },
  });
  // console.log("blog_res", res);

  const blogs = res.contents;
  console.log("blogs", blogs);

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
      <div className=" my-[32px] md:my-[48px] lg:my-[62px] ">
        <div className="flex flex-col justify-center items-center ">
          <h2 className="text-[40px] font-bold mb-[32px] md:text-[48px]  md:mb-[48px] lg:text-[56px]">
            Blog
          </h2>

          <div className="flex flex-col justify-center w-full gap-y-[24px] mb-[32px] md:mb-[48px] md:gap-y-[40px] md:flex-row md:flex-wrap md:justify-between">
            {blogs.map((item: BlogItem) => (
              <Card key={item.id} item={item} category="blog"></Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;

import { client } from "@/libs/client";
import { log } from "console";
import parse from "html-react-parser";

type Props = {
  params: {
    id: string;
  };
};

const BlogItem = async ({ params }: Props) => {
  const pageId = params.id;
  const res = await fetch(`http://localhost:3000/api/blog/${pageId}`, { next: { revalidate: 0 } });
  console.log("res", res);
  const page = await res.json();

  // const res = await client.get({
  //   customRequestInit: {
  //     cache: "no-store", // キャッシュを利用せずに常に新しいデータを取得する
  //   },
  //   endpoint: "blog",
  //   contentId: pageId,
  // });
  // console.log("resres", res);
  // const page = res;

  return (
    <>
      <div className="py-[32px] blogContent">
        <div className="border-b-4 pb-[8px] mb-[20px]">
          <h1 className="mb-[8px]">{page.title}</h1>
          <p className="text-[14px] text-[#666] p-[8px]">更新日{page.updatedAt}</p>
        </div>
        <div>{parse(page.content)}</div>
      </div>
    </>
  );
};

export default BlogItem;

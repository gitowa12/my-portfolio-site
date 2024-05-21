import { client } from "@/libs/client";
import { formatDate } from "@/utils/format.Date";

import parse from "html-react-parser";

type Props = {
  params: {
    id: string;
  };
};
const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const BlogItem = async ({ params }: Props) => {
  const pageId = params.id;

  // const res = await fetch(`${apiUrl}/api/blog/${pageId}`, { next: { revalidate: 0 } });
  // console.log("res", res);
  // const page = await res.json();

  const res = await client.get({
    customRequestInit: {
      cache: "no-store", // キャッシュを利用せずに常に新しいデータを取得する
    },
    endpoint: "blog",
    contentId: pageId,
  });
  console.log("blogItem_res", res);
  const page = res;
  const formatedDate = formatDate(page.updatedAt);

  return (
    <>
      <div className="max-w-[800px] mx-auto py-[32px] md:py-[48px] lg:py-[64px] prose">
        <div className="border-b-4 pb-[8px] mb-[20px]">
          <h1 className="mb-[8px]">{page.title}</h1>
          <p className="text-[14px] text-[#666] p-[8px]">更新日{formatedDate}</p>
        </div>
        <div>{parse(page.content)}</div>
      </div>
    </>
  );
};

export default BlogItem;

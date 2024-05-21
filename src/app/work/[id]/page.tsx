import { client } from "@/libs/client";
import { formatDate } from "@/utils/format.Date";
import parse from "html-react-parser";

type Props = {
  params: {
    id: string;
  };
};

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const WorkItem = async ({ params }: Props) => {
  const pageId = params.id;

  // const res = await fetch(`${apiUrl}/api/work/${pageId}`, { next: { revalidate: 0 } });
  // console.log("res", res);
  // const page = await res.json();
  // console.log("page", page);

  const res = await client.get({
    endpoint: "work",
    contentId: pageId,
    customRequestInit: {
      cache: "no-cache", // キャッシュを利用せずに常に新しいデータを取得する
    },
  });
  console.log("workItem", res);
  const page = res;

  const formatedDate = formatDate(page.updatedAt);
  return (
    <>
      {/* proseはTailWindCSSで打ち消されたデフォルトスタイルを復活させる */}
      <div className="max-w-[800px] mx-auto py-[32px] md:py-[48px] lg:py-[64px] prose">
        <div className="border-b-4 pb-[8px] mb-[20px]">
          <h1 className="mb-[8px]">{page.title}</h1>
          <p className="text-[14px] text-[#666] p-[8px]">更新日{formatedDate}</p>
        </div>
        <div>{page.content ? parse(page.content) : ""}</div>
      </div>
    </>
  );
};

export default WorkItem;

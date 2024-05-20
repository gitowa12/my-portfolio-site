import { client } from "@/libs/client";
import parse from "html-react-parser";

type Props = {
  params: {
    id: string;
  };
};

const WorkItem = async ({ params }: Props) => {
  const pageId = params.id;

  const res = await fetch(`http://localhost:3000/api/work/${pageId}`, { next: { revalidate: 0 } });
  console.log("res", res);
  const page = await res.json();
  console.log("data", page);

  // const res = await client.get({
  //   endpoint: "work",
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

export default WorkItem;

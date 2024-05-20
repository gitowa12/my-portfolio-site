import Card from "@/components/Card";
import { client } from "@/libs/client";

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

const Work = async () => {
  const res = await fetch("http://localhost:3000/api/work", { next: { revalidate: 0 } });
  const data = await res.json();
  const works = data.contents;
  console.log("works", works);

  // const res = await client.get({
  //   endpoint: "work",
  // });
  // const works = res.contents;
  // console.log("top", works);

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-[32px] mb-[64px]">
        <h2 className="text-[40px] font-bold mb-[32px]">Work</h2>
        <div className="flex flex-col gap-y-[28px]">
          {works.map((item: Work) => (
            <Card key={"card"} item={item} category="work"></Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Work;

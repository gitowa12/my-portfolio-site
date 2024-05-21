import Card from "@/components/Card";
import { client } from "@/libs/client";
import { WorkItem } from "@/types/types";

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const isBuild = process.env.NODE_ENV === "production" && typeof window === "undefined";

// export async function GET() {
//   try {
//     const res = await client.get({
//       customRequestInit: {
//         cache: "no-store", // キャッシュを利用せずに常に新しいデータを取得する
//       },
//       endpoint: "work",
//     });
//     console.log("response", res);
//     return res;
//   } catch (error) {
//     console.error("Error fetching data from Notion:", error);
//     return;
//   }
// }

const Work = async () => {
  // const res = await fetch(`${apiUrl}/api/work`, { next: { revalidate: 0 } });
  // const data = await res.json();
  // const works = data.contents;
  // console.log("works", works);

  const res = await client.get({
    endpoint: "work",
    // ...(isBuild ? {} : { customRequestInit: { cache: "no-store" } }),
    // customRequestInit: {
    //   cache: "no-cache", // キャッシュを利用せずに常に新しいデータを取得する
    // },
  });
  const works = res.contents;
  console.log("works", works);

  return (
    <>
      {/* <div className="flex flex-col justify-center items-center mt-[32px] mb-[64px]">
        <h2 className="text-[40px] font-bold mb-[32px]">Work</h2>
        <div className="flex flex-col gap-y-[28px]">
          {works.map((item: Work) => (
            <Card key={"card"} item={item} category="work"></Card>
          ))}
        </div>
      </div> */}

      <div className="flex flex-col justify-center items-center my-[32px] md:my-[48px] lg:my-[62px] ">
        <h2 className="text-[40px] font-bold mb-[32px] md:text-[48px] md:mb-[48px] lg:text-[56px]">
          Work
        </h2>
        <div className="flex flex-col justify-center gap-y-[24px] mb-[32px] md:mb-[48px] md:gap-y-[40px] md:flex-row md:flex-wrap md:justify-between">
          {works.map((item: WorkItem) => (
            <Card key={item.id} item={item} category="work"></Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Work;

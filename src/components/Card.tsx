import { formatDate } from "@/utils/format.Date";
import Link from "next/link";
import React from "react";

type Props = {
  item: {
    id: string;
    createdAt: string;
    updatedAt: string;
    title: string;
    summary: string;
    eyecatch: {
      url: string;
    };
  };
  category: string;
};

const Card = ({ item, category }: Props) => {
  const formatedDate = formatDate(item.updatedAt);
  return (
    <div key={item.id} className=" md:max-w-[48%]">
      <Link className="group" href={`/${category}/${item.id}`}>
        <div className="mb-[12px] flex items-center aspect-video border">
          <img
            className="group-hover:opacity-80"
            src={item.eyecatch?.url || "/grayBox.svg"}
            alt=""
          />
        </div>
        <div className="">
          <p className="font-bold text-[20px] mb-[4px] group-hover:underline  underline-offset-4 lg:text-[24px] lg:decoration-[3px] lg:underline-offset-[6px] ">
            {item.title}
          </p>
          <div className="">
            <p className="text-[14px] lg:text-[18px] no-underline mb-1">{item.summary}</p>
            <p className="text-[12px] lg:text-[14px] no-underline">更新n日時 {formatedDate}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;

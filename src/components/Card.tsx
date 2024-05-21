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
        <p className="font-bold text-[20px] mb-[4px] group-hover:underline  underline-offset-4 lg:text-[24px] lg:decoration-[3px] lg:underline-offset-[6px] ">
          {item.title}
        </p>
        <p className="text-[14px] lg:text-[18px] no-underline">{item.summary}</p>
      </Link>
    </div>
  );
};

export default Card;

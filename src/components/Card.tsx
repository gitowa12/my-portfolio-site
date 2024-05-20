import Link from "next/link";
import React from "react";

type Props = {
  item: {
    id: string;
    createdAt: string;
    updatedAt: string;
    title: string;
    eyecatch: {
      url: string;
    };
  };
  category: string;
};

const Card = ({ item, category }: Props) => {
  return (
    <div key={item.id} className="md:max-w-[48%]">
      <Link href={`/${category}/${item.id}`}>
        <div className=" mb-[12px] ">
          <img className="w-full" src={item.eyecatch?.url || "/grayBox.svg"} alt="" />
        </div>
        <p className="font-bold text-[20px] mb-[4px] lg:text-[24px]">{item.title}</p>
        <p className="text-[14px] lg:text-[18px]">{item.id}</p>
      </Link>
    </div>
  );
};

export default Card;

import Link from "next/link";
import React from "react";

type Props = {
  href: string;
};

const buttonStyle =
  "text-center  min-w-[120px] max-w-[260px] border-4 font-bold border-black rounded-full   transition shadow text-[18px] px-[44px] py-[8px] md:text-[20px] md:px-[58px] lg:text-[24px] lg:px-[52px] ";

const before =
  "before:absolute before:skew-x-[20deg]  before:bg-cyan-400 before:scale-110 before:w-full before:h-full before:top-0 before:-left-5 before:origin-top-left before:z-[-1] before:transition before:duration-300 before:scale-x-0 before:hover:scale-x-150";

const Button = ({ href }: Props) => {
  return (
    <div className="w-full flex justify-center">
      <Link
        href={href}
        className={` ${buttonStyle} relative overflow-hidden before:duration-1000 ${before} `}
      >
        See More
      </Link>
    </div>
  );
};

export default Button;

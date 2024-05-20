import Link from "next/link";
import React from "react";

type Props = {
  href: string;
};

const Button = ({ href }: Props) => {
  return (
    <div className="w-full flex justify-center">
      <Link
        href={href}
        className="text-center w-[30%] min-w-[120px] max-w-[260px] border-4 font-bold border-black bg-cyan-400 rounded-full py-[6px] transition hover:shadow-lg sm:text-[20px] sm:py-[8px] md:py-[8px] md:text-[24px] lg:py-[10px] lg:text-[28px]"
      >
        See More
      </Link>
    </div>
  );
};

export default Button;

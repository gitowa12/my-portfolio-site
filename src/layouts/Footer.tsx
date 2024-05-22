import Link from "next/link";

const Footer = () => {
  const before =
    "before:absolute before:rounded before:w-full before:h-0.5 before:bg-cyan-400 before:-bottom-0 before:left-0 before:origin-top-left before:scale-100 before:z-[-1] before:transition before:duration-150 before:scale-x-0 before:hover:scale-x-100  before:md:h-1 before:md:-bottom-1 before:lg:-bottom-2";

  return (
    <div>
      <nav>
        <ul className="mb-[24px] flex flex-col items-center md:flex-row lg:mb-[32px]">
          <li
            className={`font-bold tracking-wide text-lg w-full text-center border-y h-[48px] flex items-center justify-center  md:border-y-0 md:border-t md:text-[20px] lg:text-[22px] md:h-[52px] lg:h-[60px] `}
          >
            {/* <a href="#about">About</a> */}
            <Link href="/about" className={`relative ${before}`}>
              About
            </Link>
          </li>
          <li
            className={`font-bold tracking-wide text-lg w-full text-center border-b h-[48px] flex items-center justify-center  md:border-b-0 md:border-t md:text-[20px] lg:text-[22px] md:h-[52px] lg:h-[60px] `}
          >
            {/* <a href="#work">Work</a> */}
            <Link href="work" className={`relative ${before}`}>
              Work
            </Link>
          </li>
          <li
            className={`font-bold tracking-wide text-lg w-full text-center border-b h-[48px] flex items-center justify-center  md:border-b-0 md:border-t md:text-[20px] lg:text-[22px] md:h-[52px] lg:h-[60px] `}
          >
            {/* <a href="#blog">Blog</a> */}
            <Link href="/blog" className={`relative ${before}`}>
              Blog
            </Link>
          </li>
          <li
            className={`font-bold tracking-wide text-lg w-full text-center border-b h-[48px] flex items-center justify-center  md:border-b-0 md:border-t md:text-[20px] lg:text-[22px] md:h-[52px] lg:h-[60px] `}
          >
            <Link href="https://x.com/towa97674795586" className={`relative ${before}`}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="mb-[24px] flex justify-between items-center">
        <p className="leading-none text-[12px] text-gray-600 md:text-[14px] lg:text-[14px]">
          ©Towa
        </p>
        <div className="flex">
          <a className="mr-[8px]" href="https://x.com/towa97674795586">
            <img className="md:w-[22px] lg:w-[24px]" src="/x.svg" alt="" />
          </a>
          <a href="#">
            <img className="md:w-[22px] lg:w-[24px]" src="/instagram.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

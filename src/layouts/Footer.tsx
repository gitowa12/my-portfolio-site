import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <nav>
        <ul className="mb-[24px] flex flex-col items-center md:flex-row lg:mb-[32px]">
          <li className="font-bold tracking-wide text-lg w-full text-center border-y h-[48px] flex items-center justify-center  md:border-y-0 md:border-t md:text-[20px] lg:text-[22px] md:h-[52px] lg:h-[60px]">
            {/* <a href="#about">About</a> */}
            <Link href="/about">About</Link>
          </li>
          <li className="font-bold tracking-wide text-lg w-full text-center border-b h-[48px] flex items-center justify-center  md:border-b-0 md:border-t md:text-[20px] lg:text-[22px] md:h-[52px] lg:h-[60px]">
            {/* <a href="#work">Work</a> */}
            <Link href="/Work">Work</Link>
          </li>
          <li className="font-bold tracking-wide text-lg w-full text-center border-b h-[48px] flex items-center justify-center  md:border-b-0 md:border-t md:text-[20px] lg:text-[22px] md:h-[52px] lg:h-[60px]">
            {/* <a href="#blog">Blog</a> */}
            <Link href="/blog">Blog</Link>
          </li>
          <li className="font-bold tracking-wide text-lg w-full text-center border-b h-[48px] flex items-center justify-center  md:border-b-0 md:border-t md:text-[20px] lg:text-[22px] md:h-[52px] lg:h-[60px]">
            {/* <a href="#contact">Contact</a> */}
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="mb-[24px] flex justify-between items-center">
        <p className="leading-none text-[12px] text-gray-600 md:text-[14px] lg:text-[14px]">
          ©Towa
        </p>
        <div className="flex">
          <a className="mr-[8px]" href="#">
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

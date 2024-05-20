import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <nav>
        <ul className="mb-[24px] flex flex-col items-center">
          <li className="font-bold tracking-wide text-lg w-full text-center border-y h-[48px] flex items-center justify-center">
            {/* <a href="#about">About</a> */}
            <Link href="/about">About</Link>
          </li>
          <li className="font-bold tracking-wide text-lg w-full text-center border-b h-[48px] flex items-center justify-center">
            {/* <a href="#work">Work</a> */}
            <Link href="/Work">Work</Link>
          </li>
          <li className="font-bold tracking-wide text-lg w-full text-center border-b h-[48px] flex items-center justify-center">
            {/* <a href="#blog">Blog</a> */}
            <Link href="/blog">Blog</Link>
          </li>
          <li className="font-bold tracking-wide text-lg w-full text-center border-b h-[48px] flex items-center justify-center">
            {/* <a href="#contact">Contact</a> */}
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="mb-[24px] flex justify-between items-center">
        <p className="leading-none text-[12px] text-gray-600">©Towa</p>
        <div className="flex">
          <a className="mr-[8px]" href="#">
            <img src="/x.svg" alt="" />
          </a>
          <a href="#">
            <img src="/instagram.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

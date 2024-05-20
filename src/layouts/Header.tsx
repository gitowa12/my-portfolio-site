import Link from "next/link";
import HambugerMenu from "../components/HambugerMenu";

const Header = () => {
  return (
    <>
      <header className="h-14 flex justify-between items-center md:h-16">
        <h1
          className={`font-bold tracking-widest text-xl transition  duration-100 md:text-[20px] lg:text-[22px] `}
        >
          <Link href="/">TOWA</Link>
        </h1>
        <div className="md:hidden">
          {/* <img src="/menu.svg" alt="メニュー" className="w-6 h-6" /> */}
          <HambugerMenu></HambugerMenu>
        </div>
        <div className="hidden md:block">
          <nav>
            <ul className="flex space-x-4">
              <li className="font-bold tracking-wide text-lg md:text-[20px] lg:text-[22px]">
                <Link href="/about">About</Link>
              </li>
              <li className="font-bold tracking-wide text-lg md:text-[20px] lg:text-[22px]">
                <Link href="/work">Work</Link>
              </li>
              <li className="font-bold tracking-wide text-lg md:text-[20px] lg:text-[22px]">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="font-bold tracking-wide text-lg md:text-[20px] lg:text-[22px]">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;

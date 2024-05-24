import Link from "next/link";
import HambugerMenu from "../components/HambugerMenu";

const before =
  "before:absolute before:rounded before:w-full before:h-1 before:bg-cyan-400 before:-bottom-2 before:left-0 before:origin-top-left before:scale-100 before:z-[-1] before:transition before:duration-150 before:scale-x-0 before:hover:scale-x-100";

const logo_before =
  "before:absolute before:rounded before:w-full before:h-full before:h-1 before:bg-cyan-400 before:-top-0 before:-left-1 before:origin-top-left  before:z-[-1] before:transition before:duration-150 before:scale-x-0 before:hover:scale-x-110";

const Header = () => {
  return (
    <>
      <header className="h-10 flex justify-between items-center md:h-12">
        <h1
          className={`font-bold tracking-widest text-xl transition  duration-100 md:text-[20px] lg:text-[22px] relative`}
        >
          <Link href="/">TOWA</Link>
        </h1>
        <div className="md:hidden">
          {/* <img src="/menu.svg" alt="メニュー" className="w-6 h-6" /> */}
          <HambugerMenu></HambugerMenu>
        </div>
        <div className="hidden md:block">
          <nav>
            <ul className="flex space-x-4 md:space-x-6">
              <li
                className={`font-bold tracking-wide text-lg md:text-[18px] lg:text-[20px] relative ${before}`}
              >
                <Link href="/about">About</Link>
              </li>
              <li
                className={`font-bold tracking-wide text-lg md:text-[18px] lg:text-[20px] relative ${before}`}
              >
                <Link href="/work">Work</Link>
              </li>
              <li
                className={`font-bold tracking-wide text-lg md:text-[18px] lg:text-[20px] relative ${before}`}
              >
                <Link href="/blog">Blog</Link>
              </li>
              <li
                className={`font-bold tracking-wide text-lg md:text-[18px] lg:text-[20px] relative ${before}`}
              >
                <Link href="https://x.com/towa97674795586">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;

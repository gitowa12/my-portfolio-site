"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const noscroll = (e: any) => {
  e.preventDefault();
};

const FloatMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const targetPosition = 60; // ここで特定の位置を設定

      if (scrollPosition >= targetPosition) {
        setIsShow(true);
      } else {
        setIsShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // クリーンアップ関数でイベントリスナーを削除
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      // document.body.style.overflow = "hidden";
      document.addEventListener("touchmove", noscroll, { passive: false });
      document.addEventListener("wheel", noscroll, { passive: false });
    } else {
      // document.body.style.overflow = "auto";
      document.removeEventListener("touchmove", noscroll);
      document.removeEventListener("wheel", noscroll);
    }
  }, [isOpen]);

  const toggle = () => {
    setIsOpen(!isOpen);
    setIsShow(!isShow);
  };

  const buttonBefore = `before:absolute before:z-[-1] before:rounded-full before:bg-cyan-400 before:w-full before:h-full before:-bottom-2 before:-left-2  before:origin-bottom-left before:scale-0 before:hover:scale-150 before:transition before:duration-300`;
  return (
    <>
      <div className="hidden md:block">
        <button
          className={`relative  backdrop-blur z-50 border-4 border-black 0 rounded-full p-2 transition-all duration-200  ${
            isShow ? "opacity-100 visible " : "opacity-0 invisible "
          } overflow-hidden ${buttonBefore}`}
          onClick={toggle}
        >
          <img src="/menu.svg" alt="メニュー" className="size-8" />
        </button>

        <div
          className={`bg-black/5 backdrop-blur-lg fixed z-[100] top-0 left-0 w-full h-full mx-auto  transition-all duration-200 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="max-w-[1200px] mx-auto py-[22px] ">
            <div className="h-[60px] flex justify-between items-center ">
              <h1 className="font-bold tracking-widest text-[24px] ">
                <Link href="/">TOWA</Link>
              </h1>
              <button
                className={`hamburger-menu border-4 border-black rounded-full p-2 relative overflow-hidden ${buttonBefore}`}
                onClick={toggle}
              >
                <img src="/close.svg" alt="メニュー" className="size-8" />
              </button>
            </div>
            <div className="max-w-[340px] mx-auto">
              <nav>
                <ul className=" flex flex-col justify-center items-center space-y-[4px]">
                  <li className="font-semibold tracking-wide text-[36px] underline-offset-4 hover:underline">
                    <Link href="/about" onClick={toggle}>
                      About
                    </Link>
                  </li>
                  <li className="font-semibold tracking-wide text-[36px] underline-offset-4 hover:underline">
                    <Link href="/work" onClick={toggle}>
                      Work
                    </Link>
                  </li>
                  <li className="font-semibold tracking-wide text-[36px] underline-offset-4 hover:underline">
                    <Link href="/blog" onClick={toggle}>
                      Blog
                    </Link>
                  </li>
                  <li className="font-semibold tracking-wide text-[36px] underline-offset-4 hover:underline">
                    <Link href="/contact" onClick={toggle}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatMenu;

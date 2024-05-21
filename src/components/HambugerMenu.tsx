"use client";

import Link from "next/link";
import { useState } from "react";

const HambugerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    console.log("動いてるよ");
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="hamburger-menu" onClick={toggle}>
        <img src="/menu.svg" alt="メニュー" className="w-6 h-6" />
      </button>

      <div
        className={`bg-black/5 backdrop-blur-lg fixed z-50 top-0 left-0 w-full h-full transition-opacity duration-200 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="mx-auto px-[24px] ">
          <div className="h-14 flex justify-between items-center ">
            <h1 className="font-bold tracking-widest text-xl ">
              <Link href="/">TOWA</Link>
            </h1>

            <button className="hamburger-menu" onClick={toggle}>
              <img src="/cancel-outline.svg" alt="メニュー" className="w-6 h-6" />
            </button>
          </div>
          <div className="max-w-[340px] mx-auto">
            <nav>
              <ul className=" flex flex-col justify-center space-y-[4px]">
                <li className="font-semibold tracking-wide text-[36px] ">
                  <Link href="/about" onClick={toggle}>
                    About
                  </Link>
                </li>
                <li className="font-semibold tracking-wide text-[36px]">
                  <Link href="/work" onClick={toggle}>
                    Work
                  </Link>
                </li>
                <li className="font-semibold tracking-wide text-[36px]">
                  <Link href="/blog" onClick={toggle}>
                    Blog
                  </Link>
                </li>
                <li className="font-semibold tracking-wide text-[36px]">
                  <Link href="/contact" onClick={toggle}>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
    // <>
    //   {!isOpen ? (
    //     <button className="hamburger-menu" onClick={toggle}>
    //       <img src="/menu.svg" alt="メニュー" className="w-6 h-6" />
    //     </button>
    //   ) : (
    //     <div className="backdrop-blur-lg fixed top-0 left-0 w-full h-full">
    //       <div className="mx-auto px-[24px]">
    //         <div className="h-14 flex justify-between items-center">
    //           <h1 className="font-bold tracking-widest text-xl">
    //             <Link to="/">TOWA</Link>
    //           </h1>
    //           <button className="hamburger-menu" onClick={toggle}>
    //             <img src="/cancel-outline.svg" alt="メニュー" className="w-6 h-6" />
    //           </button>
    //         </div>
    //         <div className="max-w-[340px] mx-auto">
    //           <nav>
    //             <ul className=" flex flex-col justify-center space-y-[4px]">
    //               <li className="font-semibold tracking-wide text-[36px]">
    //                 <Link to="/about">About</Link>
    //               </li>
    //               <li className="font-semibold tracking-wide text-[36px]">
    //                 <Link to="/Work">Work</Link>
    //               </li>
    //               <li className="font-semibold tracking-wide text-[36px]">
    //                 <Link to="/blog">Blog</Link>
    //               </li>
    //               <li className="font-semibold tracking-wide text-[36px]">
    //                 <Link to="/contact">Contact</Link>
    //               </li>
    //             </ul>
    //           </nav>
    //         </div>
    //       </div>
    //     </div>
    //   )}
    // </>
  );
};

export default HambugerMenu;

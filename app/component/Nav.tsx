"use client";
import Image from "next/image";
import Logo from "../../public/Logo.png";
import Link from "next/link";

import NavItems from "./NavItems";
import { useState } from "react";

export default function Nav() {
  const [openNav, setOpenNav] = useState(false);

  function handleClick() {
    setOpenNav((prev) => !prev);
  }

  return (
    <nav className="fixed w-full z-3 backdrop-blur-sm">
      <section className="flex justify-between py-5 px-[5%] font-[poppins]  items-center">
        <Link href="/">
          <Image src={Logo} width="115" height="35" alt="Website Logo" />
        </Link>

        <button
          className="flex flex-col border-2 cursor-pointer p-2 hover:bg-[#00000055] lg:hidden"
          onClick={handleClick}
        >
          {openNav ? (
            <span className='text-[1rem]'> ✕ </span>
          ) : (
            <div className="flex flex-col gap-[5px] ">
              <div className="w-[20px] h-[3px] bg-black"></div>
              <div className="w-[20px] h-[3px] bg-black"></div>
              <div className="w-[20px] h-[3px] bg-black"></div>
            </div>
          )}
        </button>

        <ul className="lg:flex hidden items-center gap-x-10">
          <NavItems />
        </ul>
      </section>

      {openNav && (
        <ul className="lg:hidden flex flex-col py-[10px] px-[20px] border-b-1 bg-[#e8e4d181] ">
          <NavItems />
        </ul>
      )}
    </nav>
  );
}

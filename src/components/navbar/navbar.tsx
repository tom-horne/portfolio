"use client";

import React, { useState } from "react";
import Link from "next/link";
import { EllipsisVerticalIcon, XMarkIcon } from "@heroicons/react/20/solid";

type NavBarProps = {
  title: string;
};

const NavBar: React.FC<NavBarProps> = ({ title }) => {
  const [menuIcon, setMenuIcon] = useState(false);

  const handleMenuIcon = () => {
    setMenuIcon(!menuIcon);
  };

  return (
    <header className="w-full bg-slate-100 border-b-8 border-black shadow-inner top-0 ease-in duration-300 fixed left-0 z-10">
      <nav className="flex justify-between items-center p-4 h-16 max-w-[960px] mx-auto">
        <div className="flex justify-between">
          <Link className="no-underline text-black" href="/">
            <p>TH</p>
          </Link>
          <p className="pl-2 hidden md:flex text-black">{title}</p>
        </div>

        <ul className="hidden md:flex gap-x-6 list-none">
          <li>
            <Link className="no-underline text-black" href="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="no-underline text-black" href="/university">
              University
            </Link>
          </li>
          <li>
            <Link className="no-underline text-black" href="/projects">
              Projects
            </Link>
          </li>
        </ul>

        <div onClick={handleMenuIcon} className="flex md:hidden">
          {menuIcon ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <EllipsisVerticalIcon className="h-6 w-6" />
          )}
        </div>

        <div
          className={
            menuIcon
              ? "md:hidden absolute w-60 h-60 top-16 right-0 flex justify-center items-center bg-slate-100 ease-in duration-300 rounded-b-lg"
              : "md:hidden absolute w-60 h-60 top-[-380%] right-0 flex justify-center items-center bg-slate-100 ease-in duration-300 rounded-b-lg"
          }
        >
          <div className="mr-10 w-full">
            <ul className="list-none text-center">
              <Link href="/about" className="text-black no-underline">
                <li onClick={handleMenuIcon} className="p-4 my-2 rounded-xl">
                  About
                </li>
              </Link>
              <hr />
              <Link href="/university" className="text-black no-underline">
                <li onClick={handleMenuIcon} className="p-4 my-2 rounded-xl">
                  University
                </li>
              </Link>
              <hr />
              <Link href="/projects" className="text-black no-underline">
                <li onClick={handleMenuIcon} className="p-4 my-2 rounded-xl">
                  Projects
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

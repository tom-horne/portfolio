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
    <header className="w-full bg-slate-50 border-0 border-b-[0.5px] border-solid border-slate-300 shadow-inner top-0 ease-in duration-300 fixed left-0 z-10">
      <nav className="flex justify-between items-center h-16 max-w-[960px] mx-auto">
        <div className="flex justify-between">
          <Link className="no-underline text-white" href="/">
            <h3 className="p-1 bg-primary hover:bg-primaryhover rounded-md">
              TH
            </h3>
          </Link>
        </div>
        <div className="mr-auto">
          <p className="pl-2 hidden md:flex text-black">{title}</p>
        </div>

        <ul className="hidden md:flex gap-x-6 list-none my-0">
          <Link
            className="no-underline text-black hover:text-blue-400"
            href="/about"
          >
            <li className="h-16 hover:border-b hover:border-0 hover:border-solid active:border-b active:border-0 active:border-solid">
              About
            </li>
          </Link>
          <Link
            className="no-underline text-black hover:text-blue-400"
            href="/university"
          >
            <li className="h-16 hover:border-b hover:border-0 hover:border-solid">
              University
            </li>
          </Link>
          <Link
            className="no-underline text-black hover:text-blue-400"
            href="/projects"
          >
            <li className="h-16 hover:border-b hover:border-0 hover:border-solid">
              Projects
            </li>
          </Link>
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

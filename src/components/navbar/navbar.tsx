"use client";

import React, { useState } from "react";
import Link from "next/link";
import { EllipsisVerticalIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { IoLogoGithub } from "react-icons/io";

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
        <div className="">
          <Link className="no-underline text-white" href="/">
            <h3 className="px-1 bg-primary hover:bg-primaryhover rounded-md md:ml-0 ml-3">
              TH
            </h3>
          </Link>
        </div>
        <div className="mr-auto">
          <p className="pl-2 hidden md:flex text-black">{title}</p>
        </div>

        <ul className="h-full hidden md:flex gap-x-6 list-none my-0 pl-0">
          <Link
            className="no-underline text-black hover:text-blue-400 hover:border-b hover:border-0 hover:border-solid"
            href="/about"
          >
            <li className="my-[40%]">About</li>
          </Link>
          <Link
            className="no-underline text-black hover:text-blue-400 hover:border-b hover:border-0 hover:border-solid"
            href="/university"
          >
            <li className="my-[18.922px]">University</li>
          </Link>
          <Link
            className="no-underline text-black hover:text-blue-400 hover:border-b hover:border-0 hover:border-solid"
            href="/projects"
          >
            <li className="my-[18.922px]">Projects</li>
          </Link>
          <Link href="https://github.com/tom-horne" target="_blank">
            <li className="my-[50%]">
              <IoLogoGithub size="30px" style={{ color: "black" }} />
            </li>
          </Link>
        </ul>

        <div onClick={handleMenuIcon} className="flex md:hidden">
          {menuIcon ? (
            <XMarkIcon className="h-6 w-6 mr-4" />
          ) : (
            <EllipsisVerticalIcon className="h-6 w-6 mr-4" />
          )}
        </div>

        <div
          className={
            menuIcon
              ? "md:hidden absolute w-60 h-60 top-16 right-0 flex justify-center items-center bg-slate-50 ease-in duration-300 rounded-b-lg border-slate-300 border-l border-b border-0 border-solid"
              : "md:hidden absolute w-60 h-60 top-[-380%] right-0 flex justify-center items-center bg-slate-50 ease-in duration-300 rounded-b-lg border-slate-300 border-b border-0 border-solid"
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

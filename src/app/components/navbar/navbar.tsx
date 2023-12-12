"use client";

import React, { useState } from 'react'
import Link from 'next/link'
import { EllipsisVerticalIcon, XMarkIcon } from '@heroicons/react/20/solid';

type NavBarProps = {
  title: string
}

const NavBar: React.FC<NavBarProps> = ({title}) => {

  const [menuIcon, setMenuIcon] = useState(false);

  const handleMenuIcon = () =>
  {
    setMenuIcon( !menuIcon );
  };

  return (
    <header className="w-full bg-red-900 top-0 ease-in duration-300 fixed left-0 z-10">
      <nav className="flex justify-between items-center p-4 h-16 max-w-[1366px] mx-auto">

        <div>
          <Link href="/">
              <h2>TH</h2>
              <h1 className="hidden md:flex text-white">{title}</h1>
            </Link>
        </div>
        
        <ul className="hidden md:flex gap-x-6 text-white">
          <li>
            <Link href="/myprojects">Projects</Link> 
          </li>

          <li>
            <Link href="/about">About</Link>
          </li>
           
          <li>
            <Link href="/university">University</Link>
          </li>
        </ul>

        <div onClick={handleMenuIcon} className="flex md:hidden">
          {menuIcon ?
            ( <XMarkIcon className="h-6 w-6" /> )
            :
            ( <EllipsisVerticalIcon className="h-6 w-6" /> )
          }
        </div>

        <div className={menuIcon ?
          "md:hidden absolute w-60 h-60 top-16 right-0 flex justify-center items-center bg-red-900 ease-in duration-300 rounded-b-lg"
          :
          "md:hidden absolute w-60 h-60 top-[-350%] right-0 flex justify-center items-center bg-red-900 ease-in duration-300 rounded-b-lg"
        }>
          
          <div className="w-full">
            <ul className="text-white mx-2">

              
                <Link href="/myprojects">
                  <li onClick={handleMenuIcon} className="bg-purple-500 p-4 my-2 rounded-xl">
                    Projects
                  </li>
                </Link> 

              <li onClick={handleMenuIcon} className="bg-purple-500 p-4 my-2 rounded-xl">
                <Link href="/about">About</Link>
              </li>
              
              <li onClick={handleMenuIcon} className="bg-purple-500 p-4 my-2 rounded-xl">
                <Link href="/university">University</Link>
              </li>
            </ul>
          </div>

        </div>

      </nav>
    </header>

  )
}

export default NavBar
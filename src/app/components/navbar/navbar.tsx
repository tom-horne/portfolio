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
          <Link href="/" onClick={handleMenuIcon}>
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
        

      </nav>
    </header>

  )
}

export default NavBar
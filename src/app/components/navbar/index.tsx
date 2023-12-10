import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div className="w-full h-20 bg-red-900 sticky top-0">
      <div className="container mx-auto px-4 h-full bg-green-500">
        <div className="flex justify-between items-center h-full bg-blue-500">
          <Link href="/">
            <h1>Logo</h1>
          </Link>
          <ul className="hidden md:flex gap-x-6 text-white">
            <li>
              Projects
            </li>
            <li>
              About Me
            </li>
            <Link href="/university">
              <li>
                University
              </li>
            </Link>
          </ul>
          {/* <div>lol</div> */}
        </div>
      </div>
    </div>

  )
}

export default NavBar
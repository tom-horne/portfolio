import Link from "next/link";
import React from "react";

type FooterProps = {};

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer>
      <div className="bottom-0 h-80 text-center bg-slate-800">
        <h1 className="text-white">Foota</h1>
        <ul className="list-none pl-0 mx-auto box-border">
          <li>
            <Link href="/" className="text-white no-underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white no-underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/university" className="text-white no-underline">
              University
            </Link>
          </li>
          <li>
            <Link href="/projects" className="text-white no-underline">
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

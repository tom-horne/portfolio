import Link from "next/link";
import React from "react";
import { IoLogoGithub } from "react-icons/io";

type FooterProps = {};

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer>
      <div className="bottom-0 h-80 text-center bg-slate-800">
        {/* <h1 className="text-white">Foota</h1> */}
        <ul className="list-none pl-0 mx-auto box-border items-center">
          <li>
            <Link className="no-underline text-white" href="/">
              <h3 className="px-1 bg-primary hover:bg-primaryhover rounded-md inline-block">
                TH
              </h3>
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
          <li className="mt-4">
            <Link href="https://github.com/tom-horne" target="_blank">
              <IoLogoGithub size="30px" style={{ color: "white" }} />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

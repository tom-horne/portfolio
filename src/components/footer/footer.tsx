import Link from "next/link";
import React from "react";

type FooterProps = {};

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer>
      <div className="bottom-0 h-80 bg-slate-800">
        <div>
          <h2 className="p-4 text-center text-white">Foota</h2>
        </div>
        <div className="text-center">
          <Link href="/" className="no-underline text-white">
            <h4>Home</h4>
          </Link>
          <Link href="/about" className="no-underline text-white">
            <h4>About</h4>
          </Link>
          <Link href="/projects" className="no-underline text-white">
            <h4>Projects</h4>
          </Link>
          <Link href="/university" className="no-underline text-white">
            <h4>University</h4>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

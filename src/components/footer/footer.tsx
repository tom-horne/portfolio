import Link from "next/link";
import React from "react";

type FooterProps = {};

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer>
      <div className="bottom-0 h-80 bg-purple-400">
        <div>
          <h2 className="p-4 text-center">Foota</h2>
        </div>
        <div className="bg-red-200 text-center">
          <Link href="/">
            <h4>Home</h4>
          </Link>
          <Link href="/about">
            <h4>About</h4>
          </Link>
          <Link href="/projects">
            <h4>Projects</h4>
          </Link>
          <Link href="/university">
            <h4>University</h4>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

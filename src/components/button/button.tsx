import React from "react";
import Link from "next/link";

type ButtonProps = {
  title: string;
  colour: any;
  link: string;
};

const Button: React.FC<ButtonProps> = ({ title, colour, link }) => {
  return (
    <Link href={link} className="no-underline text-white">
      <button
        // style={{
        //   backgroundColor: colour?.cssRgb,
        // }}
        className="rounded-xl w-auto px-4 border-none cursor-pointer bg-primary hover:bg-primaryhover"
      >
        <p className="text-white bo">{title}</p>
      </button>
    </Link>
  );
};

export default Button;

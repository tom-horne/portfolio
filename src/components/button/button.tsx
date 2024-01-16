import React from "react";
import Link from "next/link";

type ButtonProps = {
  title: string;
  colour: any;
  link: string;
};

const Button: React.FC<ButtonProps> = ({ title, colour, link }) => {
  console.log("color", colour);

  return (
    <Link href={link} className="no-underline text-white">
      <button
        style={{
          backgroundColor: colour?.cssRgb,
        }}
        className="text-white rounded-xl w-auto px-4 border-none cursor-pointer"
      >
        <p>{title}</p>
      </button>
    </Link>
  );
};

export default Button;

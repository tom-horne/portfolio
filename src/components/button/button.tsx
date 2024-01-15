import React from "react";
import Link from "next/link";

type ButtonProps = {
  title: string;
  colour: string;
  link: string;
};

const Button: React.FC<ButtonProps> = ({ title, colour, link }) => {
  return (
    <Link href={link}>
      <div className="w-12 rounded-xl p-6">{title}</div>
    </Link>
  );
};

export default Button;

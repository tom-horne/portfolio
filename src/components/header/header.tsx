import React from "react";

type HeaderProps = {
  title: string;
  subtitle: string;
};

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="w-full bg-sky-950 p-1">
      <div className="max-w-[1366px] mx-auto">
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
      </div>
    </div>
  );
};

export default Header;

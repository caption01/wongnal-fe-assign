import React, { ReactChild, FC } from "react";
import { Search } from "../../components";
import "./index.scss";

type HeaderProps = {
  title: string;
  children: ReactChild;
};

const Header: FC<HeaderProps> = ({ title, children }) => {
  return (
    <section className="header">
      <h1 className="header__title">{title}</h1>
      {children}
    </section>
  );
};

export default Header;

import React from "react";
import { Search } from "../../components";
import "./index.scss";

const Header = () => {
  return (
    <section className="header">
      <h1 className="header__title">เที่ยวไหนดี</h1>
      <Search />
    </section>
  );
};

export default Header;

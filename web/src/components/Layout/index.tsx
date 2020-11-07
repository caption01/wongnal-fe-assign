import React from "react";
import "./index.scss";

const Layout: React.FC = ({ children }) => {
  return <main className="container">{children}</main>;
};

export default Layout;

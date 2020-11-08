import React, { ReactChild } from "react";
import "./index.scss";

type ContentProps = {
  children?: ReactChild;
};

const Content: React.FC<ContentProps> = ({ children }) => {
  return <div className="content">{children}</div>;
};

export default Content;

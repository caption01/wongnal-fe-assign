import React, { ReactChild } from "react";

type ContentProps = {
  children?: ReactChild;
};

const Content: React.FC<ContentProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Content;

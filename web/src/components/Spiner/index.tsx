import React, { Fragment } from "react";
import "./index.scss";

type SpinerProps = {
  loading: boolean;
};

const Spiner: React.FC<SpinerProps> = ({ loading }) => {
  return loading ? <div className="spiner" /> : <Fragment />;
};

export default Spiner;

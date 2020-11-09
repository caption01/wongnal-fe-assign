import React from "react";
import { useHistory } from "react-router-dom";

import { Header } from "../index";
import { Layout } from "../../components";
import notfound from "./notfound.png";
import "./index.scss";

const NotFound = () => {
  const history = useHistory();

  return (
    <Layout>
      <Header title="มีบางอย่างผิดพลาด" />

      <div className="error">
        <h3 className="error__text">
          กรุณาตรวจสอบ api-gateway (click to refresh)
        </h3>
        <img
          className="error__img"
          src={notfound}
          alt="notfound"
          onClick={() => history.push("/")}
        />
      </div>
    </Layout>
  );
};

export default NotFound;

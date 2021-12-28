import React from "react";
import classnames from "classnames";
import "./style.scss";

function TitleSection({ children , fontSize}) {
  return (
    <>
      <h2 className={classnames("sctitle heading --black-text", fontSize )}>{children}</h2>
    </>
  );
}

export default TitleSection;

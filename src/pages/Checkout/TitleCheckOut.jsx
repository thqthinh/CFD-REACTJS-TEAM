import React from "react";
import Desc from "../../components/Desc";
import TitleSection from "../../components/TitleSection";

function TitleCheckOut({ title, desc }) {
  return (
    <div className="textbox">
      <TitleSection fontSize="--h4">{title}</TitleSection>
      <Desc fontSize="--bd12" color="--black-text">
        {desc}
      </Desc>
    </div>
  );
}

export default TitleCheckOut;

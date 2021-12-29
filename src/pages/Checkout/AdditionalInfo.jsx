import React from "react";
import TitleCheckOut from "./TitleCheckOut";
import "./AdditionalInfo.scss";
import TextArea from "../../components/Textarea";

function AdditionalInfo() {
  return (
    <section className="additional">
      <TitleCheckOut
        title="Additional informations"
        desc="Need something else? We will make it for you!"
      />
      <div className="form-wrapper">
        <form action="">
          <TextArea
            label="Order notes"
            placeholder="Need a specific delivery day? Sending a gitf? Let’s say ..."
          />
        </form>
      </div>
    </section>
  );
}

export default AdditionalInfo;

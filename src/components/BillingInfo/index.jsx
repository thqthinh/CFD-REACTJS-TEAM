import React from "react";
import Desc from "../Desc";
import TitleSection from "../TitleSection";

function BillingInfo() {
  return (
    <>
      <section className="billinginfo">
        <div className="container">
          <div className="textbox">
            <TitleSection fontSize="--h4">Billing info</TitleSection>
            <Desc fontSize="--bd12" color="--black-text">
              Please enter your billing info
            </Desc>
          </div>
        </div>
      </section>
    </>
  );
}

export default BillingInfo;

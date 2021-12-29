import React from "react";
import "./style.scss";
import BillingInfo from "./BillingInfo";
import Container from "../../components/Container";
import MainWrapper from "../../components/MainWrapper";
import BillingMethod from "./BillingMethod";
import PaymentMethod from "./PaymentMethod";
import AdditionalInfo from "./AdditionalInfo";
import Confirm from "./Confirm";
import Order from "./Order";

function Checkout() {
  return (
    <>
      <MainWrapper>
        <Container>
          <div className="main-row --flex">
            <div className="main-column --left">
              <BillingInfo />
              <BillingMethod />
              <PaymentMethod />
              <AdditionalInfo />
              <Confirm />
            </div>
            <div className="main-column --right">
              <Order />
            </div>
          </div>
        </Container>
      </MainWrapper>
    </>
  );
}

export default Checkout;

import React from "react";
import Desc from "../../components/Desc";
import { IconDHL, IconFedEx } from "../../components/Icon";
import TextField from "../../components/TextField";
import "./BillingMethod.scss";
import TitleCheckOut from "./TitleCheckOut";
function BillingMethod() {
  return (
    <section className="billingMethod">
      <TitleCheckOut
        title="Billing method"
        desc="Please enter your payment method"
      />
      <div className="form-wrapper">
        <form>
          <TextField
            typeInput="radio"
            companyName="FedEx"
            tag
            tagName="Additional price"
            tagBackground="gray"
            type="icon-right"
            icon={<IconFedEx />}
            flex
            plus
            plusText="+32 USD"
          />
          <TextField
            typeInput="radio"
            companyName="DHL"
            tag
            tagName="Additional price"
            tagBackground="gray"
            type="icon-right"
            icon={<IconDHL />}
            flex
            plus
            plusText="+15 USD"
          />
        </form>
      </div>
    </section>
  );
}

export default BillingMethod;

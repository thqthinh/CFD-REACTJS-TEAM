import React from "react";
import TitleCheckOut from "./TitleCheckOut";
import "./Confirm.scss";
import CheckBox from "../../components/Checkbox";
import Button from "../../components/Buttons";

function Confirm() {
  return (
    <section className="confirm">
      <TitleCheckOut
        title="Confirmation"
        desc="We are getting to the end. Just few clicks and your order si ready!"
      />
      <div className="form-wrapper">
        <form action="">
          <CheckBox>
            I agree with sending an Marketing and newsletter emails. No spam,
            promissed!
          </CheckBox>
          <CheckBox>
            I agree with our terms and conditions and privacy policy.
          </CheckBox>
        </form>
      </div>
      <Button color="white" background="green" size="large">
        Complete order
      </Button>
    </section>
  );
}

export default Confirm;

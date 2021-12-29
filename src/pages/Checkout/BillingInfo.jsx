import React, { useState } from "react";
import { IconSelect } from "../../components/Icon";
import TextField from "../../components/TextField";
import Checkbox from "../../components/Checkbox";
import "./BillingInfo.scss";
import TitleCheckOut from "./TitleCheckOut";

function BillingInfo() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    city: "",
    zip: "",
    password: "",
    email: "",
    address: "",
    country: "",
  });
  const [error, setError] = useState({});

  const onChange = (name) => (e) => {
    setForm({
      ...form,
      [name]: e.currentTarget.value,
    });
  };
  return (
    <>
      <section className="billinginfo">
        <TitleCheckOut
          title="Billing info"
          desc="Please enter your billing info"
        />
        <div className="form-wrapper">
          <form>
            <div className="form-row --top">
              <div className="column --left">
                <TextField
                  label="First name"
                  value={form.firstName}
                  placeholder="First name"
                  onChange={onChange("firstName")}
                />
                <TextField
                  label="Email address"
                  value={form.email}
                  placeholder="Email address"
                  onChange={onChange("email")}
                  typeInput="email"
                />
                <TextField
                  label="Address"
                  value={form.address}
                  placeholder="Address"
                  onChange={onChange("address")}
                />
                <TextField
                  label="State / Country"
                  value={form.country}
                  placeholder="Choose a state or Country"
                  onChange={onChange("country")}
                  type="icon-right"
                  icon={<IconSelect />}
                  flex
                />
              </div>
              <div className="column --right">
                <TextField
                  label="Last name"
                  value={form.lastName}
                  placeholder="Last name"
                  onChange={onChange("lastName")}
                />
                <TextField
                  label="Phone number"
                  value={form.phone}
                  placeholder="Phone number"
                  onChange={onChange("phone")}
                />

                <TextField
                  label="Town / City"
                  value={form.city}
                  placeholder="Town or city"
                  onChange={onChange("city")}
                  type="icon-right"
                />
                <TextField
                  label="ZIP/Postal code"
                  value={form.zip}
                  placeholder="Postal code or ZIP"
                  onChange={onChange("zip")}
                />
              </div>
            </div>
            <div className="form-row --bottom">
              <Checkbox>Ship to a different address?</Checkbox>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default BillingInfo;

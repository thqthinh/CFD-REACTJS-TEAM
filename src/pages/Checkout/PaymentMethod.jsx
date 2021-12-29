import React, { useState } from "react";
import { IconBitcoin, IconPaypal, IconVisa } from "../../components/Icon";
import TextField from "../../components/TextField";
import "./PaymentMethod.scss";
import TitleCheckOut from "./TitleCheckOut";

function PaymentMethod() {
  const [isActive, setIsActive] = useState(false);
  return (
    <section className="payment">
      <TitleCheckOut
        title="Payment method"
        desc="Please enter your payment method"
      />
      <div className="form-wrapper">
        <form action="">
          <div className="form__dropdown">
            <div className="form__dropdown-select">
              <TextField
                typeInput="radio"
                companyName="Credit card"
                type="icon-right"
                flex
                wFit="fit"
                icon={<IconVisa />}
                onClick={(e) => setIsActive(!isActive)}
              />
            </div>
            {isActive && (
              <div className="form__dropdown-list">
                <div className="form__dropdown-row">
                  <div className="form__dropdown-item">
                    <TextField label="Card number" placeholder="Card number" />
                  </div>
                </div>
                <div className="form__dropdown-row --flex">
                  <div className="left">
                    <div className="form__dropdown-item">
                      <TextField
                        label="Card number"
                        placeholder="Card number"
                      />
                    </div>
                  </div>
                  <div className="right --flex">
                    <div className="form__dropdown-item">
                      <TextField
                        label="Card number"
                        placeholder="Card number"
                      />
                    </div>
                    <div className="form__dropdown-item">
                      <TextField
                        label="Card number"
                        placeholder="Card number"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="form__dropdown">
            <div className="form__dropdown-select">
              <TextField
                typeInput="radio"
                companyName="Credit card"
                type="icon-right"
                flex
                wFit="fit"
                icon={<IconBitcoin />}
                onClick={(e) => setIsActive(!isActive)}
              />
            </div>
            <div className="form__dropdown-list">
              <div className="form__dropdown-row">
                <div className="form__dropdown-item">
                  <TextField label="Card number" placeholder="Card number" />
                </div>
              </div>
              <div className="form__dropdown-row --flex">
                <div className="left">
                  <div className="form__dropdown-item">
                    <TextField label="Card number" placeholder="Card number" />
                  </div>
                </div>
                <div className="right --flex">
                  <div className="form__dropdown-item">
                    <TextField label="Card number" placeholder="Card number" />
                  </div>
                  <div className="form__dropdown-item">
                    <TextField label="Card number" placeholder="Card number" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="form__dropdown">
            <div className="form__dropdown-select">
              <TextField
                typeInput="radio"
                companyName="Credit card"
                type="icon-right"
                flex
                wFit="fit"
                icon={<IconPaypal />}
              />
            </div>
            <div className="form__dropdown-list">
              <div className="form__dropdown-row">
                <div className="form__dropdown-item">
                  <TextField label="Card number" placeholder="Card number" />
                </div>
              </div>
              <div className="form__dropdown-row --flex">
                <div className="left">
                  <div className="form__dropdown-item">
                    <TextField label="Card number" placeholder="Card number" />
                  </div>
                </div>
                <div className="right --flex">
                  <div className="form__dropdown-item">
                    <TextField label="Expiration date" placeholder="DD/MM/YY" />
                  </div>
                  <div className="form__dropdown-item">
                    <TextField label="CVC" placeholder="CVC" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default PaymentMethod;

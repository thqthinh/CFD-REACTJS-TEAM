import React from "react";
import CartItem from "../../components/CartItem";
import TitleCheckOut from "./TitleCheckOut";

function Order() {
  return (
    <section className="order">
      <TitleCheckOut
        title="Order Summary"
        desc="Price can change depending on shipping method and taxes of your state."
      />
      <div className="order__list">
        <CartItem image={<img src="../images/product.jpg" />} />
      </div>
    </section>
  );
}

export default Order;

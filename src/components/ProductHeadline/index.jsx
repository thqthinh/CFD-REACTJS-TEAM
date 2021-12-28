import React from "react";
import ProductItem from "../ProductItem";
import HeadLineColumn from "../HeadLineColumn";

function ProductHeadline() {
  return (
    <>
      <HeadLineColumn />
      <div className="pd__list">
        <ProductItem
          image={<img src="../images/product.jpg" />}
          title="Product title"
          border="gray"
          description="Space for a small product description"
          sale
          rate
          price="36.99 USD"
          percent="- 36 %"
          mainPrice="48.56"
          color="white"
          children="Buy now"
          background="green"
          size="small"
        />
        <ProductItem
          image={<img src="../images/product.jpg" />}
          title="Product title"
          border="gray"
          description="Space for a small product description"
          sale
          rate
          price="36.99 USD"
          percent="- 36 %"
          mainPrice="48.56"
          color="white"
          children="Buy now"
          background="green"
          size="small"
        />
        <ProductItem
          image={<img src="../images/product.jpg" />}
          title="Product title"
          border="gray"
          description="Space for a small product description"
          sale
          rate
          price="36.99 USD"
          percent="- 36 %"
          mainPrice="48.56"
          color="white"
          children="Buy now"
          background="green"
          size="small"
        />
      </div>
    </>
  );
}

export default ProductHeadline;

import classnames from "classnames";
import Button from "../Buttons";

import "./style.scss";
function ProductItem({
  image,
  title,
  description,
  price,
  percent,
  icon,
  border = "default",
  rate = false,
  sale = false,
  mainPrice,
  color,
  children,
  background,
  size,
}) {
  return (
    <div
      className={classnames("product_item", `border-${border}`, { rate, sale })}
    >
      <div className="image">
        {image}
        {sale && <span className="percent">{percent}</span>}
      </div>
      <div className="textbox">
        <h3 className="product_item-title heading --h6">{title}</h3>
        <p className="desc --bd12">{description}</p>
        {rate && icon}
        <div className="price-has-button">
          <div className="price-wrapper">
            <p className="price heading --h5 --black-text">{price}</p>
            <p className="mainprice">{sale && mainPrice}</p>
          </div>
          <div className="btn">
            <Button
              color={color}
              children={children}
              background={background}
              size={size}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;

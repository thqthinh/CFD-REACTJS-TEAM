import classnames from "classnames";

function ProductItem({
  image,
  title,
  description,
  price,
  percent,
  icon,
  rate = false,
  sale = false,
  mainPrice
}) {
  return (
    <div className={classnames("product_item", { rate, sale })}>
      <div className="image">
      {image}
        <span className="percent">{sale === true && percent}</span>
      </div>
      <h3 className="product_item-title">{title}</h3>
      <p className="desc">{description}</p>
      {rate === true && icon}
      <p className="price">{price}</p>
      <p className="mainprice">{sale === true && mainPrice}</p>
    </div>
  );
}

export default ProductItem;

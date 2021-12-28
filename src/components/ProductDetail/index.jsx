import React from "react";
import Button from "../Buttons";
import Desc from "../Desc";
import {
  IconArrowRightWhite,
  IconHeart,
  IconStar,
  IconStarOutline,
} from "../Icon";

function ProductDetail({
  image,
  title,
  des,
  fresh,
  farm,
  delivery,
  stock,
  extra,
  price,
  sale = false,
  mainPrice,
}) {
  return (
    <div className="product__detail">
      <div className="product__detail-image">{image}</div>
      <div className="product__detail-text">
        <div className="textbox">
          <div className="title">{title}</div>
          <Desc>{des}</Desc>
          <div className="rate">
            <IconStar />
            <IconStar />
            <IconStar />
            <IconStar />
            <IconStarOutline />
          </div>
          <ul className="list">
            <li className="list-item">
              <div className="liright">Fresheness</div>
              <div className="lileft">{fresh}</div>
            </li>
            <li className="list-item">
              <div className="liright">Farm</div>
              <div className="lileft">{farm}</div>
            </li>
            <li className="list-item">
              <div className="liright">Delivery</div>
              <div className="lileft">
                <span>{delivery}</span>
                {extra}
              </div>
            </li>
            <li className="list-item">
              <div className="liright">Stock</div>
              <div className="lileft">{stock}</div>
            </li>
          </ul>
        </div>
      </div>
      <div className="product__detail-right">
        <div className="price">{price}</div>
        {sale && <div className="sale">{mainPrice}</div>}
        <div className="freeship">
          <span>Free Shipping</span>
          Delivery in 1 day
        </div>
        <div className="action">
          <Button
            children="Product Detail"
            color="white"
            size="middle"
            background="green"
            type="icon-right"
            icon={<IconArrowRightWhite />}
          />
          <Button
            children="Product Detail"
            color="black"
            size="small"
            background="gray"
            type="icon-left"
            icon={<IconHeart />}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

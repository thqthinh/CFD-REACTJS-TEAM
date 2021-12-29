import React from "react";
import Button from "../Buttons";
import Desc from "../Desc";
import "./style.scss";
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
  fontSizeDes,
}) {
  return (
    <div className="product__detail">
      <div className="product__detail-image">{image}</div>
      <div className="product__detail-text">
        <div className="textbox">
          <div className="title">{title}</div>
          <Desc fontSize={fontSizeDes}>{des}</Desc>
          <div className="rate">
            <IconStar />
            <IconStar />
            <IconStar />
            <IconStar />
            <IconStarOutline />
          </div>
          <ul className="list">
            <li className="list-item">
              <div className="liright --gray-desc">Fresheness</div>
              <div className="lileft --green-bold">
                {fresh}
                <span className="--gray-desc"> {extra}</span>
              </div>
            </li>
            <li className="list-item">
              <div className="liright --gray-desc">Farm</div>
              <div className="lileft --gray-desc">{farm}</div>
            </li>
            <li className="list-item">
              <div className="liright --gray-desc">Delivery</div>
              <div className="lileft --gray-desc">{delivery}</div>
            </li>
            <li className="list-item">
              <div className="liright --gray-desc">Stock</div>
              <div className="lileft --green-bold">{stock}</div>
            </li>
          </ul>
        </div>
      </div>
      <div className="product__detail-right">
        <div className="price heading --h5 --black-text">{price}</div>
        {sale && <div className="sale">{mainPrice}</div>}
        <div className="freeship desc --bd12  ">
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
            size="middle"
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

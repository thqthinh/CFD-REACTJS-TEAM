import React from "react";
import {
  IconArrowDownBlack,
  IconCompare,
  IconHeartPink,
  IconRemove,
  IconStar,
  IconStarOutline,
} from "../Icon";

function CartItem({ image, title, farm, fresh, sale, mainprice }) {
  return (
    <div className="cart__item">
      <div className="cart__item-top">
        <div className="image">{image}</div>
        <div className="info">
          <h3 className="title">{title}</h3>
          <ul className="list">
            <li className="list-item">
              <div className="lileft">Farm:</div>
              <div className="liright">{farm}</div>
            </li>
            <li className="list-item">
              <div className="lileft">Freshness:</div>
              <div className="liright">{fresh}</div>
            </li>
          </ul>
        </div>
      </div>
      <div className="cart__item-bottom">
        <ul className="action">
          <li className="action-item">
            <div className="liicon">
              <IconHeartPink />
            </div>
            <div className="licontent">Wishlist</div>
          </li>
          <li className="action-item">
            <div className="liicon">
              <IconCompare />
            </div>
            <div className="licontent">Compare</div>
          </li>
          <li className="action-item">
            <div className="liicon">
              <IconRemove />
            </div>
            <div className="licontent">Remove</div>
          </li>
        </ul>
        <div className="control">
          <div className="left">
            <div className="rate">
              <IconStar color="#FDBC15" />
              <IconStar color="#FDBC15" />
              <IconStar color="#FDBC15" />
              <IconStar color="#FDBC15" />
              <IconStarOutline />
            </div>
            <div className="price">
              <div className="sale">{sale}</div>
              <div className="mainprice">{mainprice}</div>
            </div>
          </div>
          <div className="right">
            <div className="quantily">
              <input className type="text" placeholder="1 pcs" />
              <span className="unit">
                Pcs <IconArrowDownBlack />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;

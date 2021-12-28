import React from "react";
import CategoryItem from "../CategoryItem";
import CategoryTitle from "../CategoryTitle";
import { IconArrowRightBlack } from "../Icon";
import Button from "../../components/Buttons";

import "./style.scss";

function HeadLineColumn() {
  return (
    <div className="headline">
      <div className="headline__column">
        <CategoryTitle title="Category menu" />
        <ul className="headline__list">
          <CategoryItem children="Bakery" />
          <CategoryItem children="Fruit and vegetables" />
          <CategoryItem children="Meat and fish" />
          <CategoryItem children="Drinks" />
          <CategoryItem children="Kitchen" />
        </ul>
      </div>
      <div className="action">
        <Button
          background="gray"
          type="icon-right"
          size="middle"
          icon={<IconArrowRightBlack />}
        >
          More categories
        </Button>
      </div>
    </div>
  );
}

export default HeadLineColumn;

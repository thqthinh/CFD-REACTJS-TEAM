import React from "react";
import Button from "../../components/Buttons";
import CategoryItem from "../../components/CategoryItem";
import CategoryTitle from "../../components/CategoryTitle";
import CheckBox from "../../components/Checkbox";
import {
  IconArrowRightWhite,
  IconStar,
  IconStarOutline,
} from "../../components/Icon";
import ProductDetail from "../../components/ProductDetail";
import Tag from "../../components/Tag";
import "./style.scss";

function ListView() {
  return (
    <>
      <main className="mainwrapper">
        <section className="listView">
          <div className="container">
            <div className="listView__wrapper">
              <div className="listView__left">
                <div className="listView__left-category">
                  <CategoryTitle title="Categories" />
                  <ul className="list">
                    <CategoryItem color="--black-text">
                      <span className="name">Category name</span>
                      <Tag children="320" color="green" background="green" />
                    </CategoryItem>
                    <CategoryItem color="--black-text">
                      <span className="name">Category name</span>
                      <Tag children="112" color="green" background="green" />
                    </CategoryItem>
                    <CategoryItem color="--black-text">
                      <span className="name">Category name</span>
                      <Tag children="32" color="green" background="green" />
                    </CategoryItem>
                    <CategoryItem color="--black-text">
                      <span className="name">Category name</span>
                      <Tag children="48" color="green" background="green" />
                    </CategoryItem>
                  </ul>
                </div>
                <div className="listView__left-brand">
                  <CategoryTitle title="Brands" />
                  <ul className="list">
                    <CategoryItem color="--black-text">
                      <CheckBox />
                      Filtre by brand item
                    </CategoryItem>
                    <CategoryItem color="--black-text">
                      <CheckBox />
                      Filtre by brand item
                    </CategoryItem>
                    <CategoryItem color="--black-text">
                      <CheckBox />
                      Filtre by brand item
                    </CategoryItem>
                    <CategoryItem color="--black-text">
                      <CheckBox />
                      Filtre by brand item
                    </CategoryItem>
                    <CategoryItem color="--black-text">
                      <CheckBox />
                      Filtre by brand item
                    </CategoryItem>
                  </ul>
                </div>
                <div className="listView__left-rating">
                  <CategoryTitle title="Rating" />
                  <ul className="list">
                    <CategoryItem color="--black-text">
                      <CheckBox />
                      <IconStar color="#FDBC15" />
                      <IconStar color="#FDBC15" />
                      <IconStar color="#FDBC15" />
                      <IconStar color="#FDBC15" />
                      <IconStar color="#FDBC15" />
                    </CategoryItem>
                    <CategoryItem color="--black-text">
                      <CheckBox />
                      <IconStar color="#FDBC15" />
                      <IconStar color="#FDBC15" />
                      <IconStar color="#FDBC15" />
                      <IconStar color="#FDBC15" />
                      <IconStarOutline />
                    </CategoryItem>
                    <CategoryItem color="--black-text">
                      <CheckBox />
                      <IconStar color="#FDBC15" />
                      <IconStar color="#FDBC15" />
                      <IconStar color="#FDBC15" />
                      <IconStarOutline />
                      <IconStarOutline />
                    </CategoryItem>
                    <CategoryItem color="--black-text">
                      <CheckBox />
                      <IconStar color="#FDBC15" />
                      <IconStar color="#FDBC15" />
                      <IconStarOutline />
                      <IconStarOutline />
                      <IconStarOutline />
                    </CategoryItem>
                    <CategoryItem color="--black-text">
                      <CheckBox />
                      <IconStar color="#FDBC15" />
                      <IconStarOutline />
                      <IconStarOutline />
                      <IconStarOutline />
                      <IconStarOutline />
                    </CategoryItem>
                  </ul>
                </div>
              </div>
              <div className="listView__right">
                <ProductDetail
                  title="Product title"
                  image={<img src="../images/product.jpg" />}
                  des="Space for a small product description "
                  fontSizeDes="--bd12"
                  fresh="New "
                  extra="(Extra fresh)"
                  farm="Grocery Tarm Fields"
                  delivery="Europe"
                  stock="320 pcs"
                  price="36.99 USD"
                  sale
                  mainPrice="48.56"
                />
                <ProductDetail
                  title="Product title"
                  image={<img src="../images/product.jpg" />}
                  des="Space for a small product description "
                  fontSizeDes="--bd12"
                  fresh="New "
                  extra="(Extra fresh)"
                  farm="Grocery Tarm Fields"
                  delivery="Europe"
                  stock="320 pcs"
                  price="36.99 USD"
                  sale
                  mainPrice="48.56"
                />
                <ProductDetail
                  title="Product title"
                  image={<img src="../images/product.jpg" />}
                  des="Space for a small product description "
                  fontSizeDes="--bd12"
                  fresh="New "
                  extra="(Extra fresh)"
                  farm="Grocery Tarm Fields"
                  delivery="Europe"
                  stock="320 pcs"
                  price="36.99 USD"
                  sale
                  mainPrice="48.56"
                />
                <ProductDetail
                  title="Product title"
                  image={<img src="../images/product.jpg" />}
                  des="Space for a small product description "
                  fontSizeDes="--bd12"
                  fresh="New "
                  extra="(Extra fresh)"
                  farm="Grocery Tarm Fields"
                  delivery="Europe"
                  stock="320 pcs"
                  price="36.99 USD"
                  sale
                  mainPrice="48.56"
                />
                <ProductDetail
                  title="Product title"
                  image={<img src="../images/product.jpg" />}
                  des="Space for a small product description "
                  fontSizeDes="--bd12"
                  fresh="New "
                  extra="(Extra fresh)"
                  farm="Grocery Tarm Fields"
                  delivery="Europe"
                  stock="320 pcs"
                  price="36.99 USD"
                  sale
                  mainPrice="48.56"
                />
              </div>
            </div>
            <div className="listView__bottom">
              <Button
                type="icon-right"
                icon={<IconArrowRightWhite />}
                color="white"
                background="green"
                size="middle "
              >
                Show more products
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default ListView;

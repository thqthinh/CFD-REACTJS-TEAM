import React from "react";
import BlogItem from "../../components/BlogItem";
import Button from "../../components/Buttons";
import CategoryHeader from "../../components/CategoryHeader";
import CategoryHeadLine from "../../components/CategoryHeadLine";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { IconArrowRightBlack } from "../../components/Icon";
import ProductHeadline from "../../components/ProductHeadline";
import ProductItem from "../../components/ProductItem";
import TitleSection from "../../components/TitleSection";
import "./style.scss";
import '../../assets/styles/styles.scss'
function Homepage() {
  return (
    <>
      <Header />
      <main className="mainwrapper">
        <CategoryHeader />
        <section className="categoryMenu">
          <div className="headerline">
            <CategoryHeadLine />
          </div>
        </section>

        <section className="bestSell">
          <div className="headerline">
            <div className="container">
              <ProductHeadline />
            </div>
          </div>
        </section>
        <section className="bestFrom">
          <div className="headerline">
            <div className="container">
              <ProductHeadline />
            </div>
          </div>
        </section>
        <section className="product">
          <div className="container">
            <div className="product__wrapper">
              <div className="product__top">
                <TitleSection fontSize="--h5">Section Headline</TitleSection>
                <div className="action">
                  <Button
                    background="transparent"
                    type="icon-right"
                    size="small"
                    icon={<IconArrowRightBlack />}
                  >
                    Button
                  </Button>
                </div>
              </div>
              <div className="pd__list">
                <ProductItem
                  image={<img src="../images/product.jpg" />}
                  title="Product Title"
                  description="Space for a small product description "
                  price="3.26 USD"
                  children="Buy now"
                  background="green"
                  color="white"
                  border="gray"
                />
                <ProductItem
                  image={<img src="../images/product.jpg" />}
                  title="Product Title"
                  description="Space for a small product description "
                  price="1.48 USD"
                  children="Buy now"
                  background="green"
                  color="white"
                  border="gray"
                  percent="- 36 %"
                  sale
                  mainPrice="48.56"
                />
                <ProductItem
                  image={<img src="../images/product.jpg" />}
                  title="Product Title"
                  description="Space for a small product description "
                  price="3.26 USD"
                  children="Buy now"
                  background="green"
                  color="white"
                  border="gray"
                />
                <ProductItem
                  image={<img src="../images/product.jpg" />}
                  title="Product Title"
                  description="Space for a small product description "
                  price="3.26 USD"
                  children="Buy now"
                  background="green"
                  color="white"
                  border="gray"
                />
              </div>
            </div>
          </div>
        </section>
        <div className="blog">
          <div className="container">
            <div className="blog__top">
              <TitleSection fontSize="--h5">Section Headline</TitleSection>
              <div className="action">
                <Button
                  background="transparent"
                  type="icon-right"
                  size="small"
                  icon={<IconArrowRightBlack />}
                >
                  Button
                </Button>
              </div>
            </div>
            <div className="blog__list">
              <div class="blog__column">
                <BlogItem
                  image={<img src="../images/blog.jpg" />}
                  title="Our chef tips for a great and tasty dinner ready in 20 minutes"
                  date="17. 6. 2020"
                  size="large"
                  color="--white-cl"
                  category
                  tagName="Dinner tips"
                />
              </div>
              <div class="blog__column">
                <BlogItem
                  image={<img src="../images/blog.jpg" />}
                  title="Which vegetable your family will love and want’s eat each day"
                  date="17. 6. 2020"
                  category
                  tagName="Vegetable"
                />
              </div>
              <div class="blog__column">
                <BlogItem
                  image={<img src="../images/blog.jpg" />}
                  category="Dinner tips"
                  title="Our chef tips for a great and tasty dinner ready in 20 minutes"
                  date="17. 6. 2020"
                  size="small"
                  fontSize="--h6"
                  color="--black-text"
                />
                <BlogItem
                  image={<img src="../images/blog.jpg" />}
                  title="Our chef tips for a great and tasty dinner ready in 20 minutes"
                  date="17. 6. 2020"
                  size="small"
                  fontSize="--h6"
                  color="--black-text"
                />
                <BlogItem
                  image={<img src="../images/blog.jpg" />}
                  title="Our chef tips for a great and tasty dinner ready in 20 minutes"
                  date="17. 6. 2020"
                  size="small"
                  fontSize="--h6"
                  color="--black-text"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Homepage;

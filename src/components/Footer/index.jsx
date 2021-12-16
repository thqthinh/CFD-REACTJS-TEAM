import CategoryItem from "../CategoryItem";
import CategoryTitle from "../CategoryTitle";
import './style.scss'

function Footer() {
  return (
    <div className="footer">
      <div className="container">
          <div className="footer__top">
            <div className="footer__top-list">
              <CategoryTitle title="Get in touch" />
              <CategoryItem children="About Us" />
              <CategoryItem children="Careers" />
              <CategoryItem children="Press Releases" />
              <CategoryItem children="Blog" />
            </div>
            <div className="footer__top-list">
              <CategoryTitle title="Connections" />
              <CategoryItem children="Facebook" />
              <CategoryItem children="Twitter" />
              <CategoryItem children="Instagram" />
              <CategoryItem children="Youtube" />
              <CategoryItem children="LinkedIn" />
            </div>
            <div className="footer__top-list">
              <CategoryTitle title="Earnings" />
              <CategoryItem children="Become an Affiliate" />
              <CategoryItem children="Advertise your product" />
              <CategoryItem children="Sell on Market" />
            </div>
            <div className="footer__top-list">
              <CategoryTitle title=" Account" />
              <CategoryItem children="Your account" />
              <CategoryItem children="Returns Centre" />
              <CategoryItem children="100 % purchase protection" />
              <CategoryItem children="Chat with us" />
              <CategoryItem children="Help" />
            </div>
          </div>
      </div>
    </div>
  );
}
export default Footer;

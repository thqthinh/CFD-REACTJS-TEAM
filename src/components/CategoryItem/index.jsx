import "./style.scss";
import classnames from "classnames";

function CategoryItem({ children, color = "--green-bold" }) {
  return (
    <>
      <li className="category__item ">
        <a href="" className={classnames("category__item-link ", color)}>
          {children}
        </a>
      </li>
    </>
  );
}

export default CategoryItem;

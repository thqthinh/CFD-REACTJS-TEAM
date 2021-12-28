import "./style.scss";

function CategoryItem({ children }) {
  return (
    <>
      <li className="category__item ">
        <a href="" className="category__item-link --green-bold">
          {children}
        </a>
      </li>
    </>
  );
}

export default CategoryItem;

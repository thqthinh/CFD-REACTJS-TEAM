import SpaceHeading from "./SpaceHeading";
import "./style.scss";
import HeadLineColumn from "../HeadLineColumn";

function CategoryHeadLine() {
  return (
    <div className="container">
      <HeadLineColumn />
      <div className="headerline__right">
        <SpaceHeading />
        <SpaceHeading />
      </div>
    </div>
  );
}

export default CategoryHeadLine;

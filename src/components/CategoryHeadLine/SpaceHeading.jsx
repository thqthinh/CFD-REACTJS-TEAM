import "./SpaceHeading.scss";
import { IconArrowRightGreenSmall } from "../../components/Icon";

function SpaceHeading() {
  return (
    <div className="spaceheading">
      <div className="textbox">
        <h4 className="subtitle">Banner subfocus</h4>
        <h2 className="title">Space for heading</h2>
      </div>
      <a href="" className="btn btn-read">
        <span>Read recepies</span>
        <IconArrowRightGreenSmall />
      </a>
    </div>
  );
}

export default SpaceHeading;

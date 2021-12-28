import "./SpaceHeading.scss";
import { IconArrowRightGreenSmall } from "../../components/Icon";
import Buttons from "../Buttons";

function SpaceHeading() {
  return (
    <div className="spaceheading">
      <div className="textbox">
        <h4 className="subtitle --green-bold">Banner subfocus</h4>
        <h2 className="title --black-text heading --h4">Space for heading</h2>
      </div>
      <div className="action">
        <Buttons
          background="transparent"
          type="icon-right"
          icon={<IconArrowRightGreenSmall />}
        >
          Read recepies
        </Buttons>
      </div>
    </div>
  );
}

export default SpaceHeading;

import { Fragment } from "react";
import "./Child.css";

const color = [
  "black",
  "#CAD8EB",
  "#9BEDF3",
  "#4285f4",
  "#CAF1DE",
  "#fbbc05",
  "#ea4335",
  "#34a853"
];

const Child = (props) => {
  const { textColorChangeHandler } = props;

  // child function
  // const colorChange = (e) => {
  //   console.log(e.target.value, "value");
  //   textColorChangeHandler(eachColor);
  // };

  return (
    <Fragment>
      <p> Child Component</p>
      <div className="child-container">
        {color.map((eachColor, index) => (
          <div className="color-box-container" key={index}>
            <div
              className="box"
              style={{ backgroundColor: eachColor }}
              onClick={() => {
                textColorChangeHandler(eachColor);
              }}
            ></div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Child;

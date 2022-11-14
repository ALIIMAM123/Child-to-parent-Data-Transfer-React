import { Fragment, useState } from "react";
import Child from "./Child";

const App = () => {
  const [textColor, setTextColor] = useState({
    dark: "black"
  });
  // parent function
  const textColorChangeHandler = (colorFromChild) => {
    console.log(colorFromChild, "color received in parent");
    if (colorFromChild === "black") {
      setTextColor({
        ...textColor,
        dark: colorFromChild
      });
    } else {
      setTextColor({
        ...textColor,
        dark: colorFromChild
      });
    }
  };

  // setTextColor(color);

  return (
    <Fragment>
      <div
        className="div-parent"
        style={{
          backgroundColor: "#CAF1DE",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "auto",
          width: "90%",
          borderRadius: "10px"
        }}
      >
        <h4 style={{ backgroundColor: textColor.light, color: textColor.dark }}>
          Parent Component
        </h4>
        <p style={{ color: textColor.dark }}>Line no 1 </p>
        <p style={{ color: textColor.dark }}>Line no 2 </p>
        <p style={{ color: textColor.dark }}>Line no 3 </p>
      </div>
      <Child textColorChangeHandler={textColorChangeHandler} />
    </Fragment>
  );
};

export default App;

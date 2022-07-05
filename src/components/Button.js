import React from "react";
import "../css/button.css";

function Button({ classes, buttonTxt, iconSrc }) {
  return (
    <button className={classes}>
      <img src={iconSrc} alt='' />
      <span>{buttonTxt}</span>
    </button>
  );
}

export default Button;

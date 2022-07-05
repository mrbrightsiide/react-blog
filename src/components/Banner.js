import React from "react";
import "../css/banner.css";

function Banner({ children, imgSrc }) {
  return (
    <div
      className='banner'
      style={imgSrc && { backgroundImage: `url(${imgSrc})` }}
    >
      <div className='max-width'>
        <div className='banner-contents'>{children}</div>
      </div>
    </div>
  );
}

export default Banner;

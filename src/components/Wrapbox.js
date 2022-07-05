import React from "react";
import "../css/wrapbox.css";

function Wrapbox({ children }) {
  return (
    <section className='wrap-box'>
      <div className='inner'>{children}</div>
    </section>
  );
}

export default Wrapbox;

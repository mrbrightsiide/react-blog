import React from "react";
import "../css/category.css";

const Category = ({ categories }) => {
  return (
    <dl className='category'>
      <dt className='a11y-hidden'>Category</dt>
      {categories && categories.map((category) => <dd>{category}</dd>)}
    </dl>
  );
};

export default Category;

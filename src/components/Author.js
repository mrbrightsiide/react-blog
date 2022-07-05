import React from "react";
import "../css/author.css";

const Author = ({ img, name, created }) => {
  return (
    <dl className='author-wrap'>
      <dt className='a11y-hidden'>Author</dt>
      <dd className='author'>
        <img src={img} alt='' />
        {name}
      </dd>
      <dt className='a11y-hidden'>Created</dt>
      <dd className='created'>{created}</dd>
    </dl>
  );
};

export default Author;

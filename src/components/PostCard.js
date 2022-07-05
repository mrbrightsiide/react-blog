import React from "react";
import "../css/post.css";
import Author from "./Author";
import Category from "./Category";

const PostCard = ({
  id,
  title,
  description,
  thumbnail,
  authorImg,
  authorName,
  created,
  categories,
}) => {
  return (
    <li>
      <a className='post' href={`./${id}`}>
        <article>
          <img src={thumbnail} alt='' />
          <div className='contents-wrap'>
            <Category categories={categories} />
            <h3>{title}</h3>
            <Author img={authorImg} name={authorName} created={created} />
            <p className='post-description'>{description}</p>
          </div>
        </article>
      </a>
    </li>
  );
};

export default PostCard;

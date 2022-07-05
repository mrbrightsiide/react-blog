import React, { useState, useEffect } from "react";

import "../css/main.css";
import "../css/view.css";

import Wrapbox from "./Wrapbox";
import Author from "./Author";
import Category from "./Category";

const View = ({ userData, post }) => {
  const [postContent, setPostContent] = useState([]);
  useEffect(() => {
    if (post) {
      setPostContent(post.contents);
    }
  }, [post]);

  return (
    <div className='view'>
      <div className='max-width'>
        <Wrapbox>
          <Author
            img={userData.profileImg}
            name={userData.name}
            created={post && post.created}
          />
          <Category categories={post && post.category} />
          <div className='title-wrap'>
            <h2>{post && post.title}</h2>
            <button className='btn-like'>Like</button>
          </div>
          <hr />
          <div className='view-contents'>
            {postContent.map((item) => {
              if (item.type === "p") {
                return <p key={Math.random() * 100}>{item.text}</p>;
              }
              if (item.type === "img") {
                return <img src={item.src}></img>;
              }
            })}
          </div>
          <div className='btn-group'>
            <a href='#' className='btn-modify'>
              <span className='a11y-hidden'>modify</span>
            </a>
            <button type='button' className='btn-delete'>
              <span className='a11y-hidden'>delete</span>
            </button>
          </div>
          <a href='./' className='btn-back'>
            <span className='a11y-hidden'>Back</span>
          </a>
        </Wrapbox>
      </div>
    </div>
  );
};

export default React.memo(View);

import React from "react";
import PostCard from "./PostCard";
import "../css/posts.css";

function Posts({ ...data }) {
  return (
    <ul className='posts'>
      <h2 className='a11y-hidden'>Post</h2>
      {data.data
        .map((item) => (
          <PostCard
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.contents[0].text}
            thumbnail={item.thumbnail}
            authorName={item.userName}
            authorImg={item.profileImg}
            created={item.created}
            categories={item.category}
          ></PostCard>
        ))
        .reverse()}
    </ul>
  );
}

export default Posts;

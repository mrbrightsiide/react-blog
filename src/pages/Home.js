import React from "react";
import Banner from "../components/Banner";
import Posts from "../components/Posts";
import About from "../components/About";

const Home = ({ blogData, postData, userData }) => {
  return (
    <>
      <Banner>
        <p className='sub-text'>{blogData.subTitle}</p>
        <p className='main-text'>{blogData.mainTitle}</p>
        <p className='description'>{blogData.description}</p>
      </Banner>
      <main>
        <div className='max-width'>
          <Posts data={postData}></Posts>
          <About data={userData}></About>
        </div>
      </main>
    </>
  );
};

export default React.memo(Home);

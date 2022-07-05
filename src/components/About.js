import React from "react";
import "../css/about.css";

const About = ({ data }) => {
  return (
    <aside className='about'>
      <h2>About Me</h2>
      <img src={data.profileImg} alt='' className='user-profile' />
      <p className='user-name'>{data.name}</p>
      <p className='user-description'>{data.userInfo}</p>
      <h3>Categories</h3>
      <ul className='categories'>
        {data.category &&
          data.category.map((item) => {
            return (
              <li key={Math.random() * 100}>
                <a href='#'>{item}</a>
              </li>
            );
          })}
      </ul>
      <h3>Follow</h3>
      <ul className='sns'>
        {data.sns &&
          Object.keys(data.sns)
            .map((item) => (
              <li key={Math.random() * 100}>
                <a href='#'>
                  <img src={`./assets/${item}.svg`} alt={item} />
                </a>
              </li>
            ))
            .reverse()}
      </ul>
    </aside>
  );
};

export default About;

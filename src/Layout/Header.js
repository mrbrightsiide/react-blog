import React from "react";

import "../css/global.css";
import "../css/header.css";

import Logo from "../assets/Logo.svg";
import Profile from "../assets/profile.jpg";
import IconWhite from "../assets/icon-modify-white.svg";
import IconLogin from "../assets/icon-login.svg";
import IconLogout from "../assets/icon-logout.svg";
import IconRegister from "../assets/icon-register.svg";

import Button from "./../components/Button";

function Header({ isLoggedin, setIsLoggedIn }) {
  return (
    <header>
      <div className='max-width'>
        <h1 className='header-h1'>
          <a className='header-h1-a' href='./'>
            <img src={Logo} alt='' />
          </a>
        </h1>
        <ul>
          {isLoggedin ? (
            <li className='profile-img'>
              <a href='#'>
                <img src={Profile} alt='My Page' />
              </a>
            </li>
          ) : null}
          {isLoggedin ? (
            <li>
              <a href='#' className='button'>
                <img src={IconWhite} alt='' />
                <span>Write</span>
              </a>
            </li>
          ) : (
            <li
              onClick={() => {
                setIsLoggedIn(!isLoggedin);
              }}
            >
              <a href='#' className='button gray'>
                <img src={IconLogin} alt='' />
                <span>Login</span>
              </a>
            </li>
          )}
          <li
            onClick={() => {
              setIsLoggedIn(!isLoggedin);
            }}
          >
            {isLoggedin ? (
              <Button
                classes={"button white"}
                buttonTxt={"Logout"}
                iconSrc={IconLogout}
              ></Button>
            ) : (
              <Button
                classes={"button gray"}
                buttonTxt={"Register"}
                iconSrc={IconRegister}
              ></Button>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;

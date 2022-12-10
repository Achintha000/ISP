import React, { useState } from "react";
import styled from "styled-components";
// import logo from "../assets/logo.png";
import logo from "../assets/logo1.png";
import { FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useGlobalContext } from "../context/appContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useGlobalContext();
  const [showLogout, setShowLogout] = useState(false);
  return (
    <Wrapper>
      {/* <div className='nav-center'>
        <img src={logo} alt='jobs app' className='logo' className="nav-logo"/>
        
        {user && (
          <div className='btn-container'>
            <button className='btn' onClick={() => setShowLogout(!showLogout)}>
              <FaUserCircle />
              {user}
              <FaCaretDown />
            </button>
            <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
              <button onClick={() => logout()} className='dropdown-btn'>
                logout
              </button>
            </div>
          </div>
        )}
      </div> */}

      <section class="navigation">
        <div class="nav-container">
          <div class="brand">
            <img src={logo} alt="jobs app" className="company" />
          </div>
          <nav>
            <div class="nav-mobile">
              <a id="nav-toggle" href="#!">
                <span></span>
              </a>
            </div>
            <ul class="nav-list">
              <li>
                <Link to="/dashboard" >Home</Link>
              </li>
              <li>
              <Link to="/about" >About</Link>
              </li>
              <li>
              <Link to="/contact" >Contact</Link>
              </li>
             
              <li>
              <Link to="/register" >Login</Link>
              </li>
              
              <li>
                <a>{user}</a>
              </li>
              {user ? <li>
                <a onClick={() => logout()}>Logout</a>
              </li> : null}
              
            </ul>
          </nav>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  // height: 6rem;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // .nav-logo {
  //   width: 50px;
  //   height: 50px;
  // }
  // .nav-center {
  //   width: var(--fluid-width);
  //   max-width: var(--max-width);
  //   display: flex;
  //   justify-content: space-between;
  //   align-items: center;
  // }
  // .btn-container {
  //   position: relative;
  // }
  // .btn {
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   gap: 0 0.5rem;
  //   position: relative;
  // }

  // .dropdown {
  //   position: absolute;
  //   top: 40px;
  //   left: 0;
  //   width: 100%;
  //   background: var(--white);
  //   padding: 0.5rem;
  //   text-align: center;
  //   visibility: hidden;
  //   transition: var(--transition);
  //   border-radius: var(--borderRadius);
  // }
  // .show-dropdown {
  //   visibility: visible;
  // }
  // .dropdown-btn {
  //   background: transparent;
  //   border-color: transparent;
  //   color: var(--primary-500);
  //   letter-spacing: var(--letterSpacing);
  //   text-transform: capitalize;
  //   cursor: pointer;
  // }

  // Navigation Variables

  $content-width: 1000px;
  $breakpoint: 799px;
  $nav-height: 70px;
  $nav-background: #262626;
  $nav-font-color: #ffffff;
  $link-hover-color: #2581dc;

  background-color: black;

  // Outer navigation wrapper
  .navigation {
    height: 70px;
    background: #0f0c29; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #24243e,
      #302b63,
      #0f0c29
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #24243e,
      #302b63,
      #0f0c29
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  // Logo and branding
  .brand {
    position: absolute;
    padding-left: 10px;
    float: left;
    line-height: 70px;
    text-transform: uppercase;
    font-size: 1.4em;
  }

  .company {
    width: 60px;
    height: 60px;
  }

  // Container with no padding for navbar
  .nav-container {
    max-width: 1000px;
    margin: 0 auto;
  }

  // Navigation
  nav {
    float: right;
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      li {
        float: left;
        position: relative;
        a,
        a:visited {
          display: block;
          padding: 0 20px;
          line-height: 70px;
          color: white;
          text-decoration: none;
          &:hover {
            background: #1c92d2; /* fallback for old browsers */
            background: -webkit-linear-gradient(
              to right,
              #f2fcfe,
              #1c92d2
            ); /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(
              to right,
              #f2fcfe,
              #1c92d2
            ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

            color: black;
          }
          &:not(:only-child):after {
            padding-left: 4px;
            content: " ▾";
          }
        } // Dropdown list
        ul li {
          min-width: 190px;
          a {
            padding: 15px;
            line-height: 20px;
          }
        }
      }
    }
  }

  // Dropdown list binds to JS toggle event
  .nav-dropdown {
    position: absolute;
    display: none;
    z-index: 1;
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);
  }

  /* Mobile navigation */

  // Binds to JS Toggle
  .nav-mobile {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    background: $nav-background;
    height: $nav-height;
    width: $nav-height;
  }
  @media only screen and (max-width: 798px) {
    // Hamburger nav visible on mobile only
    .nav-mobile {
      display: block;
    }
    nav {
      width: 100%;
      padding: $nav-height 0 15px;
      ul {
        display: none;
        li {
          float: none;
          a {
            padding: 15px;
            line-height: 20px;
          }
          ul li a {
            padding-left: 30px;
          }
        }
      }
    }
    .nav-dropdown {
      position: static;
    }
  }
  @media screen and (min-width: $breakpoint) {
    .nav-list {
      display: block !important;
    }
  }
  #nav-toggle {
    position: absolute;
    left: 18px;
    top: 22px;
    cursor: pointer;
    padding: 10px 35px 16px 0px;
    span,
    span:before,
    span:after {
      cursor: pointer;
      border-radius: 1px;
      height: 5px;
      width: 35px;
      background: $nav-font-color;
      position: absolute;
      display: block;
      content: "";
      transition: all 300ms ease-in-out;
    }
    span:before {
      top: -10px;
    }
    span:after {
      bottom: -10px;
    }
    &.active span {
      background-color: transparent;
      &:before,
      &:after {
        top: 0;
      }
      &:before {
        transform: rotate(45deg);
      }
      &:after {
        transform: rotate(-45deg);
      }
    }
  }
`;

export default Navbar;

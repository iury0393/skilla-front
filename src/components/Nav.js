import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../context/UserContext";
import navlogo from "../assets/navlogo.png";
import NewPost from "./NewPost";
import { HomeIcon, ExploreIcon } from "./Icons";
import Shop from '../assets/shopping-bag.svg';

const NavWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${(props) => props.theme.white};
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  padding: 1rem 0;
  z-index: 10;

  .nav-logo {
    position: relative;
    top: 6px;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 930px;
  }

  ul {
    display: flex;
    position: relative;
    top: 3px;
    list-style-type: none;
  }

  li {
    margin-left: 1rem;
  }

  @media screen and (max-width: 970px) {
    nav {
      width: 90%;
    }
  }

  @media screen and (max-width: 670px) {
    input {
      display: none;
    }
  }
`;

const Nav = () => {
  const { user } = useContext(UserContext);

  return (
    <NavWrapper>
      <nav>
        <Link to="/">
          <img className="nav-logo" src={navlogo} alt="logo" />
        </Link>
        <ul>
          <li>
            <Link to="/">
              <HomeIcon />
            </Link>
          </li>
          <li>
            <NewPost />
          </li>
          <li>
            <Link to="/explore">
              <ExploreIcon />
            </Link>
          </li>
          <li>
          <Link to={`/shop`}>
              <img
                style={{
                  width: "24px",
                  height: "24px",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
                src={Shop}
                alt="shop"
              />
            </Link>
          </li>
          <li>
            <Link to={`/${user.username}`}>
              <img
                style={{
                  width: "24px",
                  height: "24px",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
                src={user.avatar}
                alt="avatar"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </NavWrapper>
  );
};

export default Nav;

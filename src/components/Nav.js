import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import NavWrapper from "../styles/Nav";
import { UserContext } from "../context/UserContext";
import navlogo from "../assets/navlogo.png";
import NewPost from "./NewPost";
import { FiHome, FiGlobe, FiSearch } from "react-icons/fi";
import CartIcon from "./cart-icon/cart-icon.component";


const Nav = ({ hidden }) => {
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
              <FiHome size={25} color={"#5931bf"} />
            </Link>
          </li>
          <li>
            <NewPost />
          </li>
          <li>
            <Link to="/explore">
              <FiGlobe size={25} color={"#5931bf"} />
            </Link>
          </li>
          <li>
            <Link to="/suggestions">
              <FiSearch size={25} color={"#5931bf"} />
            </Link>
          </li>
          <li>
            <Link to={"/shop"}>
              <CartIcon size={25} />
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

const mapStateToProps = ({ cart: { hidden } }) => ({
  hidden,
});

export default connect(mapStateToProps)(Nav);

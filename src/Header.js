import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";

function Header() {
  const [headerSearch, setHeaderSearch] = useState("");
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    auth.signOut();
  };
  return (
    <div className="header">
      <Link to="/">
        <img className="header_logo" src="/amazonLogo.png" alt="header logo" />
      </Link>
      <div className="header_search">
        <input
          className="header_searchInput"
          type="text"
          value={headerSearch}
          onChange={(e) => setHeaderSearch(e.target.value)}
        />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div className="header_options" onClick={handleAuthentication}>
            <span className="header_option1">
              {user ? `Hello ${user?.email}` : "Hello Guest"}
            </span>{" "}
            <span className="header_option2">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="header_options">
          <span className="header_option1">Returns</span>
          <span className="header_option2">Orders</span>
        </div>

        <div className="header_options">
          <span className="header_option1">Your</span>
          <span className="header_option2">Prime</span>
        </div>
      </div>
      <Link to="/checkout">
        <div className="header_optionBasket">
          <ShoppingBasketIcon />
          <span className="header_option2 header_basketCount">
            {basket?.length}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Header;

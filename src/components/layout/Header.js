import React, {useContext} from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ShoppingContext from "../../context/Shopping/shoppingContext";
import { Link } from "react-router-dom";
import {auth} from "../../Firebase";




const Header = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { basket, user } = shoppingContext;

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <header className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon logo"
        />
      </Link>
      <div className="header-searchbar">
        <input
          className="header-input"
          type="text"
          placeholder="Search Amazon"
        ></input>
        <SearchIcon className="search-icon" />
      </div>
      <div className="header-nav">
        <Link to={!user && "/login"}>
          <div className="header-option" onClick={handleAuthentication}>
            <span className="header-optionOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header-optionTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header-option">
          <span className="header-optionOne">Returns</span>
          <span className="header-optionTwo">& Orders</span>
        </div>
        <div className="header-option">
          <span className="header-optionOne">Your</span>
          <span className="header-optionTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header-optionBasket">
            <ShoppingBasketIcon />

            <span className="header-optionTwo header-basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;

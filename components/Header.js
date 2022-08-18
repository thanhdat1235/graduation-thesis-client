import React, { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <header>
        <div className="container">
          <div className="logo">
            <h2>
              <a href="/">Book Store</a>
            </h2>
            <p>Your one stop book shop</p>
          </div>
          <div className="search-box">
            <input type="search" placeholder="Search Books" />
            <i className="fas fa-search"></i>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;

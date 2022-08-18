import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <footer>
        <div className="container">
          <div className="copyright">Copyright 2019 Prudential Book Store</div>
          <div className="acknowledgement">
            API Provided by
            <a target="_blank" href="https://www.goodreads.com/">
              Goodreads
            </a>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;

import React from "react";

const Header = () => {
  return (
    <div className="p-2 div-header">
      <section className="btns-redes">
        <a
          className="btn btn-outline-dark btn-floating m-1"
          href="#!"
          role="button"
        >
          <i className="fab fa-twitter"></i>
        </a>

        <a
          className="btn btn-outline-dark btn-floating m-1"
          href="#!"
          role="button"
        >
          <i className="fab fa-google"></i>
        </a>

        <a
          className="btn btn-outline-dark btn-floating m-1"
          href="#!"
          role="button"
        >
          <i className="fab fa-instagram"></i>
        </a>

        <a
          className="btn btn-outline-dark btn-floating m-1"
          href="#!"
          role="button"
        >
          <i className="fab fa-github"></i>
        </a>
      </section>
    </div>
  );
};

export default Header;

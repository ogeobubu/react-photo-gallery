import React from "react";
import navData from "../navData";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="left-nav">
          <h3>PhotoBoom</h3>
          <nav>
            <ul>
              {navData.map((nav, index) => {
                return (
                  <li key={index}>
                    <a href={nav.link} noreferral="true">
                      {nav.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="right-nav">
          <div className="social-icons">
            <i className="fa fa-facebook fa-2x"></i>
            <i className="fa fa-twitter fa-2x"></i>
            <i className="fa fa-youtube fa-2x"></i>
            <i className="fa fa-globe fa-2x"></i>
          </div>
          <a href="#" noreferral="true">
            Partner With Us
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import "./navbar.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";

export const Navbar = () => {
  return (
    <nav className="nav">
      <a href="/" className="nav__link">
        <Logo className="nav__logo" />
      </a>
      <ul className="nav__list">
        <li className="nav__item">
          <a href="/" className="nav__item-list">
            Features
          </a>
        </li>
        <li className="nav__item">
          <a href="/" className="nav__item-list">
            Partners
          </a>
        </li>
        <li className="nav__item">
          <a href="/" className="nav__item-list">
            Stories
          </a>
        </li>
      </ul>
      <button className="nav__button" type="button">
        Download for free
      </button>
    </nav>
  );
};

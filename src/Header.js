import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <div>
      <header className="header">
        <a href="#" className="logo">
          Portfolio
        </a>

        {/* <i className="bx bx-menu" id="menu-icon"></i> */}
        <GiHamburgerMenu className="bx bx-menu" id="menu-icon" />

        <nav className="navbar">
          <a href="#home" className="active">
            Home
          </a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
    </div>
  );
};

export default Header;

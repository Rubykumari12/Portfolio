import React, { useState } from "react";
import { FaFile } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { Modal, modal } from "antd";

const Header = () => {
  const [listOpen, setListOpen] = useState(false);

  return (
    <div>
      <header className="header">
        <FaFile id="portfolio-icon" />
        <a href="#" className="logo">
          Portfolio
        </a>

        <div className="navbar">
          <div className="mobileIcon">
            {listOpen && (
              <RxCross2
                onClick={() => setListOpen(!listOpen)}
                size={"20px"}
                style={{ color: "#fff", fontWeight: "bold" }}
              />
            )}
            {!listOpen && (
              <GiHamburgerMenu
                onClick={() => setListOpen(!listOpen)}
                size={"20px"}
              />
            )}
          </div>

          <ul className="navbarList">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </header>

      <Modal
        className="mobileList"
        onCancel={() => setListOpen(!listOpen)}
        open={listOpen}
        footer={null}
        closeIcon={false}
        width={"100px"}
      >
        <div>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </Modal>
    </div>
  );
};

export default Header;

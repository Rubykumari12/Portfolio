import React from "react";
import { GrLinkUp } from "react-icons/gr";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-text">
          <p>Copyright &copy; 2023 by Ruby | All Rights Reserved.</p>
        </div>

        <div className="footer-iconTop">
          <a href="#home">
            {/* <i className="bx bx-up-arrow-alt"></i> */}
            <GrLinkUp className="icon" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

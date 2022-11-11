import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import { UilLinkedin } from '@iconscout/react-unicons'
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span><a href="mailto:jaikrishnagokul@gmail.com">jaikrishnagokul@gmail.com</a></span>
        <div className="f-icons">
          <a href="https://github.com/jaikrishnavr">
          <UilLinkedin color="white" size={"3rem"} />
          </a>
          <a href="https://linkedin.com/in/jaikrishnavr">
          <Gitub color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

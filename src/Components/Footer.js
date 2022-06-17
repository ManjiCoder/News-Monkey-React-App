import React from "react";
import Insta from "../Images/insta.png";
import FB from "../Images/fb.png";
import Twit from "../Images/twit.png";
import YT from "../Images/yt.png";
import LinIn from "../Images/In.png";

function Footer(props) {
  return (
    <footer>
      <div className="footer">
        <span>Follow us on.</span>
        <div id="links-wrapper">
          <img src={Insta} alt="" className="footer-links" />
          <img src={FB} alt="" className="footer-links" />
          <img src={Twit} alt="" className="footer-links" />
          <img src={YT} alt="" className="footer-links" />
          <img src={LinIn} alt="" className="footer-links" />
        </div>
        <div className="copyright">
          <span id="symbol">&#0169;Copyright 2017-2021</span>
          <span> www.{props.title}.com</span>
        </div>
        <div className="copyright">All right are reserved</div>
      </div>
    </footer>
  );
}

export default Footer;

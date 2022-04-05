import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bottom">
        <a target="__facebook" href="https://www.facebook.com/">
          <img
            className="facebook-icon"
            src="images/facebook.png"
            alt="Facebook icon"
          ></img>
        </a>
        <a target="__twitter" href="https://www.twitter.com/">
          <img
            className="twitter-icon"
            src="images/twitter.png"
            alt="Twitter icon"
          ></img>
        </a>
        <a target="__instagram" href="https://www.instagram.com/">
          <img
            className="instagram-icon"
            src="images/instagram.png"
            alt="Instagram icon"
          ></img>
        </a>
        <p class="copyright">Copyright 2022 Isaiji</p>
      </footer>
    </>
  );
};

export default Footer;

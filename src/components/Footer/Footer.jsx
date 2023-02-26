import React from "react";
import discordimg from "../../assets/discord.png"
import linkedinimg from "../../assets/linkedin.png"
import instagramimg from "../../assets/insta.png"
import "./Footer.css";

function Footer() {
  return (
    <div className="footer_container">
      <div className="img_container">
        <a href="/">
          <img src={discordimg} alt="discordimg" />
        </a>
        <a href="/">
          <img src={linkedinimg} alt="linkdenimg" />
        </a>
        <a href="/">
          <img src={instagramimg} alt="instagramimg" />
        </a>
      </div>
    </div>
  );
}

export default Footer;

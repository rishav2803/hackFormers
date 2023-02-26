import Card from "../../ui/Card";
import "./Hero.css";
import discordimg from "../../assets/discord.png"
import linkedinimg from "../../assets/linkedin.png"
import instagramimg from "../../assets/insta.png"

export default function AvalonHero({ heroImg }) {
  return (
    <Card>
      <div className="h_container" id="home">
        <div className="hero_container">
          <img src={heroImg} alt="" />
          <div className="meta">
            <div className="date">
              17th March - 19th March 2023
            </div>
            {/* <img src="src\assets\Vector.png" alt="" /> */}
            {/* <div className="time">
              <i className="fa fa-star"></i>
              10:00 A.M - 5:00 P.M
            </div> */}
            {/* <img src="src\assets\Vector.png" alt="" /> */}
            <div className="location">
              <p>Terna College</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

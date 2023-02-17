import Hero from "../components/Hero/Hero";
import NavBar from "../components/NavBar/NavBar";
import avalonLogo from "../assets/Avalon.png";
import avalonHero from "../assets/AvalonHero.png";

export default function Avalon() {
  const links = ["home", "Hackformers"];
  return (
    <>
      <NavBar links={links} logo={avalonLogo}></NavBar>
      <Hero heroImg={avalonHero}></Hero>
    </>
  );
}

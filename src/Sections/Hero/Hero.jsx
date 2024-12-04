import heroImg from "../../assets/EmezyImg2.png";
import styles from "./HeroStyles.module.css";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/EmezyCV2.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;

  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  return (
    <section className={styles.container} id="hero">
      <div className={styles.colorModeContainer}>
        <img src={heroImg} alt="profile picture" className={styles.hero} />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Odele
          <br /> Chibuike
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://x.com/Emezyoo7" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>

          <a href="https://github.com/ChibuikeOdele" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>

          <a
            href="https://www.linkedin.com/in/odele-chibuike-6a1b1a187/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern React web app for commercial
          businesses.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;

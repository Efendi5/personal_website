import styles from "./Start.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import profileImage from "../images/profileImage.JPG";
import html5 from "../images/html5.png";
import css3 from "../images/css3.png";
import js from "../images/js.png";
import rt from "../images/rt.png";
import tst from "../images/tst.png";

export default function Start() {
  return (
    <>
      <section id="home" className={styles.section}>
        <div className={styles.container}>
          <h1 className={styles.h1}>Frontend Web Developer</h1>
          <p className={styles.paragraph}>
            Hi my Name is Efendi Varol. A passionate Frontend <br /> Web
            Developer based in Germany. 📍
          </p>
          <span className={styles.span}>
            <a href="https://github.com/Efendi5">
              <FontAwesomeIcon
                className={`${styles.icon} ${styles.github}`}
                icon={faGithub}
                bounce
                size="2x"
              />
            </a>
            <a href="https://www.linkedin.com/in/efendi-varol-b9a632266/">
              <FontAwesomeIcon
                className={`${styles.icon} ${styles.linkedin}`}
                icon={faLinkedin}
                bounce
                size="2x"
              />
            </a>
          </span>
          <div className={styles["container-2"]}>
            <p className={styles["paragraph-2"]}>Tech Stack </p>
            <ul className={styles.ul}>
              <li>
                <Image src={html5} alt="HTML5 icon by Icons8" width={45} />
              </li>
              <li>
                <Image src={css3} alt="CSS3 icon by Icons8" width={45} />
              </li>
              <li>
                <Image src={js} alt="JavaScript icon by Icons8" width={45} />
              </li>
              <li>
                <Image src={rt} alt="Reagieren icon by Icons8" width={45} />
              </li>
              <li>
                <Image src={tst} alt="TypeScript icon by Icons8" width={45} />
              </li>
            </ul>
          </div>
        </div>
        <div className={styles["image-container"]}>
          <Image
            src={profileImage}
            width={400}
            height={600}
            alt="Efendi Varol"
            className={styles["round-image"]}
          />
        </div>
      </section>
    </>
  );
}

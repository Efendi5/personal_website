import styles from "./Projects.module.css";
import Image from "next/image";
import battleGame from "../images/battleGame.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
  return (
    <>
      <section id="projects" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.title}>
            <h2>Some of my Projects</h2>
            <p>Each project is a unique piece of development</p>
          </div>
          <div className={styles.card}>
            <Image src={battleGame} alt="Start Game" width={300} height={300} />
            <div className={styles["title-game"]}>
              <h2>Battle Quiz</h2>
              <p>
                A quiz where you can test yourself with questions <br /> or even
                your friends.
              </p>
              <div className={styles.icon}>
                <h6>Code</h6>
                <a href="https://github.com/Efendi5/capstone-project">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <h6>Live Demo</h6>
                <a href="https://battlequiz.vercel.app/">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="2x" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

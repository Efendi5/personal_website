import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Footer.module.css";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h3 className={styles.h3}>
              Copyright © {new Date().getFullYear()}. All rights are reserved
            </h3>
            <div className={styles.div}>
              <a
                aria-label="linkedin"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/efendi-varol-b9a632266/"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a
                aria-label="github"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Efendi5"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

import styles from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpenText,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <>
      <section id="contact" className={styles.contact}>
        <div className={styles.container}>
          <div className={styles["contact-content"]}>
            <div className={styles["contact-title"]}>
              <p className={styles.paragraph}>Contact</p>
              <h3>Do not be shy! Hit me up! 👇</h3>
            </div>
            <div className={styles["contact-icons"]}>
              <div className={styles["contact-icon-box"]}>
                <span>
                  <FontAwesomeIcon icon={faLocationDot} flip size="2x" />
                </span>
                <div>
                  <h3 className={styles.h3}>Location</h3>
                  <p className={styles.p}>Germany</p>
                </div>
              </div>
              <div className={styles["contact-icon-box"]}>
                <span>
                  <FontAwesomeIcon icon={faEnvelopeOpenText} flip size="2x" />
                </span>
                <div className={styles["contact-info"]}>
                  <h3>Mail</h3>
                  <a href="mailto:efendiv@icloud.com">efendiv@icloud.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

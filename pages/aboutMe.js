import styles from "./AboutMe.module.css";
import Image from "next/image";
import aboutmeimage from "../images/aboutmeimage.jpg";

export default function AboutMe() {
  return (
    <>
      <section id="about" className={styles.section}>
        <div className={styles.div}>
          <div className={styles.image}>
            <Image
              src={aboutmeimage}
              alt="aboutmeimage"
              width={300}
              height={300}
              className={styles["round-image"]}
            />
          </div>
          <div className={styles.containerr}>
            <h4 className={styles.h4}>ABOUT ME</h4>
            <h3 className={styles.h3}>
              A dedicated Frontend Web Developer based in Germany 📍
            </h3>
            <p className={styles.paragraph}>
              I was self-employed for several years, but I have always been
              captivated by the world of programming, <br /> which eventually
              led me to attend a bootcamp. There, I learned a lot and I continue
              to expand <br /> my knowledge in this field. As a junior front-end
              developer, I possess a strong skill set in <br /> HTML, CSS,
              JavaScript, React, React Native, and TypeScript. The realm of
              programming is as vast <br /> as my hunger for knowledge in this
              domain. I take pleasure in writing clean and optimized code,{" "}
              <br /> and I am familiar with the use of cutting-edge development
              tools. Furthermore, I am <br /> a team player who enjoys
              collaborating with others because I believe that strength lies in
              unity.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

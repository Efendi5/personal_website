import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import Hamburger from "hamburger-react";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  function toggleNav() {
    setShowNav(!showNav);
  }

  function scrollToSection(sectionId, event) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setShowNav(false);
    }
    if (event) {
      event.preventDefault();
    }
  }

  return (
    <>
      <header className={styles.header}>
        <h3 onClick={() => scrollToSection("home")} className={styles.logo}>
          Efendi Varol
        </h3>
        <nav
          className={`${styles.nav} ${showNav ? styles.responsive_nav : ""}`}
        >
          <a href="#home" onClick={(event) => scrollToSection("home", event)}>
            Home
          </a>
          <a href="#about" onClick={(event) => scrollToSection("about", event)}>
            About
          </a>
          <a
            href="#projects"
            onClick={(event) => scrollToSection("projects", event)}
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={(event) => scrollToSection("contact", event)}
          >
            Contact
          </a>
        </nav>
        <button className={styles["nav-btn"]} onClick={toggleNav}>
          <Hamburger label="Show menu" size={25} />
        </button>
      </header>
    </>
  );
}

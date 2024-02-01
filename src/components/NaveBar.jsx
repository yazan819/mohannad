import React, { useEffect, useState } from "react";
import "../styles/navbar.css";
import logo from "../images/logo.webp";
import logoName from "../images/loganame.webp";

function NaveBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);
  return (
    <div className={`NavBarContainer ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <img src={logo} />
        <img src={logoName} />
      </div>
      <ul>
        <li>
          <button>Home</button>
        </li>
      </ul>
      <ul>
        <li>
          <button>About Us</button>
        </li>
      </ul>
      <ul>
        <li>
          <button>Services</button>
        </li>
      </ul>
      <ul>
        <li>
          <button>Products</button>
        </li>
      </ul>
      <ul>
        <li>
          <button>Portfolio</button>
        </li>
      </ul>
    </div>
  );
}

export default NaveBar;

import { useState, useEffect } from "react";
import "../styles/navbar.css";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={scrolled ? "navbar scrolled" : "navbar"}>

  <div className="navbar-inner">

    <h2 className="logo">Omkar Photography</h2>

    <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
      ☰
    </div>

    <ul className={menuOpen ? "nav-links active" : "nav-links"}>
      <li><a href="#home">Home</a></li>
      <li><a href="#gallery">Gallery</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#booking">Booking</a></li>
    </ul>

  </div>

</nav>
  );
}

export default Navbar;
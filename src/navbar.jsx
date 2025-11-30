import "./navbar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="nav-left" onClick={() => navigate("/")}>
        <h2 className="nav-title">CGI Portal</h2>
      </div>

      {/* Desktop Links */}
      <div className="nav-links">
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/about")}>About</button>
        <button onClick={() => navigate("/contact")}>Contact</button>

        <div className="social-icons">
          <a href="https://www.linkedin.com/in/YOUR_USERNAME" target="_blank">
            <i className="fab fa-linkedin fa-1x"></i>
          </a>
          <a href="https://twitter.com/YOUR_USERNAME" target="_blank">
            <i className="fab fa-twitter fa-1x"></i>
          </a>
          <a href="https://github.com/YOUR_USERNAME" target="_blank">
            <i className="fab fa-github fa-1x"></i>
          </a>
        </div>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div className={isOpen ? "bar bar1-open" : "bar"}></div>
        <div className={isOpen ? "bar bar2-open" : "bar"}></div>
        <div className={isOpen ? "bar bar3-open" : "bar"}></div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <button onClick={() => { setIsOpen(false); navigate("/"); }}>Home</button>
          <button onClick={() => { setIsOpen(false); navigate("/about"); }}>About</button>
          <button onClick={() => { setIsOpen(false); navigate("/contact"); }}>Contact</button>

          <div className="mobile-social">
            <a href="https://www.linkedin.com/in/YOUR_USERNAME" target="_blank">
              <i className="fab fa-linkedin fa-1x"></i>
            </a>
            <a href="https://twitter.com/YOUR_USERNAME" target="_blank">
              <i className="fab fa-twitter fa-1x"></i>
            </a>
            <a href="https://github.com/YOUR_USERNAME" target="_blank">
              <i className="fab fa-github fa-1x"></i>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

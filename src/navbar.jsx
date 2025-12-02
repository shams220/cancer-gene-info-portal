import "./navbar.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  // mobilePopupType: null | 'twitter' | 'linkedin' | 'github'
  const [mobilePopupType, setMobilePopupType] = useState(null);

  // Close mobile popups when menu closes
  useEffect(() => {
    if (!isOpen) setMobilePopupType(null);
  }, [isOpen]);

  const toggleMobilePopup = (type) => {
    setMobilePopupType((prev) => (prev === type ? null : type));
  };

  return (
    <nav className="navbar">
      <div className="nav-left" onClick={() => navigate("/")}>
        <h2 className="nav-title">CGI Portal</h2>
      </div>

      {/* Desktop Links */}
      <div className="nav-links">
        <div className="nav-btns">
            <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/about")}>About</button>
        <button onClick={() => navigate("/contact")}>Contact</button>
        </div>

      <div className="nav-socials">
   {/* LINKEDIN */}
        <div className="social-hover-box">
          <i className="fab fa-linkedin"></i>
          <div className="social-popup">
            <a href="https://www.linkedin.com/in/gulnaz-parveen-812b05337/?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer">Gulnaaz Parveen</a>
            <a href="https://www.linkedin.com/in/alamzia23/" target="_blank" rel="noreferrer">Alam Zia</a>
            <a href="https://www.linkedin.com/in/shams-alam22/" target="_blank" rel="noreferrer">Shams Alam</a>
          </div>
        </div>
       
        {/* TWITTER (desktop hover popup) */}
        <div className="social-hover-box">
          <i className="fab fa-twitter"></i>
          <div className="social-popup">
            {/* <a href="https://twitter.com/GULNAZ" target="_blank" rel="noreferrer">Gulnaaz Parveen</a> */}
            <a href="https://x.com/Alamzia7" target="_blank" rel="noreferrer">Alam Zia</a>
            <a href="https://x.com/nextleveldev22" target="_blank" rel="noreferrer">Shams Alam</a>
          </div>
        </div>

      

        {/* GITHUB */}
        <div className="social-hover-box">
          <i className="fab fa-github"></i>
          <div className="social-popup">
            <a href="https://github.com/gulnaazparveen22" target="_blank" rel="noreferrer">Gulnaaz Parveen</a>
            <a href="https://github.com/alamzia23" target="_blank" rel="noreferrer">Alam Zia</a>
            <a href="https://github.com/shams220" target="_blank" rel="noreferrer">Shams Alam</a>
          </div>
        </div>
      </div>
      </div>

      {/* HAMBURGER ICON */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
        <div className={isOpen ? "bar bar1-open" : "bar"}></div>
        <div className={isOpen ? "bar bar2-open" : "bar"}></div>
        <div className={isOpen ? "bar bar3-open" : "bar"}></div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="mobile-menu" role="menu">
          <button onClick={() => { setIsOpen(false); navigate("/"); }}>Home</button>
          <button onClick={() => { setIsOpen(false); navigate("/about"); }}>About</button>
          <button onClick={() => { setIsOpen(false); navigate("/contact"); }}>Contact</button>

          <div className="mobile-social">
            {/* LinkedIn mobile box */}
            <div className="mobile-social-box">
              <button
                className="mobile-social-btn"
                onClick={() => toggleMobilePopup("linkedin")}
                aria-expanded={mobilePopupType === "linkedin"}
              >
                <i className="fab fa-linkedin"></i>
              </button>

              {mobilePopupType === "linkedin" && (
                <div className="mobile-social-popup">
                  <a href="https://www.linkedin.com/in/gulnaz-parveen-812b05337/?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer">Gulnaaz Parveen</a>
                  <a href="https://www.linkedin.com/in/alamzia23/" target="_blank" rel="noreferrer">Alam Zia</a>
                  <a href="https://www.linkedin.com/in/shams-alam22/" target="_blank" rel="noreferrer">Shams Alam</a>
                </div>
              )}
            </div>

            {/* Twitter mobile box */}
            <div className="mobile-social-box">
              <button
                className="mobile-social-btn"
                onClick={() => toggleMobilePopup("twitter")}
                aria-expanded={mobilePopupType === "twitter"}
              >
                <i className="fab fa-twitter"></i>
              </button>

              {mobilePopupType === "twitter" && (
                <div className="mobile-social-popup">
                  <a href="https://twitter.com/GULNAZ" target="_blank" rel="noreferrer">Gulnaaz Parveen</a>
                  <a href="https://x.com/Alamzia7" target="_blank" rel="noreferrer">Alam Zia</a>
                  <a href="https://x.com/nextleveldev22" target="_blank" rel="noreferrer">Shams Alam</a>
                </div>
              )}
            </div>

            {/* GitHub mobile box */}
            <div className="mobile-social-box">
              <button
                className="mobile-social-btn"
                onClick={() => toggleMobilePopup("github")}
                aria-expanded={mobilePopupType === "github"}
              >
                <i className="fab fa-github"></i>
              </button>

              {mobilePopupType === "github" && (
                <div className="mobile-social-popup">
                  <a href="https://github.com/gulnaazparveen22" target="_blank" rel="noreferrer">Gulnaaz Parveen</a>
                  <a href="http://GitHub.com/alamzia23" target="_blank" rel="noreferrer">Alam Zia</a>
                  <a href="https://github.com/shams220" target="_blank" rel="noreferrer">Shams Alam</a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

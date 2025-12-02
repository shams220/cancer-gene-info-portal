import React from 'react'
import { useNavigate } from 'react-router-dom'
import './footer.css'

const Footer = () => {
  const navigate = useNavigate()

  return (
    <footer className="footer">
      <div className="footer-top">

        <h1 className="footer-title">
          Cancer Gene Information Portal
        </h1>

        <div className="footer-left mb-5">
          <button className="hm-btn" onClick={() => navigate('/')}>Home</button>
          <button className="abt-btn" onClick={() => navigate('/about')}>About</button>
          <button className="ct-btn" onClick={() => navigate('/contact')}>Contact Us</button>
        </div>

        {/* SOCIAL ICONS WITH POPUP */}
        <div className="footer-social">
          
          {/* LinkedIn */}
          <div className="footer-social-box">
            <i className="fab fa-linkedin fa-2x"></i>

            <div className="footer-social-popup">
              <a href="https://www.linkedin.com/in/gulnaz-parveen-812b05337/?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank">Gulnaz Parvin</a>
              <a href="https://www.linkedin.com/in/alamzia23/" target="_blank">Alam Zia</a>
              <a href="https://linkedin.com/in/shams-alam22" target="_blank">Shams Alam</a>
            </div>
          </div>

          {/* Twitter */}
          <div className="footer-social-box">
            <i className="fab fa-twitter fa-2x"></i>

            <div className="footer-social-popup">
              {/* <a href="#" target="_blank">Gulnaz Parvin</a> */}
              <a href="https://x.com/Alamzia7" target="_blank">Alam Zia</a>
              <a href="https://x.com/nextleveldev22" target="_blank">Shams Alam</a>
            </div>
          </div>

          {/* GitHub */}
          <div className="footer-social-box">
            <i className="fab fa-github fa-2x"></i>

            <div className="footer-social-popup">
              <a href="https://github.com/gulnaazparveen22" target="_blank">Gulnaz Parvin</a>
              <a href="https://github.com/alamzia23" target="_blank">Alam Zia</a>
              <a href="https://github.com/shams220" target="_blank">Shams Alam</a>
            </div>
          </div>

        </div>
      </div>

      © 2025 Cancer Data Portal | Designed by Alam Zia
    </footer>
  )
}

export default Footer

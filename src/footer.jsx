import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate= useNavigate()
  return (
    <div>
      
<footer className="footer">
  <div className="footer-top">
    <h1 className="text-3xl font-extrabold text-white-700 mb-8">
          Cancer Gene Information Portal
        </h1>
   <div className="footer-left mb-5">
  <button className="hm-btn" onClick={() => navigate('/')}>Home</button>
  <button className="abt-btn" onClick={() => navigate('/about')}>About</button>
  <button className="ct-btn" onClick={() => navigate('/contact')}>Contact Us</button>
</div>

  <div class="social-icons">
  <a href="https://www.linkedin.com/in/YOUR_USERNAME" target="_blank">
    <i class="fab fa-linkedin fa-2x"></i>
  </a>
  <a href="https://twitter.com/YOUR_USERNAME" target="_blank">
    <i class="fab fa-twitter fa-2x"></i>
  </a>
  <a href="https://github.com/YOUR_USERNAME" target="_blank">
    <i class="fab fa-github fa-2x"></i>
  </a>
</div>

    {/* <div className="footer-right">
      <form action="" className="contact-form"></form>
    </div> */}
  </div>
  © 2025 Cancer Data Portal | Designed by Alam Zia
</footer>

    </div>
  )
}



export default Footer

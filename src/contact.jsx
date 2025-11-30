import "./contact.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
export default function Contact() {

  const navigate = useNavigate();  // ✅ initialize navigate

  const handleSubmit = (e) => {
    e.preventDefault(); // ❗ stop page refresh

    toast.success("Message sent successfully!");

    setTimeout(() => {
      navigate("/");  // redirect to home after toast
    }, 1500);
  };

  return (
   <div>
    <Navbar/>
     <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>

      <p className="contact-subtitle">
        Have questions, suggestions, or feedback? Send us a message.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input type="text" placeholder="Enter your name" required />

        <label>Your Email</label>
        <input type="email" placeholder="Enter your email" required />

        <label>Message</label>
        <textarea rows="6" placeholder="Write your message..." required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
    <Footer/>
   </div>
    
  );
}

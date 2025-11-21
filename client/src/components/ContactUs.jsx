import { useState } from "react";
import "../style/ContactUs.css";
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin 
} from "react-icons/fa";

function ContactUs() {

  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await fetch("http://localhost:5000/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message })
    });

    const data = await result.json();
    alert(data.msg);

    if (data.msg === "Message Sent Successfully!") {
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className="contact-page">

      <h1 className="contact-title">Contact Us</h1>

      <div className="contact-container">

        {/* LEFT SIDE INFO */}
        <div className="contact-info">
          <h2>Head Office Information</h2>

          <p className="info-item">
            <FaMapMarkerAlt className="icon" />
            Ramallah – Betunia, Palestine
          </p>

          <p className="info-item">
            <FaPhoneAlt className="icon" />
            02 290 2722
          </p>

          <p className="info-item">
            <FaEnvelope className="icon" />
            info@autosign.ps
          </p>

          <div className="social-links">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </div>

          <div className="map-container">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=31.893167,35.179167&hl=en&z=15&output=embed"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="contact-form">
          <h2>Send us a message</h2>

          <form onSubmit={handleSubmit}>

            <label>Name</label>
            <input 
              type="text" 
              placeholder="Your Name" 
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label>Email</label>
            <input 
              type="email" 
              placeholder="Your Email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Message</label>
            <textarea 
              rows="5" 
              placeholder="Write your message..." 
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default ContactUs;

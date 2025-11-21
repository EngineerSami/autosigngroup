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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({});

  // ==============================
  // VALIDATION FUNCTION
  // ==============================
  const validateForm = () => {
    const newErrors = {};

    // Name
    if (name.length < 3) {
      newErrors.name = "Name must be at least 3 characters.";
    } else if (name.length > 20) {
      newErrors.name = "Name cannot exceed 20 characters.";
    }

    // Email
    if (!email.includes("@") || !email.includes(".")) {
      newErrors.email = "Email must include '@' and '.'";
    }

    // Message
    if (message.length < 20) {
      newErrors.message = "Message must be at least 20 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // true = valid
  };

  // ==============================
  // SUBMIT
  // ==============================
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check validation
    if (!validateForm()) {
      return; // STOP if errors exist
    }

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
      setErrors({});
    }
  };

  return (
    <div className="contact-page">

      <h1 className="contact-title">Contact Us</h1>

      <div className="contact-container">

        {/* CONTACT INFO */}
        <div className="contact-info">
          <h2>Head Office Information</h2>

          <p className="info-item">
            <FaMapMarkerAlt className="icon" />
            Palestine, Ramallah Industrial Zone – Jafa Street
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

        {/* CONTACT FORM */}
        <div className="contact-form">
          <h2>Send us a message</h2>

          <form onSubmit={handleSubmit}>

            <label>Name</label>
            <input 
              type="text" 
              placeholder="Your Name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className="error-text">{errors.name}</p>}

            <label>Email</label>
            <input 
              type="email" 
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}

            <label>Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            {errors.message && <p className="error-text">{errors.message}</p>}

            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default ContactUs;

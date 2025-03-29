import React, { useState } from "react";
import emailjs from "@emailjs/browser"; 
import {
  MailOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import "../styles/contact.css";
import { trackButtonClick } from "../firebase"; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_og7jtkb", 
        "template_ics3vmy", 
        formData,
        "K2LGrC1IW7OpGMILz"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Failed to send message. Try again.");
          console.error(error);
        }
      );
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Let's Connect</h2>
      <p className="contact-subtitle">
        Have a discussion or just want to say hi? Drop me a message!
      </p>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="contact-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="contact-input"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="contact-textarea"
        />
        <button
          type="submit"
          className="contact-button"
          onClick={() => trackButtonClick("contact_me")}
        >
          Send Message
        </button>
      </form>

      <div className="contactSectionSpace"></div>

      <div className="contact-icons">
        <h4 style={{ margin: 0 }}>MANUSH.DEV</h4>
        <div className="allRight">© 2025 All rights reserved.</div>
        <div>
          <a
            href="mailto:manushashan022@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackButtonClick("email_click")}
          >
            <MailOutlined className="contact-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/manusha-upekshana/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackButtonClick("linkedin_click")}
          >
            <LinkedinOutlined className="contact-icon" />
          </a>
          <a
            href="https://github.com/manu5h"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackButtonClick("github_click")}
          >
            <GithubOutlined className="contact-icon" />
          </a>
        </div>
      </div>

      <div className="contact-icons-mobile">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            margin: "10px 0 0 0",
          }}
        >
          <h4 style={{ margin: 0 }}>MANUSH.DEV</h4>
          <div>
            <a
              href="mailto:manushashan022@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackButtonClick("email_click")}
            >
              <MailOutlined className="contact-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/manusha-upekshana/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackButtonClick("linkedin_click")}
            >
              <LinkedinOutlined className="contact-icon" />
            </a>
            <a
              href="https://github.com/manu5h"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackButtonClick("github_click")}
            >
              <GithubOutlined className="contact-icon" />
            </a>
          </div>
        </div>
        <div className="allRight" style={{ marginTop: "20px" }}>
          © 2025 All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Contact;

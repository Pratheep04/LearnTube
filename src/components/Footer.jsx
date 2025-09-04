import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";  // ✅ X (Twitter)

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} LearnTube. All Rights Reserved.</p>
      <div className="footer-links">
        <a href="mailto:ctgpratheep@gmail.com">
          <FaEnvelope className="icon" />
        </a>
        <a href="https://x.com/Pratheep9904" target="_blank" rel="noopener noreferrer">
          <FaXTwitter className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/pratheep-sekar" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
        <a href="https://github.com/Pratheep04" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

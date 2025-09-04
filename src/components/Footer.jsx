import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} LearnTube. All Rights Reserved.</p>
      <div className="footer-links">
        <a href="mailto:contact@learntube.com">📧 contact@learntube.com</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">🐦 Twitter</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">💻 GitHub</a>
      </div>
    </footer>
  );
};

export default Footer;

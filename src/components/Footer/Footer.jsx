import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-con text-white">
      <div className="info-container">
        <ul className="contact-list">
          <li><strong>Email:</strong> <a href="mailto:devendirane2@gmail.com">devendirane2@gmail.com</a></li>
          <li><strong>Phone:</strong> <a href="tel:+916374512055">+91 6374512055</a></li>
          <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/devendiran" target="_blank" rel="noopener noreferrer">linkedin.com/in/devendirane2</a></li>
          <li><strong>GitHub:</strong> <a href="https://github.com/prettycodedirector" target="_blank" rel="noopener noreferrer">github.com/prettycodedirector</a></li>
          <li><strong>Location:</strong> Chennai / Villuppuram, Tamil Nadu, India</li>
        </ul>

        <div className="social-icons">
          <a href="mailto:devendirane2@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-envelope-fill" style={{ color: "#D44638" }}></i>
          </a>
          <a href="https://github.com/prettycodedirector" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github" style={{ color: "#fff" }}></i>
          </a>
          <a href="https://wa.me/6374512055" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-whatsapp" style={{ color: "#25D366" }}></i>
          </a>
          <a href="https://instagram.com/devendiran_maker_offi" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-instagram" style={{ color: "#E4405F" }}></i>
          </a>
          <a href="https://x.com/DirectorDevend1?t=Ql6mWuztofUQB6KIz9vNiw&s=08" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-twitter" style={{ color: "#1DA1F2" }}></i>
          </a>
        </div>
      </div>

      <div className="text-center copy-con pt-3">
        <em>© 2024 Created by Devendiran. All Rights Reserved.</em>
      </div>
    </footer>
  );
};

export default Footer;

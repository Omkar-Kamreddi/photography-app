import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h3>Omkar Photography</h3>
          <p>
            Capturing your beautiful moments with creativity and passion.
          </p>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>📞 +91 9876543210</p>
          <p>📧 omkarphoto@gmail.com</p>
          <p>📍 Pune, Maharashtra</p>
        </div>

        <div className="footer-section">
          <h3>Follow</h3>
          <div className="social-links">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">WhatsApp</a>
          </div>
        </div>

      </div>

      <hr className="footer-line" />

      <div className="footer-bottom">
        © {new Date().getFullYear()} Omkar Photography | All Rights Reserved
      </div>

    </footer>
  );
}

export default Footer;
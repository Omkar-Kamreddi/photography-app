import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h3>Soma Photography</h3>
          <p>
            Capturing your beautiful moments with creativity and passion.
          </p>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>📞 +91 9960006423</p>
          <p>📧 somaphotostudio@gmail.com</p>
          <p>📍 Subhash Nagar Barshi Dist. Solapur</p>
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
        © {new Date().getFullYear()} Soma Photography | All Rights Reserved
      </div>

    </footer>
  );
}

export default Footer;
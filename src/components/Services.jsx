import "../styles/services.css";
import birth from "../assets/birth.png";
import wedding from "../assets/wedding.png";
import prewed from "../assets/prewed.png";
import baby from "../assets/baby.png";

function Services() {
  return (
    <section className="services">
      <h2>Our Services</h2>

      <div id="services" className="services-container" data-aos="fade-up">

        <div className="service-card">
          <img src={wedding} alt="Wedding" />
          <h3>Wedding Photography</h3>
          <p>Capturing the most beautiful wedding moments.</p>
        </div>

        <div className="service-card">
          <img src={prewed} alt="Pre Wedding" />
          <h3>Pre Wedding Shoot</h3>
          <p>Creative pre wedding photography sessions.</p>
        </div>

        <div className="service-card">
          <img src={birth} alt="Birthday" />
          <h3>Birthday Events</h3>
          <p>Capture joyful birthday celebrations.</p>
        </div>

        <div className="service-card">
          <img src={baby} alt="Portrait" />
          <h3>Baby Shoot Photography</h3>
          <p>Professional portrait photography sessions.</p>
        </div>

      </div>
    </section>
  );
}

export default Services;
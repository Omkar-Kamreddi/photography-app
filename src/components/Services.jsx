import "../styles/services.css";

function Services() {
  return (
    <section className="services">
      <h2>Our Services</h2>

      <div id="services" className="services-container" data-aos="fade-up">

        <div className="service-card">
          <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc" alt="Wedding" />
          <h3>Wedding Photography</h3>
          <p>Capturing the most beautiful wedding moments.</p>
        </div>

        <div className="service-card">
          <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc" alt="Pre Wedding" />
          <h3>Pre Wedding Shoot</h3>
          <p>Creative pre wedding photography sessions.</p>
        </div>

        <div className="service-card">
          <img src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d" alt="Birthday" />
          <h3>Birthday Events</h3>
          <p>Capture joyful birthday celebrations.</p>
        </div>

        <div className="service-card">
          <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1" alt="Portrait" />
          <h3>Portrait Photography</h3>
          <p>Professional portrait photography sessions.</p>
        </div>

      </div>
    </section>
  );
}

export default Services;
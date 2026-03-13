import { useState } from "react";
import "../styles/booking.css";

function Booking() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    event: "",
    date: "",
    location: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Booking Request Sent!");
  };

  return (
    <section id="booking" className="booking" data-aos="fade-left">
      <h2>Book a Session</h2>

      <form onSubmit={handleSubmit} className="booking-form">

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          required
        />

        <select name="event" onChange={handleChange} required>
          <option value="">Select Event</option>
          <option>Wedding</option>
          <option>Pre Wedding</option>
          <option>Birthday</option>
          <option>Portrait</option>
        </select>

        <input
          type="date"
          name="date"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Event Location"
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Additional Message"
          onChange={handleChange}
        />

        <button type="submit">Send Booking Request</button>

      </form>
    </section>
  );
}

export default Booking;
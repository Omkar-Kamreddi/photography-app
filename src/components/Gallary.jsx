import { useState } from "react";
import "../styles/gallary.css";
import w1 from "../assets/w1.png";

function Gallery() {

  const images = [
    { url: w1, category: "wedding" },
    { url: "https://images.unsplash.com/photo-1520857014576-2c4f4c972b57", category: "portrait" },
    { url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc", category: "wedding" },
    { url: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d", category: "events" },
    { url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1", category: "portrait" },
    { url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1", category: "portrait" },
    { url: "https://images.unsplash.com/photo-1511988617509-a57c8a288659", category: "events" },
    { url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486", category: "nature" },
    { url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee", category: "nature" }
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("all");

  const filteredImages =
    filter === "all"
      ? images
      : images.filter((img) => img.category === filter);

  return (
    <section id="gallery" className="gallery" data-aos="fade-up">

      <h2>Our Gallery</h2>

      {/* Filter Buttons */}

      <div className="gallery-filters">

        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("wedding")}>Wedding</button>
        <button onClick={() => setFilter("portrait")}>Portrait</button>
        <button onClick={() => setFilter("events")}>Events</button>
        <button onClick={() => setFilter("nature")}>Nature</button>

      </div>

      <div className="gallery-grid">

        {filteredImages.map((img, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => setSelectedImage(img.url)}
          >

            <img src={img.url} alt="photography" />

            <div className="overlay">
              <span>View Photo</span>
            </div>

          </div>
        ))}

      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="preview" />
        </div>
      )}

    </section>
  );
}

export default Gallery;
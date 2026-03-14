import { useState } from "react";
import "../styles/gallary.css";
import w1 from "../assets/w1.png";
import w2 from "../assets/w2.png";
import w3 from "../assets/w3.png";
import w5 from "../assets/w5.png";
import w6 from "../assets/w6.png";
import w7 from "../assets/w7.png";
import w8 from "../assets/w8.png";
import w9 from "../assets/w9.png";
import w10 from "../assets/w10.png";

function Gallery() {

  const images = [
    { url: w1, category: "wedding" },
    { url: w5, category: "portrait" },
    { url: w6, category: "wedding" },
    { url: w7, category: "baby shoot" },
    { url: w2, category: "portrait" },
    { url: w3, category: "portrait" },
    { url: w8, category: "baby shoot" },
    { url: w9, category: "pre Wedding" },
    { url: w10, category: "pre Wedding" }
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
        <button onClick={() => setFilter("baby shoot")}>Baby Shoot</button>
        <button onClick={() => setFilter("pre Wedding")}>Pre Wedding</button>

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
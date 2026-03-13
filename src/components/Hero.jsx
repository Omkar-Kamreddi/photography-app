import { useState, useEffect } from "react";
import "../styles/hero.css";

function Hero() {
    const images = [
        "https://images.unsplash.com/photo-1519741497674-611481863552",
        "https://images.unsplash.com/photo-1520857014576-2c4f4c972b57",
        "https://images.unsplash.com/photo-1522673607200-164d1b6ce486",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    useEffect(() => {
        const slider = setInterval(nextSlide, 5000);
        return () => clearInterval(slider);
    }, []);

    return (
        <section id="home" className="hero">
            <div
                className="hero-slide"
                style={{ backgroundImage: `url(${images[currentIndex]})` }}
            />

            <div className="hero-overlay"></div>

            <div className="hero-content">
                <h1>
                    Capture Every Moment <br />
                    Of Life...
                </h1>
                <p>Professional Wedding & Pre-Wedding Photography</p>

                <div className="hero-buttons">
                    <a href="#booking" className="hero-btn primary">
                        Book a Session
                    </a>

                    <a href="#gallery" className="hero-btn secondary">
                        View Gallery
                    </a>
                </div>
            </div>

            <button className="prev" onClick={prevSlide}>
                ❮
            </button>
            <button className="next" onClick={nextSlide}>
                ❯
            </button>

            <div className="dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={
                            currentIndex === index ? "dot active" : "dot"
                        }
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </section>
    );
}

export default Hero;

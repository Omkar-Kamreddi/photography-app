import "./App.css"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallary from "./components/Gallary";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import AlbumLayout from "./components/AlbumLayout";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {

  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true
  });
}, []);

  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Services />
      <AlbumLayout />
      <Gallary />
      <Booking />
      <Footer />
      <WhatsAppButton /> 
    </div>
  )
}

export default App
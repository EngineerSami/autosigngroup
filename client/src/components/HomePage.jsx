import { useState, useEffect } from "react";
import "../style/HomePage.css";

function HomePage() {
  const images = [
    "https://www.deckerelectric.com/wp-content/uploads/2018/07/astrazeneca-banner-1920x550.jpg",
    "https://thelogicfactory.com/wp-content/uploads/2023/10/TLF-Header_Banner_IDC_Spotlight-1920x550.jpg",
    "https://gygax.com/sites/default/files/tmp/banner-1920x550-96-40_0.jpg",
    "https://www.jamesbatesllp.com/wp-content/uploads/2023/10/Corporate-and-Transactional-Banner-1920x550-Final.jpeg"
  ];

  const captions = [
    {
      title: "AstraZeneca Electrical Solutions",
      text: "Advanced engineering and industrial electrical services.",
      link: "#"
    },
    {
      title: "IDC Spotlight Report",
      text: "Discover insights into optimization and digital transformation.",
      link: "#"
    },
    {
      title: "Gygax Engineering Group",
      text: "Precision, innovation and technical excellence.",
      link: "#"
    },
    {
      title: "Corporate & Transactional Services",
      text: "Legal expertise for growing businesses and enterprises.",
      link: "#"
    }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (slideIndex) => {
    setIndex(slideIndex);
  };

  return (
    <div className="slider-container">

      {/* Slides */}
      {images.map((img, i) => (
        <div
          key={i}
          className={`slide ${i === index ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        >
          {/* Caption fades with slide */}
          <div className={`caption-box ${i === index ? "active" : ""}`}>
            <h2>{captions[i].title}</h2>
            <p>{captions[i].text}</p>
            <a href={captions[i].link}>Learn more</a>
          </div>
        </div>
      ))}

      {/* Bottom Navigation (Arrows + Dots) */}
      <div className="nav-area">
        <button className="arrow" onClick={prevSlide}>❮</button>

        <div className="dots">
          {images.map((_, i) => (
            <span
              key={i}
              className={i === index ? "dot active-dot" : "dot"}
              onClick={() => goToSlide(i)}
            ></span>
          ))}
        </div>

        <button className="arrow" onClick={nextSlide}>❯</button>
      </div>
      
    </div>
    
  );
}

export default HomePage;

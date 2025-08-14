import { useState } from "react";
import "../Styles/ImageCarousel.css";

const imageData = [
  { src: "", description: "Fresh green salad with tomatoes" },
  { src: "src/assets/1.avif", description: "Mixed dried fruits in a wooden bowl" },
  { src: "FRONTEND/my-app/src/assets/3.jpg", description: "Leafy salad with bell peppers" },
  { src: "src/assets/2.png", description: "Splashing glass of pure water" },
  { src: "src/assets/5.jpg", description: "Colorful salad with fresh vegetables" },
  { src: "src/assets/6.jpg", description: "Protein-rich breakfast platter" },
  { src: "src/assets/7.jpg", description: "Healthy smoothie with berries" },
  { src: "src/assets/8.jpg", description: "Whole grain sandwich" },
  { src: "src/assets/9.jpg", description: "Bowl of assorted nuts" },
  { src: "src/assets/10.jpg", description: "Homemade vegetable soup" },
  { src: "src/assets/11.jpg", description: "Fruit platter with melon and grapes" },
  { src: "src/assets/12.jpg", description: "Energy-rich oatmeal breakfast" }
];

const imagesPerSlide = 4;

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = Math.ceil(imageData.length / imagesPerSlide);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const startIndex = currentIndex * imagesPerSlide;
  const endIndex = startIndex + imagesPerSlide;
  const currentImages = imageData.slice(startIndex, endIndex);

  return (
    <div className="carousel-container">
      <button className="carousel-nav prev" onClick={goToPrev} aria-label="Previous Slide">&#8249;</button>
      <div className="carousel-slide">
        {currentImages.map((img, idx) => (
          <div key={idx} className="carousel-image-wrapper">
            <img src={img.src} alt={img.description} className="carousel-image" />
            <div className="carousel-desc">{img.description}</div>
          </div>
        ))}
      </div>
      <button className="carousel-nav next" onClick={goToNext} aria-label="Next Slide">&#8250;</button>
      <div className="carousel-dots">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <span
            key={i}
            className={`carousel-dot ${i === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;

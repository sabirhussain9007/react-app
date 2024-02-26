import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import "./Carousel1.css";

const Carousel1 = ()=> {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  const slides = [
    {
      image: "https://mdbootstrap.com/img/Photos/Slides/img (15).webp",
      caption: "First slide label",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      image: "https://mdbootstrap.com/img/Photos/Slides/img (22).webp",
      caption: "Second slide label",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: "https://mdbootstrap.com/img/Photos/Slides/img (23).webp",
      caption: "Third slide label",
      description: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    },
  ];

  return (
    <div className="custom-carousel" {...handlers}>
      <div className="slides-container">
        {slides.map((slide, index) => (
          <div key={index} className={index === currentSlide ? "slide active" : "slide"}>
            <img src={slide.image} alt={`Slide ${index + 1}`} />
            <div className="caption">
              <h3>{slide.caption}</h3>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="dots-container">
        {slides.map((_, index) => (
          <button
            key={index}
            className={index === currentSlide ? "dot active" : "dot"}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
      <button className="prev-btn" onClick={prevSlide}>
        Prev
      </button>
      <button className="next-btn" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
}
export default Carousel1;

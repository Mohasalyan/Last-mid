import React, { useEffect, useState } from "react";
import "./slider.css";
import ScrollVisibility from "../../ScrollVisibility/ScrollVisibility";

export const slider_data = [
  { image: "../../../../src/assets/img_slider/slider_1.webp" },
  { image: "../../../../src/assets/img_slider/slider_2.webp" },
  { image: "../../../../src/assets/img_slider/slider_3.webp" },
  { image: "../../../../src/assets/img_slider/slider_4.webp" },
  { image: "../../../../src/assets/img_slider/slider_5.webp" },
  { image: "../../../../src/assets/img_slider/slider_6.webp" },
];

const AutomaticSlideshow = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % slider_data.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentImage]);

  return (
    <ScrollVisibility>
      <div className={"image-slider"}>
        {slider_data.map((item, index) => (
          <img
            key={index}
            src={item.image}
            alt={`Slide ${index + 1}`}
            className={`slider-image fade ${
              index === currentImage ? "active" : ""
            }`}
          />
        ))}
        <p className="currentImage_length">
          {currentImage + 1} / {slider_data.length}
        </p>
      </div>
    </ScrollVisibility>
  );
};

export default AutomaticSlideshow;

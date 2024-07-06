import { useEffect, useState } from "react";
import { BtnSlider } from "../button-slider/button-slider.component";
import "./slider.css";

export function Slider({ sliderList }) {
  const [slideIndex, setSlideIndex] = useState(1);

  function nextSlide() {
    if (slideIndex !== sliderList.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === sliderList.length) {
      setSlideIndex(1);
    }
  }

  function prevSlide() {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(sliderList.length);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(interval);
  });

  return (
    <div className="container-slider">
      {sliderList.map((obj, Index) => {
        return (
          <div
            key={Index}
            className={
              slideIndex === Index + 1 ? "box-img active-anim" : "box-img"
            }
          >
            <img
              className="img"
              src={process.env.PUBLIC_URL + `slider/img${Index + 1}.jpg`}
            />
          </div>
        );
      })}
      <BtnSlider direction={"prev"} moveSlider={prevSlide} />
      <BtnSlider direction={"next"} moveSlider={nextSlide} />
    </div>
  );
}

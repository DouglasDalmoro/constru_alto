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

  function navigateToWhats() {
    window.open(
      "https://api.whatsapp.com/send?phone=5551996745902&text=Ol%C3%A1,%20fiquei%20interessado%20em%20um%20de%20seus%20terrenos%20pelo%20site.%0AGostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es.%20",
      "_blank"
    );
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(interval);
  });

  return (
    <div className="container-slider">
      {sliderList.map((obj, Index) => (
        <div
          key={Index}
          className={
            slideIndex === Index + 1 ? "box-img active-anim" : "box-img"
          }
        >
          <img
            className="img"
            src={process.env.PUBLIC_URL + `slider/img${Index + 1}.jpg`}
            alt={`Imagem ${Index + 1}`}
          />
        </div>
      ))}
  
      <div className="click-area" onClick={navigateToWhats} />
  
      <BtnSlider direction={"prev"} moveSlider={prevSlide} />
      <BtnSlider direction={"next"} moveSlider={nextSlide} />
      <div className="text-overlay">Conheça nossos imóveis em destaque</div>
    </div>
  );  
}

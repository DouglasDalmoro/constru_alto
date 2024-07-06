import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import "./btn-slider.css";

export function BtnSlider({ direction, moveSlider }) {
  return (
    <button
      className={direction === "next" ? "btn-slider next" : "btn-slider prev"}
      onClick={moveSlider}
    >
      {direction === "next" ? <AiOutlineArrowRight /> : <AiOutlineArrowLeft />}
    </button>
  );
}

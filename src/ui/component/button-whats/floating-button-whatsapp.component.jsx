import { FaWhatsapp } from "react-icons/fa";
import "./floating-button-whatsapp.component.css";

export function FloatingButtonWhatsApp() {
  
  function navigateToWhats() {
    window.open(
      "https://api.whatsapp.com/send?phone=5551996745902&text=Ol%C3%A1,%20fiquei%20interessado%20em%20um%20de%20seus%20terrenos%20pelo%20site.%0AGostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es.%20",
      "_blank"
    );
  }

  return (
    <div
      onClick={navigateToWhats}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={30} color="white" />
    </div>
  );
}

export default FloatingButtonWhatsApp;

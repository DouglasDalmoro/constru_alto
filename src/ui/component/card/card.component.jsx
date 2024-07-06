import { BiSolidMapPin } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import "./card.css";

export function Card({ description, localization, price, img, isActive }) {
  const textDescription = "Descrição";
  const textButton = "SAIBA MAIS";
  const navigate = useNavigate();

  const btnCss = isActive ? "footer-card_button" : "footer-card_button sale";
  const priceCss = isActive
    ? "cad-box_content_price"
    : "cad-box_content_price sale_price";
  const imgCss = isActive
    ? "cad-box_content_img"
    : "cad-box_content_img sale_cad-box_content_img";

  function onclickNavigate() {
    navigate(`/contact-us/${description}`);
  }

  return (
    <div className="card-box">
      <div className="cad-box_content">
        <img
          className={imgCss}
          src={img}
          alt="Imagem do terreno enviada pelo dono"
        />
        <div className="cad-box_content_text">
          <h2>{textDescription}</h2>
          <p>{description}</p>
          <div className="footer-card">
            <button
              className={btnCss}
              onClick={onclickNavigate}
              disabled={!isActive}
            >
              {textButton}
            </button>
            <div className="footer-card_localization">
              <p>{localization}</p>
              <BiSolidMapPin />
            </div>
          </div>
        </div>
        <div className={priceCss}>
          <span>{price}</span>
        </div>
      </div>
    </div>
  );
}

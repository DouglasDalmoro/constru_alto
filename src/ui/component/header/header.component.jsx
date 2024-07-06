import { Container } from "../container/conteiner.component";
import logo from "../../../assets/logo.png";
import "./header.css";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="header">
      <Container>
        <div className="header_container">
          <div className="logo">
            <img
              src={logo}
              className="logo_img"
              alt="Logo da empresa, sendo uma casa com formatos retangulares e
               triangulares semelhante ao simbulo de reciclagem, em tons de verde."
            />
            <p className="logo_title">ConstruAlto</p>
          </div>
          <ul className="menu-nav">
            <Link className="menu_nav_link" to="/">
              <li>Principal</li>
            </Link>
            <Link className="menu_nav_link" to="/contact-us">
              <li>Contate-nos</li>
            </Link>
          </ul>
        </div>
      </Container>
    </header>
  );
}

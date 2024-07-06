import {
  Button,
  CardList,
  Container,
  Footer,
  Header,
  Slider,
} from "../../component";
import ilustation from "../../../assets/ilustation.png";
import { useNavigate } from "react-router-dom";
import { sliderData } from "../../../data/slider-data";
import { PropertiesForSale } from "../../../data/PropertiesForSale";
import "./home.css";

export function HomePageScreen() {
  const navigator = useNavigate();

  function navigationToContact() {
    navigator("/contact-us");
  }

  return (
    <>
      <Header />
      <Container>
        <div className="customer-acquisition">
          <div className="customer-acquisition_text">
            <h1 className="customer-acquisition_text_title">
              Encontre o imóvel que cabe no seu bolso
            </h1>
            <p className="customer-acquisition_text_description">
              Temos desde terrenos até prédios comerciais. Converse com nosso
              consultor para mais informações.
            </p>
            <Button text="Contate-nos" callback={navigationToContact} />
          </div>
          <img
            src={ilustation}
            className="customer-acquisition_img"
            alt="Imagem de uma casa com placa de venda em tons de verde claro"
          />
        </div>
      </Container>
      <Slider sliderList={sliderData} />
      <CardList list={PropertiesForSale} />
      <Footer />
    </>
  );
}

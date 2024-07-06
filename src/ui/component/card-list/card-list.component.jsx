import { Card } from "../card/card.component";
import { Container } from "../container/conteiner.component";
import "./card-list.css";

export function CardList({ list }) {
  return (
    <div className="background-color">
      <Container className="position">
        <h2 className="card-list_title title-h2">Confira nossas</h2>
        <h1 className="card-list_title title-h1">Oportunidades</h1>
        <div className="box-list">
          {list.map((propertie, Index) => (
            <Card
              key={Index}
              description={propertie.description}
              localization={propertie.localization}
              price={propertie.price}
              isActive={propertie.isActive}
              img={process.env.PUBLIC_URL + `slider/img1.jpg`}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

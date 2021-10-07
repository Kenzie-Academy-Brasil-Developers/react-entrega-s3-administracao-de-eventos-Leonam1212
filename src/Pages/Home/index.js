import { Container, Content, Background, Header } from "./style";
import Beer from "./../../assets/—Pngtree—summer summer beer_4695539.png";
import { Link } from "react-router-dom";
import Button from "./../../Components/Button";
const Home = () => {
  return (
    <Container>
      <Header>
        <h3>Frontier Drinks</h3>
      </Header>
      <Content>
        <div>
          <h1>
            Bebidas <br /> Artesanais
          </h1>
          <p>
            Lorem ipsum dolor sit amet. Et nostrum nisi et consequuntur libero
            vel doloribus ipsum. Nam magni voluptas aut tempora internos et
            exercitationem dolores. Vel unde sequi eos libero galisum ut ipsam
            dolore nam corrupti harum non laborum sint non facilis omnis et
            blanditiis neque. Sit facere nihil ut error perspiciatis et quas
            expedita. 33 magnam sunt
          </p>
          <Link to="/drinks">
            <Button blackSchema>Bebidas</Button>
          </Link>
        </div>
        <Background>
          <img src={Beer} alt="beer" />
        </Background>
      </Content>
    </Container>
  );
};
export default Home;

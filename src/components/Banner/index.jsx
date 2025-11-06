import { Container, Image, Title, Description, SubContainer } from "./styles.js";
import Button from "../Button";

const Banner = () => {
  return <Container>
    <SubContainer>
    <Title>
      Onde o abandono
termina e o amor
recomeça.
    </Title>
    <Description>Resgatar é apenas o primeiro passo. Nosso trabalho diário envolve alimentar, medicar e socializar centenas de cães para que eles estejam prontos para um novo começo. Seja o pilar que sustenta essa missão.</Description>
<Button title="Quero ajudar"/>
    </SubContainer>
  </Container>
}

export default Banner;
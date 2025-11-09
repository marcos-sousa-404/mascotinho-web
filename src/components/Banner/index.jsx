import {Container, Description, LeftContainer, Title} from "./styles.js";
import Button from "../Button";

const Banner = () => {
    return (<Container>
        <LeftContainer>
            <Title>
                Onde o abandono
                termina e o amor
                recomeça.
            </Title>
            <Description>Resgatar é apenas o primeiro passo. Nosso trabalho diário envolve alimentar, medicar e
                socializar centenas de cães para que eles estejam prontos para um novo começo. Seja o pilar que sustenta
                essa missão.</Description>
            <Button>
                Quero ajudar
            </Button>
        </LeftContainer>
    </Container>)
}

export default Banner;
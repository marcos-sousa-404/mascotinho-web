import {
  Container,
  Title,
  ButtonsContainer,
  SecondaryTitle,
  Subtitle,
  ContentCard,
} from './styles';
import { Button } from '../../../../components';
import VakinhaIcon from '../../../../assets/icons/vakinha.svg';
import WhatsappIcon from '../../../../assets/icons/whatsapp.svg';

const FooterBanner = () => {
  return (
    <Container>
      <ContentCard>
        <Title>Obrigado por ajudar!</Title>
        <Subtitle>
          Sua contribuição faz a diferença na vida dos nossos animais. Quer apoiar de outra forma?
          Veja abaixo:
        </Subtitle>
        <SecondaryTitle>Outras formas de doar</SecondaryTitle>
        <ButtonsContainer>
          <Button
            iconSize={24}
            href={
              'https://www.vakinha.com.br/vaquinha/vamos-construir-a-sede-propria-do-abrigo-mascotinho'
            }
            Icon={VakinhaIcon}
          >
            Doar na vakinha
          </Button>
          <Button
            href={'https://wa.me/5585981727044?text=Oi,%20quero%20doar%20ração'}
            type={'white'}
            Icon={WhatsappIcon}
          >
            Doar ração
          </Button>
        </ButtonsContainer>
      </ContentCard>
    </Container>
  );
};

export default FooterBanner;

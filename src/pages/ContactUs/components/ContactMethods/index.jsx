import { CardsContainer, SectionContainer, IconCardWithButton } from './styles';
import InstagramIcon from '../../../../assets/icons/instagram.svg';
import WhatsappIcon from '../../../../assets/icons/whatsapp-big.svg';
import FacebookIcon from '../../../../assets/icons/facebook.svg';

const ContactMethods = () => {
  return (
    <SectionContainer>
      <CardsContainer>
        <IconCardWithButton
          Icon={InstagramIcon}
          title={'Adote um amigo'}
          description={
            'Acompanhe nosso dia a dia e nossos resgates. Siga no Instagram e ajude a divulgar nossos peludos e o trabalho do abrigo para mais pessoas.'
          }
          cta={'Seguir'}
        />
        <IconCardWithButton
          Icon={WhatsappIcon}
          title={'Faça uma doação'}
          description={
            'Fale com a gente pelo WhatsApp! Tire dúvidas sobre doações ou adoções e receba um atendimento  acolhedor, direto com nosso time do abrigo.'
          }
          cta={'Seguir'}
        />
        <IconCardWithButton
          Icon={FacebookIcon}
          title={'Nos siga'}
          description={
            'Veja notícias, campanhas de arrecadação e acompanhe todas as conquistas do abrigo! Curta e compartilhe nossa página no Facebook para fazer parte dessa rede do bem.'
          }
          cta={'Seguir'}
        />
      </CardsContainer>
    </SectionContainer>
  );
};

export default ContactMethods;

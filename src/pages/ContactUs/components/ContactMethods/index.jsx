import { CardsContainer, SectionContainer, UnderlinedTitle, IconCardWithButton } from './styles';
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
            'Acolhemos animais que sofreram com o abandono e maus-tratos. Ao adotar, você oferece um lar cheio de amor e carinho, e ajuda a transformar uma vida. Preencha o formulário e faça a diferença.'
          }
          cta={'Seguir'}
        />
        <IconCardWithButton
          Icon={WhatsappIcon}
          title={'Faça uma doação'}
          description={
            'Manter um abrigo é um grande desafio. Ração, medicamentos, vacinas, e  cuidados veterinários são essenciais para o bem-estar dos nossos animais. Sua doação, de qualquer valor, nos ajuda a continuar salvando e protegendo quem mais precisa.'
          }
          cta={'Seguir'}
        />
        <IconCardWithButton
          Icon={FacebookIcon}
          title={'Nos siga'}
          description={
            'Nossas redes sociais são a melhor forma de acompanhar o trabalho do abrigo, ver as histórias de resgate e adoção, e ficar por dentro dos nossos eventos. Siga-nos para compartilhar nossa missão e espalhar a causa da proteção animal.'
          }
          cta={'Seguir'}
        />
      </CardsContainer>
    </SectionContainer>
  );
};

export default ContactMethods;

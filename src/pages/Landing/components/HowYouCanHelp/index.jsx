import { CardsContainer, SectionContainer, UnderlinedTitle, IconCardWithButton } from './styles';
import AdoptIcon from '../../../../assets/icons/adopt.svg';
import DonateIcon from '../../../../assets/icons/donate.svg';
import FollowUsIcon from '../../../../assets/icons/follow-us.svg';

const HowYouCanHelp = () => {
  return (
    <SectionContainer>
      <UnderlinedTitle>Como você pode ajudar</UnderlinedTitle>
      <CardsContainer>
        <IconCardWithButton
          Icon={AdoptIcon}
          title={'Adote um amigo'}
          description={
            'Acolhemos animais que sofreram com o abandono e maus-tratos. Ao adotar, você oferece um lar cheio de amor e carinho, e ajuda a transformar uma vida. Preencha o formulário e faça a diferença.'
          }
          cta={'Quero adotar'}
        />
        <IconCardWithButton
          Icon={DonateIcon}
          title={'Faça uma doação'}
          description={
            'Manter um abrigo é um grande desafio. Ração, medicamentos, vacinas, e  cuidados veterinários são essenciais para o bem-estar dos nossos animais. Sua doação, de qualquer valor, nos ajuda a continuar salvando e protegendo quem mais precisa.'
          }
          cta={'Quero ajudar'}
        />
        <IconCardWithButton
          Icon={FollowUsIcon}
          title={'Nos siga'}
          description={
            'Nossas redes sociais são a melhor forma de acompanhar o trabalho do abrigo, ver as histórias de resgate e adoção, e ficar por dentro dos nossos eventos. Siga-nos para compartilhar nossa missão e espalhar a causa da proteção animal.'
          }
          cta={'Quero seguir'}
        />
      </CardsContainer>
    </SectionContainer>
  );
};

export default HowYouCanHelp;

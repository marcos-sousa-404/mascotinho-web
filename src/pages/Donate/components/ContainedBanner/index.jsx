import Hero from '../../../../assets/images/donate-hero.png';
import { BannerContainer, ContainedBanner as ContainedBannerBase } from './styles';

const ContainedBanner = () => {
  return (
    <BannerContainer>
      {' '}
      <ContainedBannerBase
        imageUrl={Hero}
        title={'Seja um doador'}
        description={
          'Ajude nossos cães a terem uma vida melhor. Sua doação oferece comida, cuidados e abrigo para animais que precisam de um lar seguro. Contribua e faça parte deste gesto de amor.'
        }
      />{' '}
    </BannerContainer>
  );
};

export default ContainedBanner;

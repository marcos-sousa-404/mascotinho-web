import HeroSm from '../../../../assets/images/donate-hero/donate-hero-sm.png';
import HeroMd from '../../../../assets/images/donate-hero/donate-hero-md.png';
import HeroLg from '../../../../assets/images/donate-hero/donate-hero-lg.png';
import { BannerContainer, ContainedBanner as ContainedBannerBase } from './styles';

const ContainedBanner = () => {
  return (
    <BannerContainer>
      <ContainedBannerBase
        imageUrlMap={{ sm: HeroSm, md: HeroMd, lg: HeroLg }}
        title={'Seja um doador'}
        description={
          'Ajude nossos cães a terem uma vida melhor. Sua doação oferece comida, cuidados e abrigo para animais que precisam de um lar seguro. Contribua e faça parte deste gesto de amor.'
        }
      />
    </BannerContainer>
  );
};

export default ContainedBanner;

import { Banner as BannerBase } from '../../../../components';
import HeroSm from '../../../../assets/images/landing-hero/landing-hero-sm.png';
import HeroMd from '../../../../assets/images/landing-hero/landing-hero-md.png';
import HeroLg from '../../../../assets/images/landing-hero/landing-hero-lg.png';

const Banner = () => {
  return (
    <BannerBase
      title="Onde o abandono termina e o amor recomeça."
      description="Resgatar é apenas o primeiro passo. Nosso trabalho diário envolve alimentar, medicar e
          socializar centenas de cães para que eles estejam prontos para um novo começo. Seja o
          pilar que sustenta essa missão."
      buttonText={'Quero ajudar'}
      imageUrlMap={{ sm: HeroSm, md: HeroMd, lg: HeroLg }}
      href={'#how-you-can-help'}
    />
  );
};

export default Banner;

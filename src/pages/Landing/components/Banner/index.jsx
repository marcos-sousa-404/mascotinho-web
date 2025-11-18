import { Banner as BannerBase } from '../../../../components';
import Hero from '../../../../assets/images/landing-hero.png';

const Banner = () => {
  return (
    <BannerBase
      title="Onde o abandono termina e o amor recomeça."
      description="Resgatar é apenas o primeiro passo. Nosso trabalho diário envolve alimentar, medicar e
          socializar centenas de cães para que eles estejam prontos para um novo começo. Seja o
          pilar que sustenta essa missão."
      buttonText={'Quero ajudar'}
      imageUrl={Hero}
    />
  );
};

export default Banner;

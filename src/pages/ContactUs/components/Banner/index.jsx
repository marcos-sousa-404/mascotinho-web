import { Banner as BannerBase } from '../../../../components';
import Hero from '../../../../assets/images/contact-us-hero.png';

const Banner = () => {
  return (
    <BannerBase
      title="Entre em Contato"
      description="Os animais precisam da nossa voz! Ajude a transformar a vida de muitos bichinhos que hoje esperam por cuidado, carinho e um lar. Cada gesto de apoio faz a diferença — seja compartilhando, doando ou adotando. Juntos podemos dar a eles o amor que merecem!"
      imageUrl={Hero}
    />
  );
};

export default Banner;

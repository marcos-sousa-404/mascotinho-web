import { Banner as BannerBase } from '../../../../components';
import HeroSm from '../../../../assets/images/contact-us-hero/contact-us-hero-sm.png';
import HeroMd from '../../../../assets/images/contact-us-hero/contact-us-hero-md.png';
import HeroLg from '../../../../assets/images/contact-us-hero/contact-us-hero-lg.png';

const Banner = () => {
  return (
    <BannerBase
      title="Entre em Contato"
      description="Os animais precisam da nossa voz! Ajude a transformar a vida de muitos bichinhos que hoje esperam por cuidado, carinho e um lar. Cada gesto de apoio faz a diferença — seja compartilhando, doando ou adotando. Juntos podemos dar a eles o amor que merecem!"
      imageUrlMap={{ sm: HeroSm, md: HeroMd, lg: HeroLg }}
    />
  );
};

export default Banner;

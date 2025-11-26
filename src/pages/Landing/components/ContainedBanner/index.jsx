import { ContainedBanner as ContainedBannerBase } from './styles';
import ContainedBannerImageSm from '../../../../assets/images/landing-contained-banner/landing-contained-banner-sm.jpg';
import ContainedBannerImageMd from '../../../../assets/images/landing-contained-banner/landing-contained-banner-md.jpg';
import ContainedBannerImageLg from '../../../../assets/images/landing-contained-banner/landing-contained-banner-lg.jpg';

const ContainedBanner = () => (
  <ContainedBannerBase
    title="Fale conosco"
    description="Seja para adotar, doar ou se
voluntariar, estamos aqui para
responder suas perguntas.Fale conosco pelo WhatsApp e comece sua jornada para transformar uma vida!"
    cta="Enviar mensagem"
    imageUrlMap={{
      sm: ContainedBannerImageSm,
      md: ContainedBannerImageMd,
      lg: ContainedBannerImageLg,
    }}
    href={'https://wa.me/5585981727044?text=Oi'}
  />
);

export default ContainedBanner;

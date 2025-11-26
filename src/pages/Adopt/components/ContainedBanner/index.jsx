import { ContainedBanner as ContainedBannerBase } from './styles';
import HeroSm from '../../../../assets/images/adopt-hero/adopt-hero-sm.jpg';
import HeroMd from '../../../../assets/images/adopt-hero/adopt-hero-md.jpg';
import HeroLg from '../../../../assets/images/adopt-hero/adopt-hero-lg.jpg';

const ContainedBanner = () => {
  return (
    <ContainedBannerBase
      title={'Adote um amigo'}
      description={
        'Adotar um pet é muito mais do que dar um lar: é transformar vidas com carinho, segurança e uma nova chance de felicidade. Venha fazer parte dessa história!'
      }
      imageUrlMap={{ sm: HeroSm, md: HeroMd, lg: HeroLg }}
    />
  );
};

export default ContainedBanner;

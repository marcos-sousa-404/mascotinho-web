import { ContainedBanner as ContainedBannerBase } from './styles';
import Hero from '../../../../assets/images/adopt-hero.jpg';

const ContainedBanner = () => {
  return (
    <ContainedBannerBase
      title={'Adote um amigo'}
      description={
        'Adotar um pet é muito mais do que dar um lar: é transformar vidas com carinho, segurança e uma nova chance de felicidade. Venha fazer parte dessa história!'
      }
      imageUrl={Hero}
    />
  );
};

export default ContainedBanner;

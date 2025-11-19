import Hero from '../../../../assets/images/donate-hero.png';
import { BannerContainer, ContainedBanner as ContainedBannerBase } from './styles';

const ContainedBanner = () => {
  return <BannerContainer> <ContainedBannerBase imageUrl={Hero} title={'Seja um doador'} /> </BannerContainer>;
};

export default ContainedBanner;
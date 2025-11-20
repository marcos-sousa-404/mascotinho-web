import { Footer, Header } from '../../components';
import { ContainedBanner, OtherDonationMethods, PixSection } from './components';
import FooterBanner from './components/FooterBanner';

const Donate = () => {
  return (
    <>
      <Header />
      <ContainedBanner />
      <PixSection />
      <FooterBanner />
      <Footer />
    </>
  );
};

export default Donate;

import { Footer, Header } from '../../components';
import { ContainedBanner, PixSection } from './components';
import FooterBanner from './components/FooterBanner';
import { MainContainer } from './styles';

const Donate = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <ContainedBanner />
        <PixSection />
      </MainContainer>
      <FooterBanner />
      <Footer />
    </>
  );
};

export default Donate;

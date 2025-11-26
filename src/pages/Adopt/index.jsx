import { Footer, Header } from '../../components';
import { AdoptForm, ContainedBanner } from './components';
import { MainContainer } from './styles';

const Adopt = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <ContainedBanner />
        <AdoptForm />
      </MainContainer>
      <Footer />
    </>
  );
};

export default Adopt;

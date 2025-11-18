import React from 'react';
import { Footer, Header } from '../../components';
import { ContainedBanner, HowYouCanHelp, OurStory, Banner } from './components';
import { MainContainer } from './styles';

const Landing = () => {
  return (
    <>
      <Header />
      <Banner />
      <MainContainer>
        <OurStory />
        <HowYouCanHelp />
        <ContainedBanner />
      </MainContainer>
      <Footer />
    </>
  );
};

export default Landing;

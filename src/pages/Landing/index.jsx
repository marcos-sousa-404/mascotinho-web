import React from 'react';
import { Banner, Footer, Header } from '../../components';
import { ContainedBanner, HowYouCanHelp, OurStory } from './components';
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

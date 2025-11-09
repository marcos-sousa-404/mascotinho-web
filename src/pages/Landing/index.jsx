import React from "react";
import {Header, Banner, Footer} from "../../components";
import {OurStory, ContainedBanner} from "./components"
import HowYouCanHelp from "./components/HowYouCanHelp";

class Landing extends React.Component {
  render() {
    return (
      <>
        <Header/>
        <Banner/>
        <OurStory/>
        <HowYouCanHelp/>
        <ContainedBanner/>
        <Footer/>
      </>
    );
  }
}

export default Landing;

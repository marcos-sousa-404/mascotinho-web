import React from "react";
import {Header, Banner} from "../../components";
import {OurStory} from "./components"
import HowYouCanHelp from "./components/HowYouCanHelp";

class Landing extends React.Component {
  render() {
    return (
      <>
        <Header/>
        <Banner/>
        <OurStory/>
          <HowYouCanHelp/>
      </>
    );
  }
}

export default Landing;

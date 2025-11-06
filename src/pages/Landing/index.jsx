import React from "react";
import {Header, Banner} from "../../components";
import {OurStory} from "./components"

class Landing extends React.Component {
  render() {
    return (
      <>
        <Header/>
        <Banner/>
        <OurStory/>
      </>
    );
  }
}

export default Landing;

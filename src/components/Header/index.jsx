
import React from "react";
import { HeaderContainer, Image, ButtonsContainer } from "./styles.js";
import Button from "../Button";
import Logo from "../../assets/images/logo.svg"

class Header extends React.Component {
  render() {
    return (
      <>
        <HeaderContainer>
          <Logo/>
          
          <ButtonsContainer>
            <Button title="Fale conosco" outlined/>
            <Button title="Faça uma doação"/>
          </ButtonsContainer>
        </HeaderContainer>
      </>
    );
  }
}

export default Header;

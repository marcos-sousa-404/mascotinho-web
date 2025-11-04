
import { HeaderContainer, Image, ButtonsContainer } from "./styles.js";
import Button from "../Button";
import Logo from "../../assets/images/logo.svg"
import WhatsappIcon from "../../assets/icons/whatsapp.svg"

const Header = () => {
    return (
      <>
        <HeaderContainer>
          <Logo/>
          
          <ButtonsContainer>
            <Button Icon={WhatsappIcon} title="Fale conosco" outlined/>
            <Button title="Faça uma doação"/>
          </ButtonsContainer>
        </HeaderContainer>
      </>
    );
  }

export default Header;

import {ButtonsContainer, HeaderContainer} from "./styles.js";
import Button from "../Button";
import Logo from "../../assets/images/logo.svg"
import WhatsappIcon from "../../assets/icons/whatsapp.svg"

const Header = () => {
    return (
        <>
            <HeaderContainer>
                <Logo onClick={() => document.documentElement.requestFullscreen()}/>
                <ButtonsContainer>
                    <Button Icon={WhatsappIcon} type="outlined">
                        Fale conosco
                    </Button>
                    <Button>
                        Faça uma doação
                    </Button>
                </ButtonsContainer>
            </HeaderContainer>
        </>
    );
}

export default Header;

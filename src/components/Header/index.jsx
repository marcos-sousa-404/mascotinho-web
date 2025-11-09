import { ButtonsContainer, HeaderContainer, Logo } from './styles.js';
import Button from '../Button';
import WhatsappIcon from '../../assets/icons/whatsapp.svg';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <ButtonsContainer>
        <Button Icon={WhatsappIcon} type="outlined">
          Fale conosco
        </Button>
        <Button>Faça uma doação</Button>
      </ButtonsContainer>
    </HeaderContainer>
  );
};

export default Header;

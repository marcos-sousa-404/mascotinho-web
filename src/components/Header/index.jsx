import { ButtonsContainer, HeaderContainer, Logo } from './styles.js';
import Button from '../Button';
import WhatsappIcon from '../../assets/icons/whatsapp.svg';

const Header = () => {
  const path = document.location.pathname;

  const shouldDisplayDonate = path !== '/donate';

  const handleLogoClick = () => (document.location.href = '/');

  return (
    <HeaderContainer>
      <Logo onClick={handleLogoClick} />
      <ButtonsContainer>
        {shouldDisplayDonate && <Button href={'/donate'}>Faça uma doação</Button>}
        <Button
          href={'https://wa.me/5585981727044?text=Oi'}
          Icon={WhatsappIcon}
          type={shouldDisplayDonate ? 'outlined' : 'filled'}
        >
          Fale conosco
        </Button>
      </ButtonsContainer>
    </HeaderContainer>
  );
};

export default Header;

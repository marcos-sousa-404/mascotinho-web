import { useState } from 'react';
import {
  Backdrop,
  ButtonsContainer,
  CloseIcon,
  DrawerFooter,
  DrawerLink,
  GoBackIcon,
  HamburgerMenuIcon,
  HeaderContainer,
  HeaderLeftContainer,
  Logo,
  MobileDrawer,
  MobileMenuButton,
  NavLink,
  NavLinks,
} from './styles.js';
import Button from '../Button';
import WhatsappIcon from '../../assets/icons/whatsapp.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = document.location.pathname;

  const canGoBack = document.location.pathname !== '/';
  const handleGoToHome = () => (document.location.href = '/');

  const handleToggleDrawer = () => setIsOpen((prev) => !prev);
  const handleCloseDrawer = () => setIsOpen(false);

  return (
    <HeaderContainer>
      <HeaderLeftContainer onClick={handleGoToHome}>
        {canGoBack && <GoBackIcon />}
        <Logo />
      </HeaderLeftContainer>

      <NavLinks>
        <NavLink href="/">Início</NavLink>
        <NavLink href="/adopt">Adote um amigo</NavLink>
        <NavLink href="/donate">Faça uma doação</NavLink>
        <NavLink href="/contact-us">Nos siga</NavLink>
      </NavLinks>

      <ButtonsContainer>
        <ContactUsOnWhatsappButton />
      </ButtonsContainer>

      <MobileMenuButton onClick={handleToggleDrawer}>
        <HamburgerMenuIcon />
      </MobileMenuButton>

      {isOpen && (
        <>
          <Backdrop onClick={handleCloseDrawer} />
          <MobileDrawer>
            <CloseIcon onClick={handleCloseDrawer} />
            <DrawerLink href="/">Início</DrawerLink>
            <DrawerLink href="/adopt">Adote um amigo</DrawerLink>
            <DrawerLink href="/donate">Faça uma doação</DrawerLink>
            <DrawerLink href="/contact-us">Nos siga</DrawerLink>

            <DrawerFooter>
              <ContactUsOnWhatsappButton />
            </DrawerFooter>
          </MobileDrawer>
        </>
      )}
    </HeaderContainer>
  );
};

export default Header;

const ContactUsOnWhatsappButton = () => (
  <Button href={'https://wa.me/5585981727044?text=Oi'} Icon={WhatsappIcon} type="filled">
    Fale conosco
  </Button>
);

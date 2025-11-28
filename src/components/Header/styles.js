import styled, { keyframes } from 'styled-components';
import { breakpoints, margin, padding, palette, shadow } from '../../theme';
import LogoBase from '../../assets/images/logo.svg';
import CloseIconBase from '../../assets/icons/close.svg';
import GoBackIconBase from '../../assets/icons/go-back.svg';
import HamburgerMenuIconBase from '../../assets/icons/hamburger-menu.svg';

const slideInRight = keyframes`
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0);
    }
`;

export const HeaderContainer = styled.div`
  display: flex;
  height: 10rem;
  background-color: ${palette.background};
  box-shadow: ${shadow.lg};
  padding: 3rem;
  justify-content: space-between;
  align-items: center;
  position: relative;
  gap: 2rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.8rem;

  @media (max-width: ${breakpoints.md}) {
    display: none;
  }
`;

const getActiveLinkStyle = (href) => {
  const isActive = document.location.pathname === href;

  if (isActive) {
    return `
            color: ${palette.primary};
            font-weight: 700;
          `;
  }

  return `
         color: ${palette.textSecondary};
         font-weight: 600;
         `;
};

export const NavLinks = styled.nav`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex: 1;
  justify-content: center;

  @media (max-width: ${breakpoints.md}) {
    display: none;
  }

  & :not(:last-child) {
    border-right: ${palette.cardBorder} 1px solid;
    padding-right: ${padding.sm};
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  font-size: 1.6rem;
  ${({ href }) => getActiveLinkStyle(href)}
  transition: color 0.2s ease;
  white-space: nowrap;

  &:hover {
    color: ${palette.primary};
  }
`;

export const Logo = styled(LogoBase)`
  height: 7rem;
`;

export const CloseIcon = styled(CloseIconBase)`
  width: 2.5rem;
  margin-left: auto;
  color: ${palette.textDark};
`;

export const HamburgerMenuIcon = styled(HamburgerMenuIconBase)`
  width: 3rem;
  height: 3rem;
  margin-left: auto;
  color: ${palette.primary};
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 2.4rem;
  cursor: pointer;

  @media (max-width: ${breakpoints.md}) {
    display: flex;
    align-items: center;
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
`;

export const GoBackIcon = styled(GoBackIconBase)`
  color: ${palette.primary};
  width: 3rem;
  cursor: pointer;
  height: 3rem;
`;

export const HeaderLeftContainer = styled.div`
  display: flex;
  gap: ${margin.sm};
  align-items: center;
`;

export const MobileDrawer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 70vw;
  max-width: 280px;
  background-color: ${palette.background};
  box-shadow: ${shadow.lg};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  z-index: 999;
  animation: ${slideInRight} 0.25s ease-out;

  @media (min-width: ${breakpoints.md}) {
    display: none;
  }
`;

export const DrawerLink = styled.a`
  text-decoration: none;
  ${({ href }) => getActiveLinkStyle(href)}
  font-size: 1.6rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid ${palette.cardBorder};
  display: flex;
  align-items: center;
  gap: 0.8rem;

  &:hover {
    color: ${palette.primary};
  }

  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

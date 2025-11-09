import styled from 'styled-components';
import { palette, shadow, borderRadius, breakpoints } from '../../theme';

export const Container = styled.button`
  display: flex;
  height: 5rem;
  min-width: 20rem;
  gap: 0.5rem;
  ${({ type }) => getTypeDependentStyling(type)}
  box-shadow: ${shadow.sm};
  padding: 2px;
  font-weight: 700;
  align-items: center;
  justify-content: center;
  border-radius: ${borderRadius.full};
  font-size: 1.6rem;

  transition: all 0.2s;
  cursor: pointer;

  &:hover,
  &:active {
    filter: brightness(1.3);
    transform: scale(1.02);
  }

  @media (max-width: ${breakpoints.lg}) {
    height: 4.5rem;
  }
`;

const getTypeDependentStyling = (type) => {
  switch (type) {
    case 'outlined': {
      return `
        border: 2px solid ${palette.primary};
        color: ${palette.primary};
        background-color: transparent;
      `;
    }
    case 'white': {
      return `
        border: none;
        background-color: white;
        color: ${palette.textDark};
      `;
    }
    case 'primary':
    default: {
      return `
        border: none;
        background-color: ${palette.primary};
        color: ${palette.textLight};
      `;
    }
  }
};

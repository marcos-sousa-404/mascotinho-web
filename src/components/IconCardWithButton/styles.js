import styled from 'styled-components';
import { fontSize, margin, padding, shadow, borderRadius, breakpoints } from '../../theme';
import ButtonBase from '../Button';
import CardBase from '../Card';

export const Card = styled(CardBase)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${margin.md};
`;

export const Title = styled.h3`
  font-size: ${fontSize.md};
`;

export const Description = styled.p`
  font-size: ${fontSize.sm};
  text-align: justify;

  @media (max-width: ${breakpoints.lg}) {
    font-size: ${fontSize.sm};
  }
`;

export const Button = styled(ButtonBase)`
  align-self: flex-end;
  margin-top: auto;
`;

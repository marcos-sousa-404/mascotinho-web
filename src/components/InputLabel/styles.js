import styled from 'styled-components';
import { breakpoints, fontSize, margin, palette } from '../../theme';

export const Label = styled.label`
  display: flex;
  gap: ${margin.sm};
  font-size: ${fontSize.md};

  @media (max-width: ${breakpoints.sm}) {
    font-size: ${fontSize.sm};
  }
`;

export const IconContainer = styled.div``;

export const Text = styled.span`
  font-weight: 600;
`;

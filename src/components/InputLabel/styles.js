import styled from 'styled-components';
import { fontSize, margin, palette } from '../../theme';

export const Label = styled.label`
  display: flex;
  gap: ${margin.sm};
  font-size: ${fontSize.md};
`;

export const IconContainer = styled.div``;

export const Text = styled.span`
  font-weight: 600;
`;

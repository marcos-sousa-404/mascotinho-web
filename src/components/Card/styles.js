import styled from 'styled-components';
import { borderRadius, margin, padding, palette, shadow } from '../../theme';

export const Card = styled.div`
  width: 100%;
  background-color: white;
  box-shadow: ${shadow.md};
  padding: ${padding.md};
  border-radius: ${borderRadius.lg};
`;

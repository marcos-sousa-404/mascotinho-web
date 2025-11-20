import styled from 'styled-components';
import { fontSize } from '../../theme';

export const UnderlinedTitle = styled.h2`
  font-size: ${fontSize.lg};
  border-bottom: 2px solid currentColor;
  width: fit-content;
  margin-bottom: 0.5rem;
  text-align: ${({ align }) => align};
`;

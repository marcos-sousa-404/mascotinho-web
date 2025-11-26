import styled from 'styled-components';
import { breakpoints, fontSize, palette } from '../../theme';

export const Subtitle = styled.h6`
  font-size: ${fontSize.md};
  font-weight: 500;
  color: ${palette.textSecondary};

  @media (max-width: ${breakpoints.sm}) {
    font-size: ${fontSize.sm};
  }
`;

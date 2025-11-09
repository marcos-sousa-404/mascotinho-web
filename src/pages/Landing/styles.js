import styled from 'styled-components';
import { breakpoints } from '../../theme';

export const MainContainer = styled.div`
  margin: 0 auto;
  max-width: 130rem;

  @media (max-width: ${breakpoints.lg}) {
    width: 100%;
  }
`;

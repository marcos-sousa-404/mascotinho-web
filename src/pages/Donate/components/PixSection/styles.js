import styled from 'styled-components';
import { breakpoints, margin, padding } from '../../../../theme';

export const MainContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${padding.md} 0;
`;

export const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${margin.md};
  margin-top: ${margin.lg};
  padding: 0 ${padding.md};
  margin-bottom: ${margin.xl};
  justify-content: center;

  @media (max-width: ${breakpoints.lg}) {
    align-items: stretch;
  }

  @media (max-width: ${breakpoints.md}) {
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
`;

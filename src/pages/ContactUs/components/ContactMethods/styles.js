import styled from 'styled-components';
import { breakpoints, margin, padding } from '../../../../theme';
import IconCardWithButtonBase from '../../../../components/IconCardWithButton';

export const SectionContainer = styled.section`
  padding: 0 ${padding.xl};
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${margin.lg};
  margin: ${margin.xxxl} 0;
  justify-content: center;
`;

export const IconCardWithButton = styled(IconCardWithButtonBase)`
  max-width: 37.5rem;
  @media (max-width: ${breakpoints.lg}) {
    max-width: 30rem;
  }

  @media (max-width: ${breakpoints.sm}) {
    max-width: 35rem;
  }
`;

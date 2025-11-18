import styled from 'styled-components';
import { breakpoints, margin, padding } from '../../../../theme';
import { UnderlinedTitle as UnderlinedTitleBase } from '../../../../components';
import IconCardWithButtonBase from '../../../../components/IconCardWithButton';

export const SectionContainer = styled.section`
  padding: 0 ${padding.xl};
  padding-top: ${padding.xl};
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${margin.lg};
  margin-top: ${margin.lg};
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

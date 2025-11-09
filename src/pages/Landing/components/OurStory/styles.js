import styled from 'styled-components';
import { fontSize, margin, padding, shadow, borderRadius, breakpoints } from '../../../../theme';

export const SectionContainer = styled.section`
  padding: 0 ${padding.xl};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${breakpoints.lg}) {
    gap: ${margin.xl};
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${margin.xl};

  ${({ reverse }) => {
    return `flex-direction: ${reverse ? 'row-reverse' : 'row'}`;
  }};

  @media (max-width: ${breakpoints.lg}) {
    flex-direction: column-reverse;
    gap: ${margin.sm};
  }
`;

export const Image = styled.img`
  border-radius: ${borderRadius.lg};
  box-shadow: ${shadow.md};
  height: 30rem;
  margin: 0 auto;

  @media (max-width: ${breakpoints.lg}) {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 25rem;
    object-fit: contain;
  }
`;

export const TextContainer = styled.div`
  width: 50%;
  @media (max-width: ${breakpoints.lg}) {
    width: 100%;
  }
`;

export const Description = styled.p`
  font-size: ${fontSize.sm};
`;

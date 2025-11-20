import styled from 'styled-components';
import { palette, fontSize, padding, margin, shadow, breakpoints } from '../../theme';

export const Container = styled.section`
  height: 82.5vh;
  width: 100%;
  background:
    linear-gradient(to top right, ${palette.primaryDark}66, ${palette.primaryDark}66),
    url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  padding: ${padding.xl};
  box-shadow: ${shadow.lg};
  margin-bottom: ${margin.xl};
`;

export const Title = styled.h1`
  font-size: ${fontSize.xxxl};
  line-height: 1;

  @media (max-width: ${breakpoints.lg}) {
    font-size: ${fontSize.xxl};
  }

  @media (max-width: ${breakpoints.sm}) {
    font-size: ${fontSize.xl};
  }
`;

export const Description = styled.p`
  font-size: ${fontSize.md};
  @media (max-width: ${breakpoints.sm}) {
    font-size: ${fontSize.sm};
  }
`;

export const LeftContainer = styled.div`
  color: ${palette.textLight};
  max-width: 50%;

  @media (max-width: ${breakpoints.lg}) {
    max-width: 75%;
  }

  @media (max-width: ${breakpoints.sm}) {
    max-width: 100%;
  }

  display: flex;
  flex-direction: column;
  gap: ${margin.md};
  align-items: start;
`;

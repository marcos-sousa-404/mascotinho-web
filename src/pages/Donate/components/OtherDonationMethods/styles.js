import styled from 'styled-components';
import { fontSize, margin } from '../../../../theme';

export const Title = styled.h5`
  font-size: ${fontSize.xl};
    font-weight: 600;
`;

export const Subtitle = styled.h6`
    font-size: ${fontSize.lg};
  margin-bottom: ${margin.md};
    font-weight: 500;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    gap: ${margin.sm};
`;

export const MainContainer = styled.section`
    width: 100%;
    height: 40rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
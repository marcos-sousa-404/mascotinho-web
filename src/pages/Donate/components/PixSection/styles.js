import styled from "styled-components";
import { UnderlinedTitle as UnderlinedTitleBase } from '../../../../components';
import { fontSize, margin, padding, shadow } from '../../../../theme';

export const UnderlinedTitle = styled(UnderlinedTitleBase)`
  font-size: ${fontSize.xxl}
`

export const MainContainer = styled.section`
    width: 100%;
    height: 75rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: ${shadow.hardLg};
    padding: ${padding.md};
`

export const CardsContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${margin.md};
    margin-top: ${margin.lg};
`
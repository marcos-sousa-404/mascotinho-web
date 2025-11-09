import styled from "styled-components";
import {margin, padding} from "../../../../theme";
import {UnderlinedTitle as UnderlinedTitleBase} from "../../../../components";

export const SectionContainer = styled.section`
    padding: 0 ${padding.xl};
    padding-top: ${padding.xl};
`

export const UnderlinedTitle = styled(UnderlinedTitleBase)`
    display: block;
    margin: 0 auto;
`

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
grid-column-gap: ${margin.lg};
    margin-top: ${margin.lg};
`
import styled from "styled-components";
import {fontSize, margin, padding, shadow} from "../../../../theme";

export const SectionContainer = styled.section`
    padding: 0 ${padding.xl};
`

export const StoryItem = styled.div`
    height: 50vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${margin.xl};
    
    ${({reverse}) => {
        return `flex-direction: ${reverse ? "row-reverse" : "row"};`
    }}
`;

export const StoryItemImage = styled.img`
    border-radius: 3rem;
    box-shadow: ${shadow.md};
    height: 90%;
    margin: 0 auto;
`;

export const StoryItemTextContainer = styled.div`
    width: 50%;
`;

export const StoryItemDescription = styled.p`
    font-size: ${fontSize.sm};
`;


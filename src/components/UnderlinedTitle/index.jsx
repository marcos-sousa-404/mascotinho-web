import styled from "styled-components";
import {fontSize} from "../../theme";

const UnderlinedTitle = styled.h2`
    font-size: ${fontSize.lg};
    border-bottom: 2px solid black;
    width: fit-content;
    margin-bottom: 0.5rem;
`;

export default UnderlinedTitle;
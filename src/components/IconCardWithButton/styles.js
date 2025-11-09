import styled from "styled-components";
import {fontSize, margin, padding, shadow, } from "../../theme";
import ButtonBase from "../Button";

export const Card = styled.div`
    width: 100%;
    background-color: white;
    box-shadow: ${shadow.md};
    padding: ${padding.md};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${margin.md};
    border-radius: 2rem;
`;

export const Title = styled.h3`
    font-size: ${fontSize.md};
`;

export const Description = styled.p`
    font-size: ${fontSize.sm};
`;

export const Button = styled(ButtonBase)`
    align-self: flex-end;
    margin-top: auto;
`
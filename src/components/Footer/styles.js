import styled from "styled-components";
import { palette, shadow, padding, fontSize } from "../../theme"

export const Container = styled.div`
    width: 100%;
    background-color: ${palette.mutedBlack};
    padding: ${padding.md};
    color: ${palette.textLight};
    text-align: center;
    color: ${palette.textSecondary};
`;

export const Title = styled.h5`
    font-size: ${fontSize.sm};
    font-weight: 500;
`;

export const Description = styled.p`
    font-size: ${fontSize.sm};
`;

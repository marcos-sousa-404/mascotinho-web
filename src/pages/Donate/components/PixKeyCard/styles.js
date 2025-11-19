import styled from "styled-components";
import { borderRadius, fontSize, margin, padding, palette } from '../../../../theme';

export const Card = styled.div`
    background-color: ${palette.cardBackground};
    border: 1px solid ${palette.cardBorder};
    border-radius: ${borderRadius.xxl};
    width: 100%;
    font-size: ${fontSize.lg};
    padding: ${padding.sm};
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: ${margin.sm};
`

export const CardHeader = styled.div`
  background-color: ${palette.primaryLight};
    padding: ${padding.md};
    border-radius: ${borderRadius.xxl};
    color: white;
    font-weight: bold;
`

export const CardKey = styled.div`
  font-weight: bold;
    font-size: ${fontSize.xl};
    margin-top: ${margin.sm};
`

export const CardKeyHolder = styled.div`
    font-weight: 600;
    margin-bottom: ${margin.md};
`
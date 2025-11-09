import styled from "styled-components";
import Hero from "../../assets/images/landing-hero.png";
import { palette, fontSize, padding, margin, shadow, borderRadius } from "../../theme";
import UnderlinedTitle from "../UnderlinedTitle";

export const Container = styled.section`
    margin: 0 auto;
    width: 90%;
    border-radius: ${borderRadius.xl};
    background: linear-gradient(to top right, ${palette.primaryDark}77, ${palette.primaryDark}77), url(${({imageUrl}) => imageUrl});
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: ${padding.xl};
    box-shadow: ${shadow.lg};
    margin-bottom: ${margin.xl};
    text-align: center;
`

export const Title = styled(UnderlinedTitle)`
    margin: 0 auto;
    font-size: ${fontSize.xl};
    line-height: 1;
`

export const Description = styled.p`
  font-size: ${fontSize.md};
`

export const CenterContainer = styled.div`
    color: ${palette.textLight};
    max-width: 50%;
    display: flex;
    flex-direction: column;
    gap: ${margin.md};
    align-items: center;
`
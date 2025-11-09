import styled from "styled-components";
import Hero from "../../assets/images/landing-hero.png";
import {palette, fontSize, padding, margin, shadow} from "../../theme";

export const Container = styled.section`
    height: 90vh;
    width: 100%;
    background: linear-gradient(to top right, ${palette.primaryDark}77, ${palette.primaryDark}77), url(${Hero});
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    padding: ${padding.xl};
    box-shadow: ${shadow.lg};
    margin-bottom: ${margin.xl};
`

export const Title = styled.h1`
    font-size: ${fontSize.xxxl};
    line-height: 1;
`

export const Description = styled.p`
  font-size: ${fontSize.md};
`

export const LeftContainer = styled.div`
    color: white;
    max-width: 50%;
    display: flex;
    flex-direction: column;
    gap: ${margin.md};
    align-items: start;
`
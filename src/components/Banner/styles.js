import styled from "styled-components";
import Hero from "../../assets/images/landing-hero.png";
import { palette } from "../../theme";

export const Container = styled.section`
  height: 90vh;
  width: 100%;
  background: linear-gradient(to top right, ${palette.primary}77, ${palette.primary}77), url("${Hero}");
  object-fit: cover;
  display: flex;
  align-items: center;
  padding: 3.2rem;
`

export const Title = styled.h1`
  font-size: 4rem;
  line-height: 1;
`

export const Description = styled.p`
  font-size: 1.6rem
`

export const SubContainer = styled.div`
color: white;
max-width: 50%;
display: flex;
flex-direction: column;
gap: 2rem;
align-items: start;
`
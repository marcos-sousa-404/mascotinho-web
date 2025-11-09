import styled from "styled-components";
import {palette, shadow} from "../../theme"
import LogoBase from "../../assets/images/logo.svg"

export const HeaderContainer = styled.div`
    display: flex;
    height: 10rem;
    background-color: ${palette.background};
    box-shadow: ${shadow.lg};
    padding: 3rem;
    justify-content: space-between;
    align-items: center;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    gap: 0.8rem;
`;

export const Logo = styled(LogoBase)`
    height: 8rem;
    margin-top: 0.5rem;
`
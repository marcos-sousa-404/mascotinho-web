import styled from "styled-components";
import { palette } from "../../theme"

export const HeaderContainer = styled.div`
  display: flex;
  height: 10rem;
  background-color: ${palette.background};
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.1);
  padding: 3rem;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.8rem;
`;
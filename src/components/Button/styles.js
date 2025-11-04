import styled from "styled-components";
import { palette } from "../../theme";

export const ButtonContainer = styled.button`
  display: flex;
  height: 50px;
  min-width: 200px;
  ${({ outlined }) =>
    outlined
      ? `
    border: 2px solid ${palette.primary};
    color: ${palette.primary};
    background-color: transparent;
`
      : `
    border: none;
    background-color: ${palette.primary};
    color: white;
`}
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
    padding: 2px;
    font-weight: 700;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    font-size: 16px;
`;

export const Icon = styled.img``;
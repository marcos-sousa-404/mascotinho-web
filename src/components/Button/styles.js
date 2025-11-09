import styled from "styled-components";
import {palette, shadow} from "../../theme";

export const ButtonContainer = styled.button`
  display: flex;
  height: 5rem;
  min-width: 20rem;
  gap: 0.5rem;
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
  box-shadow: ${shadow.sm};
    padding: 2px;
    font-weight: 700;
    align-items: center;
    justify-content: center;
    border-radius: 2.5rem;
    font-size: 1.6rem;
    
    transition: all 0.2s;
    &:hover, &:active {
      filter: brightness(1.3);
      transform: scale(1.02);
    }
`;

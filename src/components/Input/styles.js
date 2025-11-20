import styled from 'styled-components';
import { borderRadius, fontSize, padding, palette } from '../../theme';

export const Input = styled.input`
  border-radius: ${borderRadius.md};
  border: none;
  background: ${palette.foreground};
  padding: ${padding.xs};
  width: 100%;
  font-size: ${fontSize.sm};

  &:user-invalid {
    border: 2px solid ${palette.invalid};
  }

  &:focus {
    outline: none;
    border: 2px solid ${palette.primary};
  }
`;

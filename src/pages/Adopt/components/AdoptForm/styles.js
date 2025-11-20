import styled from 'styled-components';
import { Card as CardBase, Button as ButtonBase } from '../../../../components';
import { margin } from '../../../../theme';

export const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Card = styled(CardBase)`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: ${margin.xxxl};
`;

export const FieldsContainer = styled.div`
  align-self: start;
  width: 100%;

  & > :not(:last-child) {
    margin-bottom: ${margin.sm};
  }

  margin-bottom: ${margin.md};
`;

export const Form = styled.form`
  width: 100%;
`;

export const Button = styled(ButtonBase)`
  margin: auto;
`;

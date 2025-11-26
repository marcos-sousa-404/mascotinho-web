import styled from 'styled-components';
import { Card as CardBase, Button as ButtonBase } from '../../../../components';
import { breakpoints, margin } from '../../../../theme';

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
  margin-bottom: ${margin.xxxl};

  @media (max-width: ${breakpoints.md}) {
    width: 80%;
  }

  @media (max-width: ${breakpoints.sm}) {
    width: 100%;
  }
`;

export const FieldsContainer = styled.div`
  align-self: start;
  width: 100%;

  & > :first-child {
    margin-top: ${margin.sm};
  }

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

import styled from 'styled-components';
import { UnderlinedTitle as UnderlinedTitleBase } from '../../../../components';
import { fontSize, margin, padding, palette, shadow } from '../../../../theme';

export const UnderlinedTitle = styled(UnderlinedTitleBase)``;

export const MainContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${padding.md};
`;

export const CardsContainer = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  gap: ${margin.md};
  margin-top: ${margin.lg};
  padding: 0 ${padding.md};
  margin-bottom: ${margin.xl};
`;

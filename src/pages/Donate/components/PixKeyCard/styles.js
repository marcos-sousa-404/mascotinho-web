import styled from 'styled-components';
import { borderRadius, fontSize, margin, padding, palette } from '../../../../theme';
import CardBase from '../../../../components/Card';

export const Card = styled(CardBase)`
  font-size: ${fontSize.md};
  padding: ${padding.sm};
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: ${margin.sm};
  border: 1px solid ${palette.cardBorder};
`;

export const CardHeader = styled.div`
  background-color: ${palette.primaryLight};
  padding: ${padding.sm};
  border-radius: ${borderRadius.md};
  color: white;
  font-weight: bold;
`;

export const CardKey = styled.div`
  font-weight: bold;
  font-size: ${fontSize.lg};
  margin-top: ${margin.sm};
`;

export const CardKeyHolder = styled.div`
  font-weight: 600;
  margin-bottom: ${margin.md};
  color: ${palette.textSecondary};
`;

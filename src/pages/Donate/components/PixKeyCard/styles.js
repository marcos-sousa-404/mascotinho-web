import styled from 'styled-components';
import { borderRadius, breakpoints, fontSize, margin, padding, palette } from '../../../../theme';
import CardBase from '../../../../components/Card';

export const Card = styled(CardBase)`
  font-size: ${fontSize.md};
  padding: ${padding.sm};
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: ${margin.sm};
  border: 1px solid ${palette.cardBorder};
  width: 100%;
  overflow: hidden;
  max-width: 45rem;
`;

export const CardHeader = styled.h6`
  font-size: ${fontSize.md};
  background-color: ${palette.primaryLight};
  padding: ${padding.sm};
  border-radius: ${borderRadius.md};
  color: white;
  font-weight: bold;

  @media (max-width: ${breakpoints.sm}) {
    font-size: ${fontSize.md};
  }
`;

export const CardKey = styled.span`
  font-weight: bold;
  font-size: ${fontSize.lg};
  margin-top: ${margin.sm};
  word-break: break-word;

  @media (max-width: ${breakpoints.sm}) {
    font-size: ${fontSize.md};
  }
`;

export const CardKeyHolder = styled.span`
  font-weight: 600;
  margin-bottom: ${margin.md};
  color: ${palette.textSecondary};

  @media (max-width: ${breakpoints.sm}) {
    font-size: ${fontSize.sm};
  }
`;

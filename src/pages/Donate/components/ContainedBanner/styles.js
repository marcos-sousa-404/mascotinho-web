import styled from 'styled-components';
import { ContainedBanner as ContainedBannerBase } from '../../../../components';
import { breakpoints, margin, padding } from '../../../../theme';

export const BannerContainer = styled.div`
  padding: 0 ${padding.xl};

  @media (max-width: ${breakpoints.md}) {
    padding: 0;
  }
`;

export const ContainedBanner = styled(ContainedBannerBase)`
  margin: ${margin.xxxl} auto;
  min-height: 37.5rem;

  @media (max-width: ${breakpoints.sm}) {
    padding: ${padding.xl} 0;
    margin-bottom: ${margin.md};
    width: 100%;
  }
`;

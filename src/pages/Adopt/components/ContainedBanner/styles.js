import styled from 'styled-components';
import { ContainedBanner as ContainedBannerBase } from '../../../../components';
import { margin } from '../../../../theme';

export const ContainedBanner = styled(ContainedBannerBase)`
  margin: ${margin.xxxl} auto;
  min-height: 37.5rem;
  width: 100%;
`;

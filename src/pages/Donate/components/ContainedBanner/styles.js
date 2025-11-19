import styled from 'styled-components';
import { ContainedBanner as ContainedBannerBase } from '../../../../components';
import { margin, padding } from '../../../../theme';

export const BannerContainer = styled.div`
    padding: 0 ${padding.xl};
`

export const ContainedBanner = styled(ContainedBannerBase)`
    margin: ${margin.xxxl} auto;
    min-height: 42.5rem;
`;

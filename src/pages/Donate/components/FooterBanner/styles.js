import styled from 'styled-components';
import ImageSm from '../../../../assets/images/donate-footer/donate-footer-sm.png';
import ImageMd from '../../../../assets/images/donate-footer/donate-footer-md.png';
import ImageLg from '../../../../assets/images/donate-footer/donate-footer-lg.png';
import { borderRadius, breakpoints, fontSize, margin, padding, palette } from '../../../../theme';
import { Subtitle as SubtitleBase } from '../../../../components';
import getResponsiveImageUrl from '../../../../helpers/getResponsiveImageUrl';

export const Container = styled.section`
  min-height: 36rem;
  background:
    linear-gradient(120deg, ${palette.primaryDark}A0 0%, ${palette.primaryDark}60 100%),
    url(${() => getResponsiveImageUrl({ sm: ImageSm, md: ImageMd, lg: ImageLg })});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${padding.xl};
  margin-top: ${margin.xxxl};
  position: relative;

  @media (max-width: ${breakpoints.md}) {
    padding: ${padding.xl} 0;
    margin-top: 0;
  }
`;

export const ContentCard = styled.div`
  background: rgba(30, 30, 30, 0.4);
  backdrop-filter: blur(4px);
  border-radius: ${borderRadius.lg};
  box-shadow: 0 4px 28px rgba(0, 0, 0, 0.1);
  max-width: 640px;
  width: 100%;
  padding: ${padding.lg} ${padding.md};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${breakpoints.sm}) {
    padding: ${padding.lg};
    border-radius: 0;
  }
`;

export const Title = styled.h6`
  font-size: ${fontSize.xl};
  color: ${palette.textLight};
  margin-bottom: ${margin.lg};
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.24);
  text-align: center;

  @media (max-width: ${breakpoints.sm}) {
    font-size: ${fontSize.lg};
    margin-bottom: ${margin.md};
  }
`;

export const Subtitle = styled(SubtitleBase)`
  color: ${palette.textSecondaryLight};
  font-size: ${fontSize.md};
  text-align: center;
  margin-bottom: ${margin.md};

  @media (max-width: ${breakpoints.sm}) {
    font-size: ${fontSize.sm};
    margin-bottom: ${margin.sm};
  }
`;

export const SecondaryTitle = styled.p`
  font-size: ${fontSize.lg};
  color: ${palette.textLight};
  margin-top: ${margin.md};
  font-weight: 600;
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.15);

  @media (max-width: ${breakpoints.sm}) {
    font-size: ${fontSize.md};
    margin-top: ${margin.sm};
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: ${margin.lg};
  flex-wrap: wrap;
  justify-content: center;
  margin-top: ${margin.md};

  @media (max-width: ${breakpoints.md}) {
    gap: ${margin.sm};
  }
`;

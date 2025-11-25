import styled from 'styled-components';
import ImageSm from '../../../../assets/images/donate-footer/donate-footer-sm.png';
import ImageMd from '../../../../assets/images/donate-footer/donate-footer-md.png';
import ImageLg from '../../../../assets/images/donate-footer/donate-footer-lg.png';
import { fontSize, margin, padding, palette, borderRadius } from '../../../../theme';
import { Subtitle as SubtitleBase } from '../../../../components';
import getResponsiveImageUrl from '../../../../helpers/getResponsiveImageUrl';

export const Container = styled.section`
  min-height: 36rem;
  background:
    linear-gradient(120deg, ${palette.primaryDark}A0 0%, ${palette.primaryDark}60 100%),
    url(${() => getResponsiveImageUrl({sm: ImageSm, md: ImageMd, lg: ImageLg})});
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
`;

export const ContentCard = styled.div`
  background: rgba(30, 30, 30, 0.4);
  backdrop-filter: blur(4px);
  border-radius: ${borderRadius.lg};
  box-shadow: 0 4px 28px rgba(0, 0, 0, 0.1);
  max-width: 640px;
  width: 100%;
  padding: 3rem 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h6`
  font-size: ${fontSize.xl};
  color: ${palette.textLight};
  margin-bottom: ${margin.lg};
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.24);
`;

export const Subtitle = styled(SubtitleBase)`
  color: ${palette.textSecondaryLight};
  font-size: ${fontSize.md};
  text-align: center;
  margin-bottom: ${margin.md};
`;

export const SecondaryTitle = styled.p`
  font-size: ${fontSize.lg};
  color: ${palette.textLight};
  margin-top: ${margin.md};
  font-weight: 600;
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.15);
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: ${margin.lg};
  flex-wrap: wrap;
  justify-content: center;
  margin-top: ${margin.md};
`;

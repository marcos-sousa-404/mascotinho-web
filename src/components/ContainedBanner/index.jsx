import { CenterContainer, Container, Description, Title } from './styles.js';
import Button from '../Button';
import getResponsiveImageUrl from '../../helpers/getResponsiveImageUrl';

const ContainedBanner = ({ imageUrlMap, className, title, description, cta, href }) => {
  const responsiveImageUrl = getResponsiveImageUrl(imageUrlMap);
  const onlyTitle = !description && !cta && title;

  return (
    <Container imageUrl={responsiveImageUrl} className={className}>
      <CenterContainer onlyTitle={onlyTitle}>
        <Title onlyTitle={onlyTitle}>{title}</Title>
        <Description>{description}</Description>
        {cta && (
          <Button href={href} type={'white'}>
            {cta}
          </Button>
        )}
      </CenterContainer>
    </Container>
  );
};

export default ContainedBanner;

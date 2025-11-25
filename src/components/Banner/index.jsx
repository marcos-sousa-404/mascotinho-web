import { Container, Description, LeftContainer, Title } from './styles.js';
import Button from '../Button';
import getResponsiveImageUrl from '../../helpers/getResponsiveImageUrl';

const Banner = ({ title, description, buttonText, imageUrlMap, href }) => {
  const responsiveImageUrl = getResponsiveImageUrl(imageUrlMap);

  return (
    <Container imageUrl={responsiveImageUrl}>
      <LeftContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
        {buttonText && <Button href={href}>{buttonText}</Button>}
      </LeftContainer>
    </Container>
  );
};

export default Banner;

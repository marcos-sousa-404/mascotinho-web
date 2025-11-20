import { Container, Description, LeftContainer, Title } from './styles.js';
import Button from '../Button';

const Banner = ({ title, description, buttonText, imageUrl, href }) => {
  return (
    <Container imageUrl={imageUrl}>
      <LeftContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
        {buttonText && <Button href={href}>{buttonText}</Button>}
      </LeftContainer>
    </Container>
  );
};

export default Banner;

import { CenterContainer, Container, Description, Title } from './styles.js';
import Button from '../Button';

const ContainedBanner = ({ imageUrl, className, title, description, cta, href }) => {
  const onlyTitle = !description && !cta && title;

  return (
    <Container imageUrl={imageUrl} className={className}>
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

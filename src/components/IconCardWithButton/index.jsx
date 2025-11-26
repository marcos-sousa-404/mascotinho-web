import { Button, Description, Title, Card } from './styles';
import styled from 'styled-components';
import { breakpoints } from '../../theme';

const IconCardWithButton = ({ Icon, title, cta, description, className, href }) => {
  const StyledIcon =
    Icon &&
    styled(Icon)`
      width: 8rem;
      height: 8rem;
    `;

  return (
    <Card className={className}>
      {StyledIcon && <StyledIcon />}
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Button href={href}>{cta}</Button>
    </Card>
  );
};

export default IconCardWithButton;

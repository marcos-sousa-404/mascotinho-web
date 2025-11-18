import { Button, Card, Description, Title } from './styles';
import styled from 'styled-components';
import { breakpoints } from '../../theme';

const IconCardWithButton = ({ Icon, title, cta, description, className }) => {
  const StyledIcon =
    Icon &&
    styled(Icon)`
      width: 10rem;
      height: 10rem;

      @media (max-width: ${breakpoints.sm}) {
        width: 8rem;
      }
    `;

  return (
    <Card className={className}>
      {StyledIcon && <StyledIcon />}
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Button>{cta}</Button>
    </Card>
  );
};

export default IconCardWithButton;

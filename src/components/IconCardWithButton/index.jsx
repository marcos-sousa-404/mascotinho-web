import { Button, Card, Description, Title } from './styles';
import styled from 'styled-components';
import { breakpoints } from '../../theme';

const IconCardWithButton = ({ Icon, title, cta, description, className }) => {
  const StyledIcon =
    Icon &&
    styled(Icon)`
      width: 30%;

      @media (max-width: ${breakpoints.sm}) {
        width: 25%;
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

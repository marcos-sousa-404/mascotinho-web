import { Container } from './styles.js';

const Button = ({ children, type, Icon, className }) => {
  return (
    <Container className={className} type={type}>
      {Icon && <Icon />}
      {children}
    </Container>
  );
};

export default Button;

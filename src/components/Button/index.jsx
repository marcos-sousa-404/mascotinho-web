import { Container } from './styles.js';

const Button = ({ children, type, Icon, className, href }) => {
  const handleClick = () => {
    if (href) document.location.href = href;
  };

  return (
    <Container onClick={handleClick} className={className} type={type}>
      {Icon && <Icon />}
      {children}
    </Container>
  );
};

export default Button;

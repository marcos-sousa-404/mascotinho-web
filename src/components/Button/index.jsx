import { Container } from './styles.js';

const Button = ({ children, type, Icon, className, href, iconSize = 28 }) => {
  const handleClick = (event) => {
    if (href && href.startsWith('#')) {
      event.preventDefault();
      const id = href.slice(1);
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (href) {
      document.location.href = href;
    }
  };

  return (
    <Container onClick={handleClick} className={className} type={type}>
      {Icon && <Icon width={iconSize} height={iconSize} />}
      {children}
    </Container>
  );
};

export default Button;

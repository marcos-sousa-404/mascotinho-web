import { Card as CardBase } from './styles';

const Card = ({ children, className }) => {
  return <CardBase className={className}>{children}</CardBase>;
};

export default Card;

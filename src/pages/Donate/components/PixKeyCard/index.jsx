import { Card, CardKey, CardKeyHolder, CardHeader } from './styles';

const PixKeyCard = ({ title, pixKey, keyHolder }) => {
  return (
    <Card>
      <CardHeader>{title}</CardHeader>
      <CardKey>{pixKey}</CardKey>
      <CardKeyHolder>{keyHolder}</CardKeyHolder>
    </Card>
  );
};

export default PixKeyCard;

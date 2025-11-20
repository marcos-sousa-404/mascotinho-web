import { IconContainer, Label, Text } from './styles';

const InputLabel = ({ Icon, text, htmlFor }) => {
  return (
    <Label htmlFor={htmlFor}>
      {Icon && (
        <IconContainer>
          <Icon />
        </IconContainer>
      )}
      <Text>{text}</Text>
    </Label>
  );
};

export default InputLabel;

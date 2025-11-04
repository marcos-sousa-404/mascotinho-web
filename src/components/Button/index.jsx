import {ButtonContainer} from "./styles.js";

const Button = ({ title, outlined, Icon }) => {
  return (        
    <ButtonContainer outlined={outlined}>
      {Icon && (<Icon />)}
      {title}
      </ButtonContainer>
  );
}
  
export default Button;

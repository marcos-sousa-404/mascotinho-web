import {ButtonContainer} from "./styles.js";

const Button = ({children, outlined, Icon, className}) => {
    return (
        <ButtonContainer className={className} outlined={outlined}>
            {Icon && (<Icon/>)}
            {children}
        </ButtonContainer>
    );
}

export default Button;

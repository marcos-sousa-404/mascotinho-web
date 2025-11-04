
import React from "react";
import {ButtonContainer, Icon} from "./styles.js";

class Button extends React.Component {
  render() {
    const { title, iconPath, outlined } = this.props;
    return (
        <ButtonContainer outlined={outlined}>
          {iconPath && (<Icon src={iconPath}/>)}
          {title}
        </ButtonContainer>
    );
  }
}

export default Button;

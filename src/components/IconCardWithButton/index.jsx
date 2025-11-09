import {Button, Card, Description, Title} from "./styles";
import styled from "styled-components";

const IconCardWithButton = ({Icon, title, cta, description}) => {
    const StyledIcon = Icon && styled(Icon)`
        width: 30%;
    `;

    return <Card>
        {StyledIcon && (<StyledIcon/>)}
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Button>
            {cta}
        </Button>
    </Card>;
}

export default IconCardWithButton;
import { Container, Description, CenterContainer, Title } from "./styles.js";
import Button from "../Button";
import {bor} from "../../theme";

const ContainedBanner = ({imageUrl, className, title, description, cta}) => {
  return (<Container imageUrl={imageUrl} className={className}>
        <CenterContainer>
            <Title>
                {title}
            </Title>
            <Description>{description}</Description>
            {cta && (<Button type={"white"}>
                {cta}
            </Button>)}
        </CenterContainer>
    </Container>)
}

export default ContainedBanner;
import styled from "styled-components";
import {ContainedBanner as ContainedBannerBase} from "../../../../components";
import {margin} from "../../../../theme";

export const ContainedBanner = styled(ContainedBannerBase)`
  margin-top: ${margin.xl};
  margin-bottom: ${margin.xl};
`
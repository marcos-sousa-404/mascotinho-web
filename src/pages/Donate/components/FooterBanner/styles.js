import styled from 'styled-components';
import Image from "../../../../assets/images/donate-footer.png"
import { fontSize, palette } from '../../../../theme';

export const Container = styled.section`
    height: 40rem;
    background: linear-gradient(to top right, ${palette.primaryDark}aa, ${palette.primaryDark}aa),
    url(${Image});
    background-position: center;
    background-repeat: space;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Title = styled.h5`
  font-size: ${fontSize.xxl};
    color: white;
`;

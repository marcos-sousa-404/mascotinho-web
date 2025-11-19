import { MainContainer, UnderlinedTitle, CardsContainer } from './styles';
import { PixKeyCard } from '../index';

const PixSection = () => {
  return <MainContainer>
    <UnderlinedTitle>
      PIX
    </UnderlinedTitle>

    <CardsContainer>
      <PixKeyCard title={'Chave telefone:'} pixKey={'(85) 98887-8546'} keyHolder={'FILIPE ANDERSON'} />
      <PixKeyCard title={'Chave email:'} pixKey={'abrigomascotinho@gmail.com'} keyHolder={'FILIPE ANDERSON'} />
    </CardsContainer>
  </MainContainer>;
};

export default PixSection;
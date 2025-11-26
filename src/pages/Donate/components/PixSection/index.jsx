import { MainContainer, CardsContainer } from './styles';
import { UnderlinedTitle } from '../../../../components';
import { PixKeyCard } from '../index';
import { Subtitle } from '../../../../components';

const PixSection = () => {
  return (
    <MainContainer>
      <UnderlinedTitle>Nossas chaves PIX</UnderlinedTitle>
      <Subtitle>Use uma das chaves abaixo para fazer sua doação pelo app do seu banco.</Subtitle>

      <CardsContainer>
        <PixKeyCard
          title={'Chave telefone:'}
          pixKey={'(85) 98887-8546'}
          keyHolder={'FILIPE ANDERSON'}
        />
        <PixKeyCard
          title={'Chave email:'}
          pixKey={'abrigomascotinho@gmail.com'}
          keyHolder={'FILIPE ANDERSON'}
        />
      </CardsContainer>
    </MainContainer>
  );
};

export default PixSection;

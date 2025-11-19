import { ButtonsContainer, MainContainer, Subtitle, Title } from './styles';
import { Button } from '../../../../components';
import WhatsappIcon from '../../../../assets/icons/whatsapp.svg';

const OtherDonationMethods = () => {
  return (
    <MainContainer>
      <Title>
        Quer doar de outra forma?
      </Title>
      <Subtitle>
        Aqui estão algumas outras opções
      </Subtitle>
      <ButtonsContainer>
        <Button>
          Vaquinha
        </Button>
        <Button Icon={WhatsappIcon}>
          Doe ração
        </Button>
      </ButtonsContainer>
    </MainContainer>
  );
};

export default OtherDonationMethods;
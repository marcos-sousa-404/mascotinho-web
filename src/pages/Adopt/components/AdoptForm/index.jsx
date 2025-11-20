import { Card, FieldsContainer, Form, MainContainer, Button } from './styles';
import { Input, InputLabel, UnderlinedTitle } from '../../../../components';
import InputGroup from '../../../../components/InputGroup';

const AdoptForm = () => {
  return (
    <MainContainer>
      <Card>
        <UnderlinedTitle>Informações pessoais</UnderlinedTitle>
        <Form>
          <FieldsContainer>
            <InputGroup>
              <InputLabel text={'Nome:*'} htmlFor="name" Icon={null} />
              <Input required id="name" name="name" placeholder="Coloque seu nome" type="text" />
            </InputGroup>
            <InputGroup>
              <InputLabel text={'Telefone:*'} htmlFor="phone" Icon={null} />
              <Input
                required
                id="phone"
                name="phone"
                placeholder="Coloque seu telefone"
                type="tel"
                pattern="\(\d{2}\)\s?\d{4,5}-\d{4}"
                maxLength={15}
                title="Telefone deve estar no formato (99) 99999-9999"
              />
            </InputGroup>
            <InputGroup>
              <InputLabel
                text={'Tipo de preferencia de animal:*'}
                htmlFor="animalType"
                Icon={null}
              />
              <Input required as="select" id="animalType" name="animalType" defaultValue="">
                <option value="" disabled>
                  Selecione
                </option>
                <option value="dog">Cachorro</option>
                <option value="cat">Gato</option>
              </Input>
            </InputGroup>
            <InputGroup>
              <InputLabel text={'Algum detalhe sobre o pet?'} htmlFor="petDetails" Icon={null} />
              <Input
                as="textarea"
                id="petDetails"
                name="petDetails"
                placeholder="Exemplo: calmo, agitado, ..."
                rows={2}
              />
            </InputGroup>
            <InputGroup>
              <InputLabel text={'Preferência de sexo do pet:'} htmlFor="petGender" Icon={null} />
              <Input as="select" id="petGender" name="petGender" defaultValue="">
                <option value="" disabled>
                  Selecione
                </option>
                <option value="male">Macho</option>
                <option value="female">Fêmea</option>
                <option value="indifferent">Indiferente</option>
              </Input>
            </InputGroup>
            <InputGroup>
              <InputLabel text={'Motivação para adoção:'} htmlFor="motivation" Icon={null} />
              <Input
                as="textarea"
                id="motivation"
                name="motivation"
                placeholder="Exemplo: Estava me sentindo sozinho..."
                rows={2}
              />
            </InputGroup>
          </FieldsContainer>
          <Button>Enviar</Button>
        </Form>
      </Card>
    </MainContainer>
  );
};

export default AdoptForm;

import { SectionContainer, Item, Description, Image, TextContainer } from './styles';
import StoryImageOne from '../../../../assets/images/story-1.png';
import StoryImageTwo from '../../../../assets/images/story-2.png';
import { UnderlinedTitle } from '../../../../components';

const OurStory = () => {
  return (
    <SectionContainer>
      <Item>
        <Image src={StoryImageOne} />
        <TextContainer>
          <UnderlinedTitle>Nossa história</UnderlinedTitle>
          <Description>
            O abrigo surgiu da necessidade que vimos em ajudar animais de rua que estavam em
            situações muito ruins. Mesmo sendo pessoas sem recursos, não podíamos ficar de braços
            cruzados vendo tanto sofrimento. Eram caixas com gatinhos bebês jogadas em calçadas,
            cães idosos vagando famintos pelas ruas, animais atropelados que ficavam dias agonizando
            no local do acidente sem ninguém prestar socorro. Mesmo sem condições, fomos acolhendo
            esses animais que ninguém mais iria ajudar.
          </Description>
        </TextContainer>
      </Item>
      <Item reverse>
        <Image src={StoryImageTwo} />
        <TextContainer>
          <Description>
            Não recebemos nenhum tipo de ajuda do poder público. Tudo vem através de doações, da
            venda de roupas usadas do nosso bazar e das rifas e sorteios que realizamos. Vivemos um
            dia de cada vez, com muitas dificuldades e trabalhando com poucos recursos. Lutamos por
            todos esses animais, dedicando todo nosso tempo e nossas vidas, contando apenas com a
            ajuda das pessoas da cidade que apoiam a causa animal e mesmo não tendo muito doam o que
            podem para manter o abrigo, assim como doam roupas e objetos usados para nosso bazar. É
            uma corrente pela vida por todos aqueles que não possuem mais ninguém.
          </Description>
        </TextContainer>
      </Item>
    </SectionContainer>
  );
};

export default OurStory;

import { Description, Image, Item, SectionContainer, TextContainer } from './styles';
import StoryImageOneSm from '../../../../assets/images/story-1/story-1-sm.png';
import StoryImageTwoSm from '../../../../assets/images/story-2/story-2-sm.png';
import StoryImageTwoMd from '../../../../assets/images/story-2/story-2-md.png';
import StoryImageTwoLg from '../../../../assets/images/story-2/story-2-lg.png';
import { UnderlinedTitle } from '../../../../components';
import getResponsiveImageUrl from '../../../../helpers/getResponsiveImageUrl';

const OurStory = () => {
  const responsiveStoryImage1Url = getResponsiveImageUrl({ sm: StoryImageOneSm });
  const responsiveStoryImage2Url = getResponsiveImageUrl({
    sm: StoryImageTwoSm,
    md: StoryImageTwoMd,
    lg: StoryImageTwoLg,
  });

  return (
    <SectionContainer>
      <Item>
        <Image src={responsiveStoryImage1Url} />
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
        <Image src={responsiveStoryImage2Url} />
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

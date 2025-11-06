import { StoryItem, StoryItemImageContainer, StoryItemDescription, UnderlinedTitle, StoryItemTextContainer } from './styles';
import StoryImageOne from "../../../../assets/images/story-1.png"

const OurStory = () => {
  return (
      <section>
        <StoryItem>
          <StoryItemTextContainer>
            
          <UnderlinedTitle>Nossa história</UnderlinedTitle>
          <StoryItemDescription>
O abrigo surgiu da necessidade que vimos em ajudar animais de rua que estavam em situações muito ruins. Mesmo sendo pessoas sem recursos, não podíamos ficar de braços cruzados vendo tanto sofrimento. Eram caixas com gatinhos 
bebês jogadas em calçadas, cães idosos vagando famintos pelas ruas, animais atropelados que 
ficavam dias agonizando no local do acidente sem ninguém prestar socorro. Mesmo sem 
condições, fomos acolhendo esses animais que 
ninguém mais iria ajudar.
</StoryItemDescription>
</StoryItemTextContainer>
          <StoryItemImageContainer src={StoryImageOne}>
          </StoryItemImageContainer>
        </StoryItem>
      </section>
  )
}

export default OurStory;
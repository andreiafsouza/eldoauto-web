import Reviews from "../Reviews/Reviews";
import {
  AboutContainer,
  AboutWrapper,
  AboutRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  InfoList,
  ItemList,
  Item,
  Column2,
  ImgWrap,
  Img,
  ReviewsWrapper,
} from "./AboutElements";

const AboutSection = ({
  lightBg,
  imagStart,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
  img,
  alt,
  id,
}) => {
  return (
    <>
      <AboutContainer lightBg={lightBg} id={id}>
        <AboutWrapper>
          <AboutRow imagStart={imagStart}>
            <Column1>
              <TextWrapper>
                <TopLine lightText={lightText}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <InfoList>
                  <ItemList>
                    <Item lightText={lightText}>
                      Valores: Integridade, honestidade, Qualidade, ...
                    </Item>
                    <Item lightText={lightText}>
                      Visão: Integridade, honestidade, Qualidade, ...
                    </Item>
                    <Item lightText={lightText}>
                      Missão: Integridade, honestidade, Qualidade, ...
                    </Item>
                  </ItemList>
                </InfoList>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </AboutRow>
        </AboutWrapper>
        <ReviewsWrapper>
          <Reviews />
        </ReviewsWrapper>
      </AboutContainer>
    </>
  );
};

export default AboutSection;

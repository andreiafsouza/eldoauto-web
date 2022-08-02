import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Column2,
  Img,
  ImgWrap,
  InfoList,
  ItemList,
  Item,
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
  img,
  alt,
  id,
  insuranceCompanies,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine lightText={lightText}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <InfoList>
                  <ItemList>
                    <Item lightText={lightText}>{insuranceCompanies[0]}</Item>
                    <Item lightText={lightText}>{insuranceCompanies[1]}</Item>
                    <Item lightText={lightText}>{insuranceCompanies[2]}</Item>
                    <Item lightText={lightText}>{insuranceCompanies[3]}</Item>
                    <Item lightText={lightText}>{insuranceCompanies[4]}</Item>
                    <Item lightText={lightText}>{insuranceCompanies[5]}</Item>
                  </ItemList>
                </InfoList>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;

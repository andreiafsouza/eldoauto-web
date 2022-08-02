import styled from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #003153;
  padding: 32px 50px;
  background: ${({ lightBg }) => (lightBg ? "#c1c1c1" : "#003153")};

  @media screen and (max-width: 768px) {
    padding-inline: 24px;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  max-width: 1024px;

  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: ${({ imagStart }) =>
    imagStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imagStart }) =>
      imagStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;
export const Column1 = styled.div`
  padding: 24px;
  grid-area: col1;

  @media screen and (max-width: 768px) {
    padding: 16px 0;
  }
`;

export const Column2 = styled.div`
  grid-area: col2;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 24px;

  @media screen and (max-width: 768px) {
    justify-content: center;
    padding-top: 16px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TopLine = styled.p`
  color: ${({ lightText }) => (lightText ? "#8bd8f8" : "#003153")};
  font-size: 3.4rem;
  font-weight: 700;
  letter-spacing: 0.14rem;
  text-transform: uppercase;
  border-top: 3px solid rgba(36, 33, 36, 0.2);
  width: fit-content;

  @media screen and (max-width: 768px) {
    font-size: 2.4rem;
  }
`;

export const Heading = styled.h1`
  font-size: 2.2rem;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#e6e6e9" : "#003153")};
`;

export const Subtitle = styled.div`
  max-width: 440px;
  font-size: 1.8rem;
  color: ${({ darkText }) => (darkText ? "#003153" : "#e6e6e9")};
`;

export const InfoList = styled.div`
  padding-top: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ItemList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Item = styled.li`
  color: ${({ lightText }) => (lightText ? "#e6e6e9" : "#003153")};
  font-size: 1.8rem;
  font-weight: 600;
  word-spacing: 0.4rem;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background: linear-gradient(
      0.25turn,
      rgba(0, 49, 83, 0.5),
      rgba(44, 104, 156, 0.3)
    );
  }
`;

export const ImgWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80%;
`;

export const Img = styled.img`
  width: 100%;
  opacity: 95%;
`;

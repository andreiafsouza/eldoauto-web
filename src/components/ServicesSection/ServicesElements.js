import styled from "styled-components";

export const ServicesContainer = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #c1c1c1;
  padding: 32px 50px;

  @media screen and (max-width: 768px) {
    padding-inline: 24px;
  }
`;

export const ServicesH1 = styled.h1`
  font-weight: 700;
  font-size: 3.4rem;
  color: #003153;
  text-align: center;
  text-transform: uppercase;

  @media screen and (max-width: 480px) {
    font-size: 2.4rem;
    line-height: 4rem;
  }
`;

export const ServicesText = styled.h2`
  font-weight: 600;
  font-size: 2.4rem;
  color: #003153;
  margin-top: 8px;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 1.8rem;
    line-height: 2.2rem;
  }
`;

export const ServicesWrapper = styled.div`
  width: 100%;
  max-width: 880px;
  margin-top: 48px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  grid-gap: 32px;

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr 1fr;
    max-width: 580px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ServicesCard = styled.div`
  background: c1c1c1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 256px;
  height: 304px;
  box-shadow: 0px 5px 5px rgba(36, 33, 36, 0.25);
  border: 0.1rem solid rgba(36, 33, 36, 0.25);
  border-radius: 16px;
  padding: 16px 24px;
  transition: all 0.2s ease-in-out;
  color: #003153;
  font-weight: 500;
  text-align: justify;
  overflow: hidden;
  position: relative;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: scale(1.02);
      transition: all 0.2s ease-in-out;
      cursor: pointer;
      background: rgba(230, 230, 233, 0.25);
    }
  }
`;

export const CardIcon = styled.div`
  width: 60%;
  height: 45%;
  padding-top: 8px;
  display: flex;
  justify-content: flex-start;
  border-radius: 100px;
  align-items: flex-end;
  background: linear-gradient(
    0.25turn,
    rgba(0, 49, 83, 0.25),
    rgba(44, 104, 156, 0.1)
  );
  box-shadow: 0px 2px 3px rgba(36, 33, 36, 0.25);
`;

export const CardTitle = styled.h2`
  font-size: 2.4rem;
  padding: 8px 0;
  white-space: nowrap;
`;
export const CardDescription = styled.p`
  font-size: 1.6rem;
  text-align: left;

  @media screen and (max-width: 430px) {
    font-size: 1.4rem;
  }
`;

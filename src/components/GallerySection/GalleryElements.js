import styled from "styled-components";

export const GalleryContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 800px;
  padding: 32px 50px;
  background: #c1c1c1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding-inline: 24px;
    min-height: 600px;
  }

  @media screen and (max-width: 480px) {
    min-height: 0;
    padding: 32px 0px;
  }
`;

export const GalleryHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px;
  max-width: 1024px;
  text-align: center;
`;

export const GalleryTitle = styled.h1`
  font-weight: 700;
  font-size: 3.4rem;
  color: #003153;
  text-transform: uppercase;
  border-top: 3px solid rgba(36, 33, 36, 0.2);
  width: fit-content;
  align-self: center;

  @media screen and (max-width: 480px) {
    font-size: 2.4rem;
    line-height: 4rem;
  }
`;

export const GalleryText = styled.h2`
  font-weight: 600;
  font-size: 2.4rem;
  color: #003153;
  margin-top: 8px;
  padding-bottom: 16px;

  @media screen and (max-width: 480px) {
    font-size: 1.8rem;
    line-height: 2.2rem;
  }
`;

export const GalleryWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  padding: 0px 24px;
  display: flex;
  align-items: center;
  z-index: 500;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  user-select: none;
`;

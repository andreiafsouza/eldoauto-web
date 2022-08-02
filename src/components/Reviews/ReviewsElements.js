import styled from "styled-components";

export const ReviewWrapper = styled.div`
  width: 100%;
  max-width: 290px;
  height: 250px;
  background: #e6e6e9;
  border-radius: 8px;
  padding: 8px;
  opacity: 90%;
  box-shadow: 0px 2px 3px rgba(36, 33, 36, 0.25);
  user-select: none;
`;

export const ReviewItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ReviewItemHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const ReviewImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

/* export const ReviewImg = styled.img`
  object-fit: cover;
`; */

export const ReviewAuthor = styled.h1`
  color: #003153;
  font-size: 1.4rem;
`;

export const ReviewRatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const RatingIconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const ReviewDate = styled.span`
  color: #2c698c;
  font-size: 1.2rem;
`;

export const ReviewText = styled.p`
  color: #242124;
  font-size: 1.1rem;
  padding: 8px 4px;
`;

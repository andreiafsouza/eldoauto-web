import React, { useEffect, useState } from "react";
import { Star } from "phosphor-react";
import { MdAccountCircle } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import {
  ReviewWrapper,
  ReviewItem,
  ReviewItemHeader,
  ReviewImgWrapper,
  ReviewAuthor,
  ReviewRatingWrapper,
  RatingIconWrapper,
  ReviewDate,
  ReviewText,
} from "./ReviewsElements";

import "./reviews.css";

const Reviews = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://192.168.100.8:3000/assets/reviews.json")
      .then((response) => response.json())
      .then(setData);
  }, []);

  if (!data || !data.length) return null;

  return (
    <Swiper
      breakpoints={{
        // when window width is >= 640px
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
          slidesPerGroup: 1,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 25,
          slidesPerGroup: 2,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 40,
          slidesPerGroup: 3,
        },
      }}
      id="swiper-container"
      loop={true}
      loopFillGroupWithBlank={true}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
    >
      {data.map((item) => {
        const { reviewAuthor, reviewDate, reviewText, plusId } = item;
        return (
          <SwiperSlide key={plusId}>
            <ReviewWrapper>
              <ReviewItem>
                <ReviewItemHeader>
                  <ReviewImgWrapper>
                    <MdAccountCircle size={32} color="#003153" />
                  </ReviewImgWrapper>
                  <ReviewAuthor>{reviewAuthor}</ReviewAuthor>
                </ReviewItemHeader>
                <ReviewRatingWrapper>
                  <RatingIconWrapper>
                    <Star size={12} weight="fill" color="#F3A000" />
                    <Star size={12} weight="fill" color="#F3A000" />
                    <Star size={12} weight="fill" color="#F3A000" />
                    <Star size={12} weight="fill" color="#F3A000" />
                    <Star size={12} weight="fill" color="#F3A000" />
                  </RatingIconWrapper>
                  <ReviewDate>{reviewDate}</ReviewDate>
                </ReviewRatingWrapper>
                <ReviewText>{reviewText}</ReviewText>
              </ReviewItem>
            </ReviewWrapper>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Reviews;

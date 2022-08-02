import React, { useEffect, useState } from "react";
import {
  GalleryContainer,
  GalleryTitle,
  GalleryWrapper,
  GalleryText,
  GalleryHeader,
  Image,
} from "./GalleryElements";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const GallerySection = () => {
  const [data, setData] = useState(0);

  useEffect(() => {
    fetch("http://192.168.100.8:3000/assets/gallery.json")
      .then((response) => response.json())
      .then(setData);
  }, []);

  if (!data || !data.length) return null;

  return (
    <GalleryContainer id="gallery">
      <GalleryHeader>
        <GalleryTitle>Galeria</GalleryTitle>
        <GalleryText>
          Confira as fotos dos veículos antes e depois da aplicação de nossos
          serviços.
        </GalleryText>
      </GalleryHeader>
      <GalleryWrapper>
        <Swiper
          navigation={true}
          slidesPerView={1}
          modules={[Pagination, Navigation]}
          pagination={{
            clickable: true,
          }}
          loop={true}
        >
          {data.map((item) => {
            const { id, src, alt } = item;
            return (
              <SwiperSlide key={id}>
                <Image src={src} alt={alt} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </GalleryWrapper>
    </GalleryContainer>
  );
};

export default GallerySection;

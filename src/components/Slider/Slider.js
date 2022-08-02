import React, { useState, useEffect } from "react";
import { SliderData } from "./SliderData";
import { Button } from "../ButtonElement";

import { CaretLeft, CaretRight } from "phosphor-react";
import "./slider.css";

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;
  const next = (current + 1) % length;
  const previous = (current - 1 + length) % length;

  const nextSlide = () => {
    setCurrent(next);
  };

  const previousSlide = () => {
    setCurrent(previous);
  };

  const moveDot = (index) => {
    setCurrent(index);
  };

  /* slider autoplay */
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  });

  return (
    <div className="slider-container">
      <div className="caret-wrapper">
        <div className="caret-left" onClick={previousSlide}>
          <CaretLeft className="caret" size={44} />
        </div>
        <div className="caret-right" onClick={nextSlide}>
          <CaretRight className="caret" size={44} />
        </div>
      </div>
      <div className="image-wrapper">
        {SliderData.map((slide, index, id) => {
          return (
            <div key={index}>
              <div
                className={
                  index === current && index === 0
                    ? "text-wrapper"
                    : "text-hidden"
                }
              >
                <div className="text-box">
                  <h1>Eficiência e dedicação para cuidar do seu veículo!</h1>
                </div>
              </div>
              <div
                className={
                  index === current && index === 1
                    ? "text-second-slide"
                    : "text-hidden"
                }
              >
                <div className="text-second">
                  <h1>
                    Lanternagem, pintura e outros serviços para o seu veículo.
                  </h1>
                  <Button
                    className="button"
                    to="services"
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                  >
                    Conheça mais
                  </Button>
                </div>
              </div>
              <div
                className={index === current ? "slide active" : "slide"}
                key={id}
              >
                {index === current && (
                  <img src={slide.url} alt={slide.alt} className="image" />
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="container-dots">
        {Array.from({ length: length }).map((item, index) => (
          <div
            key={index}
            onClick={() => moveDot(index)}
            className={index === current ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;

import React from "react";
import "./slider.scss";

export const Slider = () => {
  return (
    <div className="slider">
      <div className="slider__container">
        <h2 className="slider__title">The Power of Simplicity</h2>
        <p className="slider__description">
          Instead of spending time searching for the right app, our AI will
          bring the right app to you.
        </p>
        <button className="slider__button">Learn</button>
        <div className="slider__dots">
          <a href="/#" className="slider__dot"></a>
          <a href="/#" className="slider__dot"></a>
          <a href="/#" className="slider__dot--active"></a>
          <a href="/#" className="slider__dot"></a>
          <a href="/#" className="slider__dot"></a>
        </div>
      </div>
    </div>
  );
};

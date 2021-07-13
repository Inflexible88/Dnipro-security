import React from 'react';

function SliderItem({ title, text }) {
  return (
    <div class="slider__item">
      <div class="slider__item-content">
        <div class="slider__title">{title}</div>
        <div class="slider__text">{text}</div>
      </div>
    </div>
  );
}

export default SliderItem;

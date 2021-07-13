import React from 'react';

export default function Advantage({ title, text }) {
  return (
    <div class="advantages-item">
      <div class="advantages__title">{title}</div>
      <div class="advantages__text">{text}</div>
    </div>
  );
}

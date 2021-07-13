import React from 'react';
import Advantage from './Advantage';

function Adnvantages({ details }) {
  return (
    <section class="advantages">
      <div class="container">
        <div class="advantages__inner">
          {details &&
            details.map(({ title, text }) => {
              return <Advantage key={title} title={title} text={text} />;
            })}
        </div>
      </div>
    </section>
  );
}

export default Adnvantages;

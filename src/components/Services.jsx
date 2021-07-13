import React from 'react';
import { ServiceItem } from './';

function Services({data}) {
  return (
    <section class="services" id="services">
      <div class="container">
        <div class="services__top">
          <div class="services__title-box">
            <div class="services__title">Наши Услуги</div>
            <div class="services__text">
              обезопасить компанию от неприятных внешних посягательств, выявить недобросовестных
              работников и принять соответствующие меры. Сотрудниками нашего охранного предприятия
              будет выполнена вся необходимая работа по охране производства
            </div>
          </div>
        </div>
        <div class="services__items">
          {data &&
            data.map((item) => {
              return <ServiceItem {...item} />;
            })}
        </div>
      </div>
    </section>
  );
}

export default Services;

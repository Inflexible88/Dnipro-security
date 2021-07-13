import React from 'react';
import logoPng from '../img/logo.png';

function Header({ menuItems, phone, email }) {
  return (
    <header class="header" id="header">
      <div class="header__top">
        <div class="container">
          <div class="header__contacts">
            <a class="header__phone" href={`tel:${phone.replace('/s/g', '')}`}>
              {phone}
            </a>
            <a class="header__email" href={`mailto:${email}`}>
              {email}
            </a>
            <a href="#form" class="header__btn">
              Бесплатная консультация
            </a>
          </div>
        </div>
      </div>
      <div class="header__content">
        <div class="container">
          <div class="header__content-inner">
            <div class="header__logo">
              <a href="/">
                <img src={logoPng} alt="logo" />
              </a>
            </div>
            <nav class="menu">
              <div class="header__btn-menu">
                <span class="icon-bars"></span>
              </div>
              <ul>
                {menuItems &&
                  Object.entries(menuItems).map(([key, value]) => (
                    <li>
                      <a href={key}>{value}</a>
                    </li>
                  ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

import React from 'react';

const btnTitle = 'Бесплатная консультация';

function Footer({ phone, email, addressText, title, text }) {
  return (
    <footer class="footer" id="footer">
      <div class="footer__content">
        <div class="container">
          <div class="footer__inner">
            <div class="footer__info">
              <div class="footer__title">{title}</div>
              <div class="footer__text">{text}</div>
              <a href="#form" class="header__btn">
                {btnTitle}
              </a>
              <ul class="footer__list">
                <li>
                  <a class="footer__phone" href={`tel:${phone.replace('/s/g', '')}`}>
                    {phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${email}`}>{email}</a>
                </li>
                <li>
                  <span
                    class="footer__adress">{addressText}
                  </span>
                </li>
              </ul>
            </div>
            <div class="footer__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10593.570946277814!2d34.98588584268719!3d48.41060399465788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe4b75a283cad%3A0x2b760ad3e5529cc8!2z0LLRg9C70LjRhtGPINCa0YDQsNGB0L3QvtC_0ZbQu9GM0YHRjNC60LAsIDEyLCDQlNC90ZbQv9GA0L4sINCU0L3RltC_0YDQvtC_0LXRgtGA0L7QstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCDQo9C60YDQsNGX0L3QsCwgNDkwMDA!5e0!3m2!1suk!2sus!4v1624563774685!5m2!1suk!2sus"
                width="600"
                height="450"
                title="corp_address"
                styles="border: 0"
                allowfullscreen=""
                loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__copy">
        <div class="container">
          <div class="copy__text">© 2021 Inflexible Site Production</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

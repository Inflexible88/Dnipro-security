import React from 'react';
import { Field, Form, Formik } from 'formik';
import axios from 'axios';

function UserForm() {
  return (
    <section class="form" id="form">
      <div class="container">
        <div class="form__inner">
          <div class="form__content">
            <div class="form__title-box">
              <div class="form__title">Получить Консультацию</div>
              <div class="form__text">Комплексный подход к обеспечению безопасности</div>
            </div>
            <div class="form__box">
              <Formik
                initialValues={{ name: '' }}
                onSubmit={({name, email, phone, msg}, actions) => {
                  axios.post('/bot', {name, email, phone, msg})
                }}>
                {() => (
                  <Form>
                    <div class="form__box-inner">
                      <div class="form__box-left">
                        <label for="name">
                          Имя
                          <Field type="text" name="name" placeholder="Введите Ваше имя" />
                        </label>
                        <label for="tel">
                          Контактный телефон
                          <Field type="tel" name="phone" placeholder="Введите Ваш телефон" />
                        </label>
                        <label for="email">
                          E-mail
                          <Field type="email" name="email" placeholder="Введите Ваш имейл" />
                        </label>                      
                      </div>
                      <div class="form__box-right">
                        <label for="msg">
                          Сообщение
                          <Field type="tel" name="msg" placeholder="Введите Ваш вопрос" component="textarea" />
                        </label>
                        <button class="default-btn" type="submit">
                          Получить консультацию
                        </button>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserForm;

import i18next from 'i18next';
import gsap from 'gsap';
import axios from 'axios';
import * as yup from 'yup';
import FormMonster from '../../pug/components/form/form';
import SexyInput from '../../pug/components/input/input';
import ScrollTrigger from 'gsap/ScrollTrigger';

global.gsap = gsap;
global.ScrollTrigger = ScrollTrigger;
gsap.registerPlugin(ScrollTrigger);
global.axios = axios;

const form = [
  '[data-form]',
];

form.forEach((form) => {
  const $form = document.querySelector(form);
  if ($form) {
    new FormMonster({
      elements: {
        $form,
        showSuccessMessage: false,
        successAction: () => {
          function callThanksPopup(callSelector, contentToOpenSelector, closeSelector) {
            const submitBtn = document.querySelectorAll(callSelector);
            const content = document.querySelector(contentToOpenSelector);
            const close = document.querySelectorAll(closeSelector);

            submitBtn.forEach(elem => {
              content.classList.add('active');
            });

            close.forEach(elem => {
              elem.addEventListener('click', () => {
                content.classList.remove('active');
              });
            });
          }
          callThanksPopup('[data-btn-submit]','[data-thanks]','[data-close-thanks]');
          },
        $btnSubmit: $form.querySelector('[data-btn-submit]'),
        fields: {
          name: {
            inputWrapper: new SexyInput({ animation: 'none', $field: $form.querySelector('[data-field-name]') }),
            rule: yup.string().required(i18next.t('required')).matches(/^[aA-zZ\s]+$/, i18next.t('onlyletters')).trim(),
            defaultMessage: i18next.t('name'),
            valid: false,
            error: [],
          },
          phone: {
            inputWrapper: new SexyInput({ animation: 'none', $field: $form.querySelector('[data-field-phone]'), typeInput: 'phone' }),
            rule: yup
              .string()
              .required(i18next.t('required'))
              .min(17, i18next.t('field_too_short', { cnt: 19 - 7 })),
            defaultMessage: i18next.t('phone'),
            valid: false,
            error: [],
          },
        },
      },
    });

    $form.querySelectorAll('.js-mask-absolute').forEach(el => {
      el.addEventListener('click', () => {
        $form.querySelector('[name="phone"]').focus();
        $form.querySelector('.js-mask-absolute').style.display = 'none';
      }, false);
    })
  }
});


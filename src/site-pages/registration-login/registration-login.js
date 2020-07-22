/* eslint-disable no-undef */
import { importCommon, importContext } from '../../index';
import initRegistrationCards from '../../cards/registration-card/init';

importCommon();
importContext(require.context('./', true, /\.(js|scss)$/));

const url = new URL(window.location.href);
const isLogin = url.searchParams.get('login');

const template = require('./registration-login__card-template.pug');

const locals = { login: isLogin === 'true' };
const templateHTML = template(locals);

const $registrationLoginContent = $('.js-registration-login__content');
if (locals.login) {
  $registrationLoginContent.append(templateHTML);
} else {
  $registrationLoginContent.append(templateHTML);
  initRegistrationCards();
}

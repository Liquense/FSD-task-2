/* eslint-disable no-undef */
// jquery импортирована вебпаком
import { importCommon, importContext } from '../../index';
import initLoginCards from '../../cards/login-card/login-card';

importCommon();
importContext(require.context('./', true, /\.(js|scss)$/));

const url = new URL(window.location.href);
const isLogin = url.searchParams.get('login');

const template = require('./registration-login__card-template.pug');

const locals = { login: isLogin === 'true' };
const templateHTML = template(locals);

const $registrationLoginContent = $('.js-registration-login__content');
if (locals.login === 'true') {
  $registrationLoginContent.append(templateHTML);
} else {
  $registrationLoginContent.append(templateHTML);
}

initLoginCards();

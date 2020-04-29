/* eslint-disable no-undef */
// jquery импортирована вебпаком
import './registrationLogin.scss';
import '../../common';
import initRegistrationCard from '../../Cards/registrationCard/registrationCard';
import '../../Cards/loginCard/loginCard';


const url = new URL(window.location.href);
const isLogin = url.searchParams.get('login');

const template = require('./registrationLogin__cardTemplate.pug');

const locals = {
  login: isLogin,
};
const templateHTML = template(locals);

const $registrationLoginContent = $('.registrationLogin__content');
$registrationLoginContent.addClass(
  locals.login === 'true' ? 'registrationLogin__loginContainer' : 'registrationLogin__registrationContainer',
).html(templateHTML);

initRegistrationCard();

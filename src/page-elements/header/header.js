/* eslint-disable no-undef */
// jquery подключается вебпаком
const indexURL = 'landing-page.html';
const $logoLink = $('.js-header__logo-link');
$logoLink.attr('href', indexURL);

const registrationLoginURL = 'registration-login.html';
const loginURL = `${registrationLoginURL}?login=true`;
const registerURL = `${registrationLoginURL}?login=false`;

const $registerButton = $('.js-header__register-button > .js-button');
$registerButton.attr('href', registerURL);
const $loginButton = $('.js-header__login-button > .js-button');
$loginButton.attr('href', loginURL);

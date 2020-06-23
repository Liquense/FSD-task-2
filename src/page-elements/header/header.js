/* eslint-disable no-undef */
// jquery подключается вебпаком
import '../../blocks/button/button';

import './header.scss';

import './__menu-item/header__menu-item';
import './_narrow/header__narrow.scss';

const indexURL = 'landing-page.html';
const $logoLink = $('.header__logo-link');
$logoLink.attr('href', indexURL);

const registrationLoginURL = 'registration-login.html';
const loginURL = `${registrationLoginURL}?login=true`;
const registerURL = `${registrationLoginURL}?login=false`;

const $registerButton = $('.header__register-button');
$registerButton.attr('href', registerURL);
const $loginButton = $('.header__login-button');
$loginButton.attr('href', loginURL);

/* eslint-disable no-undef */
// jquery подключается вебпаком
import '../../blocks/Button/button';
import './__menuItem/header__menuItem';
import './header.scss';
import './_narrow/header__narrow.scss';

const indexURL = 'landingPage.html';
const $logoLink = $('.header__logoLink');
$logoLink.attr('href', indexURL);

const registrationLoginURL = 'registrationLogin.html';
const loginURL = `${registrationLoginURL}?login=true`;
const registerURL = `${registrationLoginURL}?login=false`;

const $registerButton = $('.header__registerButton');
$registerButton.attr('href', registerURL);
const $loginButton = $('.header__loginButton');
$loginButton.attr('href', loginURL);

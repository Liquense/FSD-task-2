/* eslint-disable no-undef */
// jquery подключается вебпаком
import './header.scss';
import './__menuItem/header__menuItem';
import '../../blocks/Button/button';

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

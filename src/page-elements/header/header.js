class Header {
  static registrationLoginURL = 'registration-login.html';

  static loginURL = `${Header.registrationLoginURL}?login=true`;

  static registerURL = `${Header.registrationLoginURL}?login=false`;

  static indexURL = 'landing-page.html';

  $header;

  $logo;

  $registerButton;

  $loginButton;

  constructor(rootElement) {
    this._initElements(rootElement);
    this._initLinks();
  }

  _initElements(rootElement) {
    this.$header = $(rootElement);
    this.$logo = this.$header.find('.js-header__logo-link');
    this.$registerButton = this.$header.find('.js-header__register-button .js-button__control');
    this.$loginButton = this.$header.find('.js-header__login-button .js-button__control');
  }

  _initLinks() {
    this.$registerButton.attr('href', Header.registerURL);
    this.$loginButton.attr('href', Header.loginURL);
    this.$logo.attr('href', Header.indexURL);
  }
}

export default Header;

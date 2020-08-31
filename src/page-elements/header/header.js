class Header {
  $header;

  $logo;

  $registerButton;

  $loginButton;

  constructor(rootElement) {
    this._initElements(rootElement);
  }

  _initElements(rootElement) {
    this.$header = $(rootElement);
    this.$logo = this.$header.find('.js-header__logo-link');
    this.$registerButton = this.$header.find('.js-header__register-button .js-button__control');
    this.$loginButton = this.$header.find('.js-header__login-button .js-button__control');
  }
}

export default Header;

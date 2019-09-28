const url = new URL(window.location.href);
let isLogin = url.searchParams.get("login");

let template = require("./registrationLogin.pug");
let locals = {
	login: isLogin
};
const templateHTML = template(locals);

$("body").html(templateHTML);

import "./registrationLogin.scss"
import ("../Cards/registrationCard/registrationCard");
import ("../Cards/loginCard/loginCard");
import ("../common");

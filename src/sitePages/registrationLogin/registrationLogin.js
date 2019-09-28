const url = new URL(window.location.href);
let isLogin = url.searchParams.get("login");

let template = require("./registrationLogin__cardTemplate.pug");
let locals = {
	login: isLogin
};
const templateHTML = template(locals);

$(".registrationLogin__content").addClass(
	locals.login === "true" ? "registrationLogin__loginContainer" : "registrationLogin__registrationContainer"
).html(templateHTML);

import "./registrationLogin.scss"
import "../../common";
import ("../../Cards/registrationCard/registrationCard");
import ("../../Cards/loginCard/loginCard");

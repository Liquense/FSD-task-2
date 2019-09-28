import "./header.scss"
import "./__menuItem/header__menuItem"
import "../../blocks/Button/button"

const indexURL = "landingPage.html";
$(".header__logoLink").attr("href", indexURL);

let registrationLoginURL = `registrationLogin.html`;
const loginURL = registrationLoginURL + "?login=true";
const registerURL = registrationLoginURL + "?login=false";

$(".header__registerButton").attr("href", registerURL);
$(".header__loginButton").attr("href", loginURL);

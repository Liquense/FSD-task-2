import "../common"
import "../Cards/findRoomCard/findRoomCard"
import "./landingPage.scss"


const imagePaths =
	[
		require('../assets/images/room-big-1.jpg'),
		require('../assets/images/room-big-2.jpg'),
		require('../assets/images/room-big-3.jpg')
	];
$('.landingPage__roomContainer').each(function () {
	const $container = $(this);

	const randomNum = Math.floor(Math.random() * imagePaths.length);
	$container.css('background-image', `url(${imagePaths[randomNum]})`);
});

let registrationLoginURL = new URL(`${document.location.origin}/registrationLogin.html`);
registrationLoginURL.searchParams.set("login", "true");
const loginURL = new URL(registrationLoginURL);
registrationLoginURL.searchParams.set("login", "false");
const registerURL = new URL(registrationLoginURL);

$(".header__registerButton").attr("href", registerURL);
$(".header__loginButton").attr("href", loginURL);


//import "jquery"
import "jquery-ui"
//slider
import "jquery-ui/ui/widgets/slider"
import "jquery-ui/themes/base/slider.css"
//datepicker
import "air-datepicker"
//import "air-datepicker/dist/css/datepicker.css"
//masked input
import "../vendor/jquery.maskedinput/src/jquery.maskedinput"

import "./styles.scss"
import "./common/fonts.scss"
import "./common/functions"

import "b:text m:type=label-CTA|itemTitle|regular|widgetTitle"

//BLOCKS

//button
import "b:button m:type=bordered|filled|text"
import "b:button m:hovered"
import "b:button m:width=wide"
//link
import "b:link m:hovered"
//input
import "b:input m:type=text"
import "./blocks/Input/_masked/input_masked.scss"
import "./blocks/Input/_masked/input_masked.js" //импорт с бэм-лоадера даёт ошибку
import "./blocks/Input/_type/_datepicker/input_type_datepicker.scss"
import "./blocks/Input/_type/_datepicker/input_type_datepicker.js"
import "./blocks/Input/_dropdown/input_dropdown.scss"
import "./blocks/Input/_dropdown/input_dropdown.js"
//slider
import "b:slider"
import "./blocks/Slider/slider"
import "./blocks/Slider/_range/Slider_range.js"

//----

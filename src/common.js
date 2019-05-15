import "jquery"
//slider
import "jquery-ui/ui/widgets/slider"
import "jquery-ui/themes/base/slider.css"
//masked input
import "../vendor/jquery.maskedinput/src/jquery.maskedinput"

import "./styles.scss"
import "./globals/fonts.scss"

import "b:text m:type=label-CTA|itemTitle|regular|widgetTitle"

//BLOCKS

//button
import "b:button m:type=bordered|filled|text"
import "b:button m:hovered"
import "b:button m:width=wide"
//link
import "b:link m:hovered"
//input
import "./blocks/Input/_masked/input_masked.scss"
import "./blocks/Input/_masked/input_masked.js" //импорт с бэм-лоадера даёт ошибку
//text field
import "b:textField"
//slider
import "./blocks/Slider/_range/Slider_range.js"
import "b:slider"

//----

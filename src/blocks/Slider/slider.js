import "jquery-ui/ui/widgets/slider"
import "./_range/Slider_range"
import "./slider.scss"
import "jquery-ui/themes/base/slider.css"
import {formatNumber} from "../../common/functions";

$(".slider__control:not(.slider__control_range)").each(function () {
    const minimalValue = Number($(this).attr("data-min"));
    const maximumValue = Number($(this).attr("data-max"));
    const step = Number($(this).attr("data-step"));

    $(this).slider({
        min: minimalValue,
        max: maximumValue,
        step: step,
        animate: "fast",
        change: sliderValuesChange,
        slide: sliderHandlerValueChange,
    });

    //установка начальных значений (через инициализацию не триггерился change, а как получить UI из ивентов плагина (кроме воссоздания самому) я не знаю)
    $(this).slider("value", maximumValue/2);
    $(this).children(".ui-slider-handle").first().attr("sliderHandleValue", maximumValue/2);
});

function sliderValuesChange(event, ui) {
    $(ui.handle).closest(".slider").find(".slider__value").text(
        `${formatNumber(ui.value, "")}₽`
    );
}

export function sliderHandlerValueChange(event, ui){
    $(ui.handle).attr("sliderHandleValue", ui.value);
}

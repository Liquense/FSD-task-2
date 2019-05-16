import $ from "jquery"
import {formatNumber} from "../../../common/functions";
import {sliderHandlerValueChange} from "../slider";

$(".slider__control_range").each(function () {
    const minimalValue = Number($(this).attr("data-min"));
    const maximumValue = Number($(this).attr("data-max"));
    const step = Number($(this).attr("data-step"));

    $(this).removeAttr("data-min");
    $(this).removeAttr("data-max");
    $(this).removeAttr("data-step");

    $(this).slider({
        min: minimalValue,
        max: maximumValue,
        step: step,
        range: true,
        animate: "fast",
        change: sliderValuesChange,
        slide: sliderHandlerValueChange,
    });

    //установка начальных значений (через инициализацию не триггерился change, а как получить UI из ивентов плагина (кроме воссоздания самому) я не знаю)
    $(this).slider("values", [minimalValue, maximumValue]);
    $(this).children(".ui-slider-handle").first().attr("sliderHandleValue", minimalValue);
    $(this).children(".ui-slider-handle").last().attr("sliderHandleValue", maximumValue);
});

function sliderValuesChange(event, ui) {
    $(ui.handle).closest(".slider").find(".slider__value").text(
        `${formatNumber(ui.values[0], "")}₽ - ${formatNumber(ui.values[1], "")}₽`
    );
}

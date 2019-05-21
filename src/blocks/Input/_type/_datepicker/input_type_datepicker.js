let confirmButton = '<a class="link text_type_label-CTA input_type_datepicker__confirmButton" href="#">Применить</link>';
let clearButton = '<a class="link text_type_label-CTA input_type_datepicker__clearButton link_hovered" href="#">Очистить</link>';
$(".input__control_type_datepicker").each(function () {
    $(this).datepicker({
        range: true,
        //clearButton: true,
        todayButton: true,
    });
});

$('.datepicker').each(function () {
    $(this).find('.datepicker--button[data-action="today"]').each(function () {
        $(confirmButton).insertAfter($(this));
        $(clearButton).insertAfter($(this));
        $(this).remove();
    });

    // $(this).find('.datepicker--button[data-action="clear"]').each(function () {
    //     $(this).removeClass();
    //     $(this).addClass("link text_type_label-CTA");
    // });
});

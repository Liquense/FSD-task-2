let confirmButton = '<a class="link text_type_label-CTA input_type_datepicker__confirmButton" href="#">Применить</link>';
let clearButton = '<a class="link text_type_label-CTA input_type_datepicker__clearButton link_hovered" href="#">Очистить</link>';

$(".input__control_type_datepicker").each(function () {
    let datepicker = $(this).datepicker({
        range: true,
        todayButton: true,
        offset: 5,
        navTitles: {
            days: 'MM yyyy'
        },
    }).data('datepicker');
    console.log(datepicker);
    datepicker.$nav.addClass("text_type_itemTitle");
    datepicker.$datepicker.find('.datepicker--button[data-action="today"]').remove();
    datepicker.$datepicker.find(".datepicker--buttons").append(clearButton);
    datepicker.$datepicker.find(".datepicker--buttons").append(confirmButton);
});

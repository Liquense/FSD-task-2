import "../../../../assets/images/arrow_back.svg"
let confirmButton = '<a class="link text_type_label-CTA input_type_datepicker__confirmButton" href="#">Применить</link>';
let clearButton = '<a class="link text_type_label-CTA input_type_datepicker__clearButton link_hovered" href="#">Очистить</link>';
//let svgArrow = '<div class="datepicker--nav-action" data-action="prev"><svg><path d="M 10,5 l -5,5 l 5,5"></path></svg></div>';
let svgArrow = '<img src="./images/arrow_back.svg" alt="назад" class="datepicker--nav-action" data-action="prev">';


$(".input__control_type_datepicker").each(function () {
    let datepicker = $(this).datepicker({
        range: true,
        todayButton: true,
        offset: 5,
        navTitles: {
            days: 'MM yyyy'
        },
        inline: true,
        minDate: new Date(),
        onShow: function () {
            datepicker.$nav.prepend(svgArrow);
        },
        onChangeMonth: function () {
            datepicker.$nav.prepend(svgArrow);
        },
        onChangeView: function () {
            datepicker.$nav.prepend(svgArrow);
        },
    }).data('datepicker');
    console.log(datepicker.$nav);
    datepicker.$nav.prepend(svgArrow);
    datepicker.$nav.addClass("text_type_itemTitle");
    datepicker.$datepicker.find('.datepicker--button[data-action="today"]').remove();
    datepicker.$datepicker.find(".datepicker--buttons").append(clearButton);
    datepicker.$datepicker.find(".datepicker--buttons").append(confirmButton);
});

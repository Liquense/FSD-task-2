$(".input__control_type_datepicker").each(function () {
    $(this).datepicker({
        range: true,
        clearButton: true,
    });

    console.log("i'm datepicker");
});

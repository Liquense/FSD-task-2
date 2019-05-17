import $ from "jquery"

$(document).ready(function () {
    $.mask.definitions['m'] = "[012]";
    $.mask.definitions['d'] = "[0123]";
    $(".input__control_masked").mask("d9.m9.9999",
        {
            completed: function() {
              console.log("Введена дата: " +this.val());
            },
            placeholder: "ДД.ММ.ГГГГ",
            autoclear: false
        });
});

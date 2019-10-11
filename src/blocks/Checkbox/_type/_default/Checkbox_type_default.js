import "./Checkbox_type_default.scss"
import {initCheckbox} from "../../Checkbox";

initCheckbox(".checkbox__hiddenButton_type_default", {
    icon: "checkbox__button checkbox__button_type_default",
    iconSpace: "checkbox__iconSpace checkbox__iconSpace_type_default"
});

$(".checkbox__button_type_default").text("check");

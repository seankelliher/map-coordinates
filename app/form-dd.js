import {monitorDdLatConvert, monitorDdLonConvert} from "./inputs-dd.js";
import {monitorDdLatClear, monitorDdLonClear} from "./clear.js";

//Show the DD to DMS form elements.
function showDdForm() {
    "use strict";

    //Gather all form elements.
    const forms = document.querySelectorAll("form");
    const formsArray = Array.from(forms); //Works without converting too.

    //Shows the DD to DMS form. Hides the other.
    formsArray.forEach(function (form) {
        if (form.className === "dd-form") {

            //Show the DD to DMS form.
            form.style.display = "block";

            //Activate event listeners on form's "clear" buttons.
            monitorDdLatClear();
            monitorDdLonClear();

            //Activate event listeners on form's "convert" buttons.
            monitorDdLatConvert();
            monitorDdLonConvert();

            //Get DD to DMS tab. Add class to highlight it.
            const ddTab = document.getElementById("dd-tab");
            ddTab.classList.add("selected");
        } else if (form.className === "dms-form") {

            //Hide the DMS to DD form.
            form.style.display = "none";

            //Get DMS to DD tab. Remove class that highlights it.
            const dmsTab = document.getElementById("dms-tab");
            dmsTab.classList.remove("selected");
        }
    });
}

export {showDdForm};
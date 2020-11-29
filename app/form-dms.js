import {
    monitorBtnDmsLat,
    monitorBtnDmsLon
} from "./inputs-dms.js";

//Show the DMS to DD form elements.
function showDmsForm() {
    "use strict";

    //Gather form elements.
    const forms = document.querySelectorAll("form");
    const formsArray = Array.from(forms); //Works without converting too.

    formsArray.forEach(function (form) {
        if (form.className === "dms-to-dd") {

            //Show selected forms.
            form.style.display = "block";

            //Activate event listeners on forms' "convert" buttons.
            monitorBtnDmsLat();
            monitorBtnDmsLon();

            //Get clicked tab. Add class to highlight it.
            const dmsTab = document.getElementById("dms-to-dd");
            dmsTab.classList.add("selected");
        } else if (form.className === "dd-to-dms") {

            //Hide "not selected" forms.
            form.style.display = "none";

            //Get "not clicked" tab. Remove class that highlights it.
            const ddTab = document.getElementById("dd-to-dms");
            ddTab.classList.remove("selected");
        }
    });
}

export {showDmsForm};
import {monitorDmsLatConvert, monitorDmsLonConvert} from "./inputs-dms.js";

//Show the DMS to DD form elements.
function showDmsForm() {
    "use strict";

    //Gather all form elements.
    const forms = document.querySelectorAll("form");
    const formsArray = Array.from(forms); //Works without converting too.

    //Show the DMS to DD form. Hide the other.
    formsArray.forEach(function (form) {
        if (form.className === "dms-to-dd") {

            //Show the DMS to DD form.
            form.style.display = "block";

            //Activate event listeners on form's "convert" buttons.
            monitorDmsLatConvert();
            monitorDmsLonConvert();

            //Get DMS to DD tab. Add class to highlight it.
            const dmsTab = document.getElementById("dms-to-dd");
            dmsTab.classList.add("selected");
        } else if (form.className === "dd-to-dms") {

            //Hide the DD to DMS form.
            form.style.display = "none";

            //Get DD to DMS tab. Remove class that highlights it.
            const ddTab = document.getElementById("dd-to-dms");
            ddTab.classList.remove("selected");
        }
    });
}

export {showDmsForm};
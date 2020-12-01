import {monitorBtnDdLat, monitorBtnDdLon} from "./inputs-dd.js";

//Show the DD to DMS form elements.
function showDdForm() {
    "use strict";

    //Gather all form elements.
    const forms = document.querySelectorAll("form");
    const formsArray = Array.from(forms); //Works without converting too.

    //Show the DD to DMS form. Hide the other.
    formsArray.forEach(function (form) {
        if (form.className === "dd-to-dms") {

            //Show the DD to DMS form.
            form.style.display = "block";

            //Activate event listeners on form's "convert" buttons.
            monitorBtnDdLat();
            monitorBtnDdLon();

            //Get DD to DMS tab. Add class to highlight it.
            const ddTab = document.getElementById("dd-to-dms");
            ddTab.classList.add("selected");
        } else if (form.className === "dms-to-dd") {

            //Hide the DMS to DD form.
            form.style.display = "none";

            //Get DMS to DD tab. Remove class that highlights it.
            const dmsTab = document.getElementById("dms-to-dd");
            dmsTab.classList.remove("selected");
        }
    });
}

export {showDdForm};
import {
    monitorBtnDdLat,
    monitorBtnDdLon
} from "./inputs-dd.js";

//Show the DD to DMS form elements.
function showDdForm() {
    "use strict";

    //Gather form elements.
    const forms = document.querySelectorAll("form");
    const formsArray = Array.from(forms); //Works without converting too.

    //Show the selected forms. Hide the other.
    formsArray.forEach(function (form) {
        if (form.className === "dd-to-dms") {

            //Show selected forms.
            form.style.display = "block";

            //Activate event listeners on forms.
            monitorBtnDdLat();
            monitorBtnDdLon();

            //Get clicked tab. Add class to highlight it.
            const ddTab = document.getElementById("dd-to-dms");
            ddTab.classList.add("selected");
        } else if (form.className === "dms-to-dd") {

            //Hide "not selected" forms.
            form.style.display = "none";

            //Get "not clicked" tab. Remove class that highlights it.
            const dmsTab = document.getElementById("dms-to-dd");
            dmsTab.classList.remove("selected");
        }
    });
}

export {showDdForm};
import { showDmsToDdForm } from "./dms-to-dd-form.js";
import { showDdToDmsForm } from "./dd-to-dms-form.js";


//Monitor the tabs for clicks.
function monitorTabs () {
    "use strict";

    //Retrieve the nav (tabs are inside it).
    const nav = document.querySelector("nav");

    //Get the clicked tab's id.
    //Invoke functions to show/hide those form elements.
    nav.addEventListener("click", function (event) {
        if (event.target.id === "dms-to-dd") {
            showDmsToDdForm();
        } else if (event.target.id === "dd-to-dms") {
            showDdToDmsForm();
        }
    });
}

export { monitorTabs };
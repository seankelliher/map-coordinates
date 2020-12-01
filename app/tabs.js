import {showDmsForm} from "./form-dms.js";
import {showDdForm} from "./form-dd.js";

//Monitor the tabs for clicks.
function monitorTabs() {
    "use strict";

    //Retrieve the nav (tabs are inside it).
    const nav = document.querySelector("nav");

    //Get the clicked tab's id.
    //Invoke functions to show/hide those form elements.
    nav.addEventListener("click", function (event) {
        if (event.target.id === "dms-to-dd") {
            showDmsForm();
        } else if (event.target.id === "dd-to-dms") {
            showDdForm();
        }
    });
}

export {monitorTabs};
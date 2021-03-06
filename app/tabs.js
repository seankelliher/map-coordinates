//When DOM loads, "index" module signals "tabs" module.
//Tabs module monitors tabs on page for clicks.
//When user clicks, "tabs" module signals, "forms" module.
//Forms module shows/hides forms, highlights/un-highlights tabs on page.

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
        if (event.target.id === "dms-tab") {
            showDmsForm();
        } else if (event.target.id === "dd-tab") {
            showDdForm();
        }
    });
}

export {monitorTabs};
import {showDmsForm} from "./app/form-dms.js";
import {monitorTabs} from "./app/tabs.js";

//Monitor DOM, after it loads, invoke functions.
//Functions are in "form" and "tabs" modules.

document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    //Display the "DMS to DD" tab.
    showDmsForm();

    //Monitor the tabs for clicks.
    monitorTabs();
});

//NOTE: When you see "DMS" or "DD" mentioned in a file name or function name,
//it refers to the origin format. For example, "showDmsForm()" is the form that
//converts coordinates from "DMS" to "DD".
import { showDmsToDdForm } from "./app/dms-to-dd-form.js";
import { monitorTabs } from "./app/tabs.js";

//Monitor page, after it loads invoke function.
document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    //Display the "DMS to DD" tab.
    showDmsToDdForm();

    //Monitor the tabs for clicks.
    monitorTabs();
});
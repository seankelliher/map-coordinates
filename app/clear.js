//Clear input fields. Used across forms.
function clearInputs(form, sum) {
    "use strict";

    //Gather all inputs within selected form.
    const inputs = form.querySelectorAll("input");

    //Clear the inputs.
    inputs.forEach(function (input) {
        if (input.type === "text") {
            input.value = "";
        }
        if (input.type === "radio") {
            if (input.hasAttribute("checked") === true) {
                input.checked = true;
            } else {
                input.checked = false;
            }
        }
    });

    //Get the selected sum. Clear it.
    sum.textContent = "";
}

//Below functions are same, but for different forms.
//Monitor the "clear" buttons in each form.
//If clicked, send paramenters to the above function to clear inputs, text.

//DMS to DD form - Latitude.
function monitorDmsLatClear() {
    "use strict";

    const dmsLatClear = document.getElementById("dms-lat-clear");
    const dmsLatForm = document.getElementById("dms-lat-form");
    const dmsLatSum = document.getElementById("dms-lat-sum");

    dmsLatClear.addEventListener("click", function () {
        clearInputs(dmsLatForm, dmsLatSum);
    });
}

//DMS to DD form - Longitude.
function monitorDmsLonClear() {
    "use strict";

    const dmsLonClear = document.getElementById("dms-lon-clear");
    const dmsLonForm = document.getElementById("dms-lon-form");
    const dmsLonSum = document.getElementById("dms-lon-sum");

    dmsLonClear.addEventListener("click", function () {
        clearInputs(dmsLonForm, dmsLonSum);
    });
}

//DD to DMS form - Latitude.
function monitorDdLatClear() {
    "use strict";

    const ddLatClear = document.getElementById("dd-lat-clear");
    const ddLatForm = document.getElementById("dd-lat-form");
    const ddLatSum = document.getElementById("dd-lat-sum");

    ddLatClear.addEventListener("click", function () {
        clearInputs(ddLatForm, ddLatSum);
    });
}

//DD to DMS form - Longitude.
function monitorDdLonClear() {
    "use strict";

    const ddLonClear = document.getElementById("dd-lon-clear");
    const ddLonForm = document.getElementById("dd-lon-form");
    const ddLonSum = document.getElementById("dd-lon-sum");

    ddLonClear.addEventListener("click", function () {
        clearInputs(ddLonForm, ddLonSum);
    });
}

export {
    monitorDmsLatClear,
    monitorDmsLonClear,
    monitorDdLatClear,
    monitorDdLonClear
};
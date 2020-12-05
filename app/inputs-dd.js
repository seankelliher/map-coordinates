import {integrityCheckDdLat, integrityCheckDdLon} from "./integrity-dd.js";
import {doTheMathDd} from "./math-dd.js";

//Below functions are same, but for different forms.
//Get the "convert" button, add event listener. When user clicks...
//Gather form's input values, send to "integrity" module.
//Integrity module returns either appropiate error message or "false".
//If return "false", then send input values to "math" module.
//Math module converts input value and returns result.

//DD to DMS form - Latitude.
function monitorDdLatConvert() {
    "use strict";

    const ddLatConvert = document.getElementById("dd-lat-convert");

    ddLatConvert.addEventListener("click", function () {

        const deci = document.getElementById("deci-lat").value;

        const ddLatSum = document.getElementById("dd-lat-sum");
        const integrityError = integrityCheckDdLat(deci);
        const lines = "parallels";

        if (integrityError === false) {
            ddLatSum.textContent = doTheMathDd(deci, lines);
        } else {
            ddLatSum.textContent = integrityError;
        }
    });
}

//DD to DMS form - Longitude.
function monitorDdLonConvert() {
    "use strict";

    const ddLonConvert = document.getElementById("dd-lon-convert");

    ddLonConvert.addEventListener("click", function () {

        const deci = document.getElementById("deci-lon").value;

        const ddLonSum = document.getElementById("dd-lon-sum");
        const integrityError = integrityCheckDdLon(deci);
        const lines = "meridians";

        if (integrityError === false) {
            ddLonSum.textContent = doTheMathDd(deci, lines);
        } else {
            ddLonSum.textContent = integrityError;
        }
    });
}

export {monitorDdLatConvert, monitorDdLonConvert};
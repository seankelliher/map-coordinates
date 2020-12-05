import {integrityCheckDmsLat, integrityCheckDmsLon} from "./integrity-dms.js";
import {doTheMathDms} from "./math-dms.js";

//Below functions are same, but for different forms.
//Get the "convert" button, add event listener. When user clicks...
//Gather form's input values, send to "integrity" module.
//Integrity module returns either appropiate error message or "false".
//If return "false", then send input values to "math" module.
//Math module converts input value and returns result.

//DMS to DD form - Latitude.
function monitorDmsLatConvert() {
    "use strict";

    //Get the "convert" button.
    const dmsLatConvert = document.getElementById("dms-lat-convert");

    dmsLatConvert.addEventListener("click", function () {

        const deg = document.getElementById("deg-lat").value;
        const min = document.getElementById("min-lat").value;
        const sec = document.getElementById("sec-lat").value;

        const dmsLatSum = document.getElementById("dms-lat-sum");
        const integrityError = integrityCheckDmsLat(deg, min, sec);
        const lines = "parallels";

        if (integrityError === false) {
            dmsLatSum.textContent = doTheMathDms(deg, min, sec, lines);
        } else {
            dmsLatSum.textContent = integrityError;
        }
    });
}

//DMS to DD form - Longitude.
function monitorDmsLonConvert() {
    "use strict";

    const dmsLonConvert = document.getElementById("dms-lon-convert");

    dmsLonConvert.addEventListener("click", function () {

        const deg = document.getElementById("deg-lon").value;
        const min = document.getElementById("min-lon").value;
        const sec = document.getElementById("sec-lon").value;

        const dmsLonSum = document.getElementById("dms-lon-sum");
        const integrityError = integrityCheckDmsLon(deg, min, sec);
        const lines = "meridians";

        if (integrityError === false) {
            dmsLonSum.textContent = doTheMathDms(deg, min, sec, lines);
        } else {
            dmsLonSum.textContent = integrityError;
        }
    });
}

export {monitorDmsLatConvert, monitorDmsLonConvert};
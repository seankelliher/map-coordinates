import {integrityCheckDdLat, integrityCheckDdLon} from "./integrity-dd.js";
import {doTheMathDd} from "./math-dd.js";

//Get input from DD to DMS form - Latitude.
//Send to other functions to check integrity, do conversion.
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

//Get input from DD to DMS form - Longitude.
//Send to other functions to check integrity, do conversion.
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
import {integrityCheckDmsLat, integrityCheckDmsLon} from "./integrity-dms.js";
import {doTheMathDms} from "./math-dms.js";

//Get input from DMS to DD form - Latitude.
//Send to other functions to check integrity, do conversion.
function monitorDmsLatConvert() {
    "use strict";

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

//Get input from DMS to DD form - Longitude.
//Send to other functions to check integrity, do conversion.
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
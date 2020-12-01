import {integrityCheckDmsLat, integrityCheckDmsLon} from "./integrity-dms.js";
import {doTheMathDms} from "./math-dms.js";

function monitorBtnDmsLat() {
    "use strict";

    const dmsLatButton = document.getElementById("dms-lat-btn");

    dmsLatButton.addEventListener("click", function () {

        const degLat = document.getElementById("deg-lat").value;
        const minLat = document.getElementById("min-lat").value;
        const secLat = document.getElementById("sec-lat").value;

        const dmsLatSum = document.getElementById("dms-lat-sum");
        const integrityError = integrityCheckDmsLat(degLat, minLat, secLat);
        const lines = "parallels";

        if (integrityError === false) {
            dmsLatSum.textContent = doTheMathDms(degLat, minLat, secLat, lines);
        } else {
            dmsLatSum.textContent = integrityError;
        }

    });
}

function monitorBtnDmsLon() {
    "use strict";

    const dmsLonButton = document.getElementById("dms-lon-btn");

    dmsLonButton.addEventListener("click", function () {

        const degLon = document.getElementById("deg-lon").value;
        const minLon = document.getElementById("min-lon").value;
        const secLon = document.getElementById("sec-lon").value;

        const dmsLonSum = document.getElementById("dms-lon-sum");
        const integrityError = integrityCheckDmsLon(degLon, minLon, secLon);
        const lines = "meridians";

        if (integrityError === false) {
            dmsLonSum.textContent = doTheMathDms(degLon, minLon, secLon, lines);
        } else {
            dmsLonSum.textContent = integrityError;
        }

    });
}

export {monitorBtnDmsLat, monitorBtnDmsLon};

//Check modules and use strict. I don't think its necessary.
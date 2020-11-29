import {
    integrityCheckDmsLat,
    integrityCheckDmsLon
} from "./integrity-dms.js";

function monitorBtnDmsLat() {
    "use strict";

    const dmsLatButton = document.getElementById("dms-lat-btn");

    dmsLatButton.addEventListener("click", function () {

        const degLat = document.getElementById("deg-lat").value;
        const minLat = document.getElementById("min-lat").value;
        const secLat = document.getElementById("sec-lat").value;

        const dmsLatSum = document.getElementById("dms-lat-sum");

        dmsLatSum.textContent = integrityCheckDmsLat(degLat, minLat, secLat);

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

        dmsLonSum.textContent = integrityCheckDmsLon(degLon, minLon, secLon);

    });
}

export {
    monitorBtnDmsLat,
    monitorBtnDmsLon,
};

//Check modules and use strict. I don't think its necessary.
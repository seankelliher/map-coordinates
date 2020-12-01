import {integrityCheckDdLat, integrityCheckDdLon} from "./integrity-dd.js";
import {doTheMathDd} from "./math-dd.js";

function monitorBtnDdLat() {
    "use strict";

    const ddLatButton = document.getElementById("dd-lat-btn");

    ddLatButton.addEventListener("click", function () {
        
        const deciLat = document.getElementById("deci-lat").value;

        const ddLatSum = document.getElementById("dd-lat-sum");
        const integrityError = integrityCheckDdLat(deciLat);
        const lines = "parallels";

        if (integrityError === false) {
            ddLatSum.textContent = doTheMathDd(deciLat, lines);
        } else {
            ddLatSum.textContent = integrityError;
        }

    });
}

function monitorBtnDdLon() {
    "use strict";

    const ddLonButton = document.getElementById("dd-lon-btn");

    ddLonButton.addEventListener("click", function () {
        
        const deciLon = document.getElementById("deci-lon").value;

        const ddLonSum = document.getElementById("dd-lon-sum");
        const integrityError = integrityCheckDdLon(deciLon);
        const lines = "meridians";

        if (integrityError === false) {
            ddLonSum.textContent = doTheMathDd(deciLon, lines);
        } else {
            ddLonSum.textContent = integrityError;
        }

    });
}

export {
    monitorBtnDdLat,
    monitorBtnDdLon
};

//Check modules and use strict. I don't think its necessary.
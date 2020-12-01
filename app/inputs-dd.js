import {integrityCheckDdLat, integrityCheckDdLon} from "./integrity-dd.js";
import {doTheMathDd} from "./math-dd.js";

function monitorBtnDdLat() {
    "use strict";

    const ddLatButton = document.getElementById("dd-lat-btn");

    ddLatButton.addEventListener("click", function () {
        
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

function monitorBtnDdLon() {
    "use strict";

    const ddLonButton = document.getElementById("dd-lon-btn");

    ddLonButton.addEventListener("click", function () {
        
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

export {
    monitorBtnDdLat,
    monitorBtnDdLon
};

//Check modules and use strict. I don't think its necessary.
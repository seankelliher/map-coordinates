import {
    integrityCheckDdLat,
    integrityCheckDdLon
} from "./integrity-dd.js";

function monitorBtnDdLat() {
    "use strict";

    const ddLatButton = document.getElementById("dd-lat-btn");

    ddLatButton.addEventListener("click", function () {
        
        const deciLat = document.getElementById("deci-lat").value;

        const ddLatSum = document.getElementById("dd-lat-sum");

        ddLatSum.textContent = integrityCheckDdLat(deciLat);

    });
}

function monitorBtnDdLon() {
    "use strict";

    const ddLonButton = document.getElementById("dd-lon-btn");

    ddLonButton.addEventListener("click", function () {
        
        const deciLon = document.getElementById("deci-lon").value;

        const ddLonSum = document.getElementById("dd-lon-sum");

        ddLonSum.textContent = integrityCheckDdLon(deciLon);
        
    });
}

export {
    monitorBtnDdLat,
    monitorBtnDdLon
};

//Check modules and use strict. I don't think its necessary.
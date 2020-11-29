import {
    integrityCheckDdLat,
    integrityCheckDdLon
} from "./integrity-dd.js";

function monitorBtnDdLat() {
    "use strict";

    const ddLatButton = document.getElementById("dd-lat-btn");

    ddLatButton.addEventListener("click", function (event) {
        alert("DD to DMS Latitude Button");
        event.stopImmediatePropagation();
    });
}

function monitorBtnDdLon() {
    "use strict";

    const ddLongButton = document.getElementById("dd-lon-btn");

    ddLongButton.addEventListener("click", function (event) {
        alert("DD to DMS Longitude Button");
        event.stopImmediatePropagation();
    });
}

export {
    monitorBtnDdLat,
    monitorBtnDdLon
};

//Check modules and use strict. I don't think its necessary.
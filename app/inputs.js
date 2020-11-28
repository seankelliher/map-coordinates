function monitorBtnDmsLat() {
    "use strict";

    const dmsLatButton = document.getElementById("dms-lat-btn");

    dmsLatButton.addEventListener("click", function (event) {
        alert("DMS to DD Latitude Button");
        event.stopImmediatePropagation();
    });
}

function monitorBtnDmsLon() {
    "use strict";

    const dmsLongButton = document.getElementById("dms-lon-btn");

    dmsLongButton.addEventListener("click", function (event) {
        alert("DMS to DD Longitude Button");
        event.stopImmediatePropagation();
    });
}

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
    monitorBtnDmsLat,
    monitorBtnDmsLon,
    monitorBtnDdLat,
    monitorBtnDdLon
};

//Check modules and use strict. I don't think its necessary.
function monitorDmsLatClear() {
    "use strict";

    //Retrieve "clear" button.
    const dmsLatClear = document.getElementById("dms-lat-clear");

    //Add event listener. Clear inputs when clicked.
    dmsLatClear.addEventListener("click", function () {
        //do something.
        window.alert("clear button clicked");
    });
}

function monitorDmsLonClear() {
    "use strict";

    //Retrieve "clear" button.
    const dmsLonClear = document.getElementById("dms-lon-clear");

    //Add event listener. Clear inputs when clicked.
    dmsLonClear.addEventListener("click", function () {
        //do something.
        window.alert("clear button clicked");
    });
}
function monitorDdLatClear() {
    "use strict";

    //Retrieve "clear" button.
    const ddLatClear = document.getElementById("dd-lat-clear");

    //Add event listener. Clear inputs when clicked.
    ddLatClear.addEventListener("click", function () {
        //do something.
        window.alert("clear button clicked");
    });
}

function monitorDdLonClear() {
    "use strict";

    //Retrieve "clear" button.
    const ddLonClear = document.getElementById("dd-lon-clear");

    //Add event listener. Clear inputs when clicked.
    ddLonClear.addEventListener("click", function () {
        //do something.
        window.alert("clear button clicked");
    });
}


export {
    monitorDmsLatClear,
    monitorDmsLonClear,
    monitorDdLatClear,
    monitorDdLonClear
};
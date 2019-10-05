//Global variable (actually let)
let convert;

//Monitor page, after it loads invoke function.
document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    convert.fromDegrees();
    convert.fromDecimalDegrees();
});

//The convert variable (let)
convert = {

    //Convert DMS to DD - Latitude
    convertDmsLat: function () {
        "use strict";

        document.getElementById("convert-dms-lat").addEventListener("click", function () {

            const degreesLat = Number(document.getElementById("degrees-lat").value);
            const minutesLat = Number(document.getElementById("minutes-lat").value);
            const secondsLat = Number(document.getElementById("seconds-lat").value);

        });
    },

    fromDecimalDegrees: function () {
        "use strict";

        document.getElementById("from-dd").addEventListener("click", function () {

            const decimal = Number(document.getElementById("decimal").value);
        });

    },

    functionThree: function () {
        "use strict";

        //add function content
    },

    functionFour: function () {
        "use strict";

        //add function content
    }

}; //close convert
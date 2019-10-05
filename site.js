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

    //Convert DMS to DD - Longitude
    convertDmsLong: function () {
        "use strict";

        document.getElementById("convert-dms-long").addEventListener("click", function () {

            const degreesLong = Number(document.getElementById("degrees-long").value);
            const minutesLong = Number(document.getElementById("minutes-long").value);
            const secondsLong = Number(document.getElementById("seconds-long").value);

        });
    },

    //Convert DD to DMS - Latitude
    convertDecimalLat: function () {
        "use strict";

        document.getElementById("convert-decimal-lat").addEventListener("click", function () {

            const decimalLat = Number(document.getElementById("decimal-lat").value);
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
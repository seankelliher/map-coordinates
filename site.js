//Global variable (actually let)
let convert;

//Monitor page, after it loads invoke function.
document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    convert.convertDmsLat();
    convert.convertDmsLong();
    convert.convertDecimalLat();
    convert.convertDecimalLong();
});

//The convert variable (let)
convert = {

    //Convert DMS to DD - Latitude
    convertDmsLat: function () {
        "use strict";

        document.getElementById("convert-dms-lat").addEventListener("click", function () {

            const degLat = Number(document.getElementById("deg-lat").value);
            const minLat = Number(document.getElementById("min-lat").value);
            const secondsLat = Number(document.getElementById("seconds-lat").value);

            const degCheck = /^\d{1,3}$/.test(degLat);
            const minCheck = /^\d{1,2}$/.test(minLat);
            const secondsCheck = /^\d{1,2}$/.test(secondsLat);

            if (degCheck === false && degLat >= 1 && degLat <= 90) {
                    //run function
                } else if (minCheck === false && minLat >= 1 && minLat <= 59) {
                    //run function
                } else if (secondsCheck === false && secondsLat >= 1 && secondsLat <= 59) {
                    //run function
                } else {
                    //run function
            }

        });
    },

    //Convert DMS to DD - Longitude
    convertDmsLong: function () {
        "use strict";

        document.getElementById("convert-dms-long").addEventListener("click", function () {

            const degLong = Number(document.getElementById("deg-long").value);
            const minLong = Number(document.getElementById("min-long").value);
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

    //Convert DD to DMS - Longitude
    convertDecimalLong: function () {
        "use strict";

        document.getElementById("convert-decimal-long").addEventListener("click", function () {

            const decimalLong = Number(document.getElementById("decimal-long").value);
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
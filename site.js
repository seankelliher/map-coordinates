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
            const minutesLat = Number(document.getElementById("minutes-lat").value);
            const secondsLat = Number(document.getElementById("seconds-lat").value);

            const degCheck = /^\d{1,3}$/.test(degLat);
            const minutesCheck = /^\d{1,2}$/.test(minutesLat);
            const secondsCheck = /^\d{1,2}$/.test(secondsLat);

            if (degCheck === false && degLat >= 1 && degLat <= 90) {
                    //run function
                } else if (minutesCheck === false && minutesLat >= 1 && minutesLat <= 59) {
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
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

            const degLat = document.getElementById("deg-lat").value;
            const minLat = document.getElementById("min-lat").value;
            const secLat = document.getElementById("sec-lat").value;

            const degCheck = /^\d{1,3}$/.test(degLat);
            const minCheck = /^\d{1,2}$/.test(minLat);
            const secCheck = /^\d{1,2}$/.test(secLat);


            if (degCheck === false) {
                    //run function, show error message
                } else if (minCheck === false) {
                    //run function, show error message
                } else if (secCheck === false) {
                    //run function, show error message
                } else if (degLat !>= 1 && <= 90) {
                    //run function, show error message
                } else if (minLat !>= 1 && <= 59) {
                    //run function, show error message
                } else if (secLat !>= 1 && <= 59) {
                    //run function, show error message
                } else {
                    //run function to convert
            }

        });
    },

    //Convert DMS to DD - Longitude
    convertDmsLong: function () {
        "use strict";

        document.getElementById("convert-dms-long").addEventListener("click", function () {

            const degLong = Number(document.getElementById("deg-long").value);
            const minLong = Number(document.getElementById("min-long").value);
            const secLong = Number(document.getElementById("sec-long").value);

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
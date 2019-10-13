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

        document.getElementById("convert-dms-lat").addEventListener("click", function (event) {

            const degLat = document.getElementById("deg-lat").value;
            const minLat = document.getElementById("min-lat").value;
            const secLat = document.getElementById("sec-lat").value;

            const degLatCheck = /^\d{1,2}$/.test(degLat);
            const minLatCheck = /^\d{1,2}$/.test(minLat);
            const secLatCheck = /^\d{1,2}$/.test(secLat);

            const degLatNum = Number(degLat);
            const minLatNum = Number(minLat);
            const secLatNum = Number(secLat);

            const dmsNorth = document.getElementById("dms-north").checked;
            const dmsSouth = document.getElementById("dms-south").checked;

            const dmsPole = (
                dmsNorth === true
                ? "North"
                : "South"
            );

            const degLatSum = document.getElementById("deg-lat-sum");

            if (degLatCheck === false) {
                    //run function, show error message
                    degLatSum.textContent = "Degrees must be numbers only";
                } else if (minLatCheck === false) {
                    //run function, show error message
                    degLatSum.textContent  = "Minutes must be numbers only";
                } else if (secLatCheck === false) {
                    //run function, show error message
                    degLatSum.textContent  = "Seconds must be numbers only";
                } else if (degLatNum < 1 || degLat > 90) {
                    //run function, show error message
                    degLatSum.textContent  = "Degrees must be between 1 + 90";
                } else if (minLatNum < 1 || minLat > 59) {
                    //run function, show error message
                    degLatSum.textContent  = "Minutes must be between 1 + 59";
                } else if (secLatNum < 1 || secLat > 59) {
                    //run function, show error message
                    degLatSum.textContent  = "Seconds must be between 1 + 59";
                } else {
                    //run function to convert
                    const sum = degLatNum + (minLatNum/60) + (secLatNum/3600);

                    //Degree symbol, space, dash, space.
                    const degSymbol = String.fromCharCode(176, 32, 45, 32);
                    
                    degLatSum.textContent  = sum + degSymbol + dmsPole;
            }

            //prevents page from reloading and erasing entered numbers.
            event.preventDefault();

        });
    },

    //Convert DMS to DD - Longitude
    convertDmsLong: function () {
        "use strict";

        document.getElementById("convert-dms-long").addEventListener("click", function (event) {

            const degLong = document.getElementById("deg-long").value;
            const minLong = document.getElementById("min-long").value;
            const secLong = document.getElementById("sec-long").value;

            const degLongCheck = /^\d{1,3}$/.test(degLong);
            const minLongCheck = /^\d{1,2}$/.test(minLong);
            const secLongCheck = /^\d{1,2}$/.test(secLong);

            const degLongNum = Number(degLong);
            const minLongNum = Number(minLong);
            const secLongNum = Number(secLong);

            const dmsEast = document.getElementById("dms-east").checked;
            const dmsWest = document.getElementById("dms-west").checked;

            const dmsPole = (
                dmsEast === true
                ? "East"
                : "West"
            );

            const degLongSum = document.getElementById("deg-long-sum");

            if (degLongCheck === false) {
                    //run function, show error message
                    degLongSum.textContent = "Degrees must be numbers only";
                } else if (minLongCheck === false) {
                    //run function, show error message
                    degLongSum.textContent  = "Minutes must be numbers only";
                } else if (secLongCheck === false) {
                    //run function, show error message
                    degLongSum.textContent  = "Seconds must be numbers only";
                } else if (degLongNum < 1 || degLong > 180) {
                    //run function, show error message
                    degLongSum.textContent  = "Degrees must be between 1 + 180";
                } else if (minLongNum < 1 || minLong > 59) {
                    //run function, show error message
                    degLongSum.textContent  = "Minutes must be between 1 + 59";
                } else if (secLongNum < 1 || secLong > 59) {
                    //run function, show error message
                    degLongSum.textContent  = "Seconds must be between 1 + 59";
                } else {
                    //run function to convert
                    const sum = degLongNum + (minLongNum/60) + (secLongNum/3600);

                    //Degree symbol, space, dash, space.
                    const degSymbol = String.fromCharCode(176, 32, 45, 32);
                    
                    degLongSum.textContent  = sum + degSymbol + dmsPole;
            }

            //prevents page from reloading and erasing entered numbers.
            event.preventDefault();

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
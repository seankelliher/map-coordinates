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

            const dmsLatSum = document.getElementById("dms-lat-sum");

            if (degLatCheck === false) {
                    //run function, show error message
                    dmsLatSum.textContent = "Degrees must be numbers only";
                } else if (minLatCheck === false) {
                    //run function, show error message
                    dmsLatSum.textContent  = "Minutes must be numbers only";
                } else if (secLatCheck === false) {
                    //run function, show error message
                    dmsLatSum.textContent  = "Seconds must be numbers only";
                } else if (degLatNum < 1 || degLat > 90) {
                    //run function, show error message
                    dmsLatSum.textContent  = "Degrees must be between 1 + 90";
                } else if (minLatNum < 1 || minLat > 59) {
                    //run function, show error message
                    dmsLatSum.textContent  = "Minutes must be between 1 + 59";
                } else if (secLatNum < 1 || secLat > 59) {
                    //run function, show error message
                    dmsLatSum.textContent = "Seconds must be between 1 + 59";
                } else {
                    //run function to convert
                    const sum = degLatNum + (minLatNum/60) + (secLatNum/3600);

                    //Degree symbol, space, dash, space.
                    const degSymbol = String.fromCharCode(176, 32, 45, 32);
                    
                    dmsLatSum.textContent  = sum + degSymbol + dmsPole;
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

            const dmsLongSum = document.getElementById("dms-long-sum");

            if (degLongCheck === false) {
                    //run function, show error message
                    dmsLongSum.textContent = "Degrees must be numbers only";
                } else if (minLongCheck === false) {
                    //run function, show error message
                    dmsLongSum.textContent  = "Minutes must be numbers only";
                } else if (secLongCheck === false) {
                    //run function, show error message
                    dmsLongSum.textContent  = "Seconds must be numbers only";
                } else if (degLongNum < 1 || degLong > 180) {
                    //run function, show error message
                    dmsLongSum.textContent  = "Degrees must be between 1 + 180";
                } else if (minLongNum < 1 || minLong > 59) {
                    //run function, show error message
                    dmsLongSum.textContent  = "Minutes must be between 1 + 59";
                } else if (secLongNum < 1 || secLong > 59) {
                    //run function, show error message
                    dmsLongSum.textContent  = "Seconds must be between 1 + 59";
                } else {
                    //run function to convert
                    const sum = degLongNum + (minLongNum/60) + (secLongNum/3600);

                    //Degree symbol, space, dash, space.
                    const degSymbol = String.fromCharCode(176, 32, 45, 32);
                    
                    dmsLongSum.textContent  = sum + degSymbol + dmsPole;
            }

            //prevents page from reloading and erasing entered numbers.
            event.preventDefault();

        });
    },

    //Convert DD to DMS - Latitude
    convertDecimalLat: function () {
        "use strict";

        document.getElementById("convert-decimal-lat").addEventListener("click", function () {

            const decimalLat = document.getElementById("decimal-lat").value;

            const decimalLatCheck = /^\d{1,2}.\d{1,17}$/.test(decimalLat);

            const decimalLatNum = Number(decimalLat);

            const ddNorth = document.getElementById("dd-north").checked;
            const ddSouth = document.getElementById("dd-south").checked;

            const ddPole = (
                ddNorth === true
                ? "North"
                : "South"
            );

            const ddLatSum = document.getElementById("dd-lat-sum");

            const decimalDeg = Math.floor(decimalLatNum);
            const decimalMin = Math.floor((decimalLatNum - decimalDeg) * 60);
            const decimalSec1 = (decimalLatNum - decimalDeg) - (decimalMin/60);
            const decimalSec2 = Math.floor(decimalSec1 * 3600);

            alert(decimalDeg + " deg " + decimalMin + " min " + decimalSec2 + " sec ");

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
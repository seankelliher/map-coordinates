//Global variable (actually let).
let convert;

//Monitor page, after it loads invoke function.
document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    convert.convertDmsLat();
    convert.convertDmsLong();
    convert.convertDecimalLat();
    convert.convertDecimalLong();
});

//The convert variable (let).
convert = {

    //Convert DMS to DD - Latitude.
    convertDmsLat: function () {
        "use strict";

        document.getElementById("convert-dms-lat").addEventListener("click", function (event) {

            //Retrieve the entered degrees, minutes, seconds.
            const degLat = document.getElementById("deg-lat").value;
            const minLat = document.getElementById("min-lat").value;
            const secLat = document.getElementById("sec-lat").value;

            //Verify that they are numbers, up to two digits.
            const degLatCheck = /^\d{1,2}$/.test(degLat);
            const minLatCheck = /^\d{1,2}$/.test(minLat);
            const secLatCheck = /^\d{1,2}$/.test(secLat);

            //Convert from strings to numbers.
            const degLatNum = Number(degLat);
            const minLatNum = Number(minLat);
            const secLatNum = Number(secLat);

            //Retrieve the "pole" radio buttons.
            const dmsNorth = document.getElementById("dms-north").checked;
            const dmsSouth = document.getElementById("dms-south").checked;

            //Discover which one is checked.
            const dmsPole = (
                dmsNorth === true
                ? "North"
                : "South"
            );

            //Retrieve element where result will be placed.
            const dmsLatSum = document.getElementById("dms-lat-sum");

            //Check is entries are all numbers and between certain points.
            if (degLatCheck === false) {
                    dmsLatSum.textContent = "Degrees must be numbers only";
                } else if (minLatCheck === false) {
                    dmsLatSum.textContent  = "Minutes must be numbers only";
                } else if (secLatCheck === false) {
                    dmsLatSum.textContent  = "Seconds must be numbers only";
                } else if (degLatNum < 1 || degLat > 90) {
                    dmsLatSum.textContent  = "Degrees must be between 1 + 90";
                } else if (minLatNum < 1 || minLat > 59) {
                    dmsLatSum.textContent  = "Minutes must be between 1 + 59";
                } else if (secLatNum < 1 || secLat > 59) {
                    dmsLatSum.textContent = "Seconds must be between 1 + 59";
                } else {
                    //Do the conversion.
                    const sum = degLatNum + (minLatNum/60) + (secLatNum/3600);

                    //Degree symbol, space.
                    const degSymbol = String.fromCharCode(176, 32);
                    
                    //Place the result.
                    dmsLatSum.textContent  = sum + degSymbol + dmsPole;
            }

            //Prevents page from reloading and erasing entered numbers.
            event.preventDefault();

        });
    },

    //Convert DMS to DD - Longitude
    convertDmsLong: function () {
        "use strict";

        document.getElementById("convert-dms-long").addEventListener("click", function (event) {

            //Retrieve the entered degrees, minutes, seconds.
            const degLong = document.getElementById("deg-long").value;
            const minLong = document.getElementById("min-long").value;
            const secLong = document.getElementById("sec-long").value;

            //Verify that they are numbers, up to two or three digits.
            const degLongCheck = /^\d{1,3}$/.test(degLong);
            const minLongCheck = /^\d{1,2}$/.test(minLong);
            const secLongCheck = /^\d{1,2}$/.test(secLong);

            //Convert from strings to numbers.
            const degLongNum = Number(degLong);
            const minLongNum = Number(minLong);
            const secLongNum = Number(secLong);

            //Retrieve the "meridian" radio buttons.
            const dmsEast = document.getElementById("dms-east").checked;
            const dmsWest = document.getElementById("dms-west").checked;

            //Discover which one is checked.
            const dmsMeridian = (
                dmsEast === true
                ? "East"
                : "West"
            );

            //Retrieve element where result will be placed.
            const dmsLongSum = document.getElementById("dms-long-sum");

            //Check is entries are all numbers and between certain points.
            if (degLongCheck === false) {
                    dmsLongSum.textContent = "Degrees must be numbers only";
                } else if (minLongCheck === false) {
                    dmsLongSum.textContent  = "Minutes must be numbers only";
                } else if (secLongCheck === false) {
                    dmsLongSum.textContent  = "Seconds must be numbers only";
                } else if (degLongNum < 1 || degLong > 180) {
                    dmsLongSum.textContent  = "Degrees must be between 1 + 180";
                } else if (minLongNum < 1 || minLong > 59) {
                    dmsLongSum.textContent  = "Minutes must be between 1 + 59";
                } else if (secLongNum < 1 || secLong > 59) {
                    dmsLongSum.textContent  = "Seconds must be between 1 + 59";
                } else {
                    //Do the conversion.
                    const sum = degLongNum + (minLongNum/60) + (secLongNum/3600);

                    //Degree symbol, space.
                    const degSymbol = String.fromCharCode(176, 32);

                    //Place the result.
                    dmsLongSum.textContent  = sum + degSymbol + dmsMeridian;
            }

            //Prevents page from reloading and erasing entered numbers.
            event.preventDefault();

        });
    },

    //Convert DD to DMS - Latitude.
    convertDecimalLat: function () {
        "use strict";

        document.getElementById("convert-decimal-lat").addEventListener("click", function (event) {

            //Retrieve the entered decimal degree.
            const decimalLat = document.getElementById("decimal-lat").value;

            //Verify that the number is up to 2 digits, dot, up to 17 digits.
            const decimalLatCheck = /^\d{1,2}.?\d{1,17}$/.test(decimalLat);

            //Convert from string to number.
            const decimalLatNum = Number(decimalLat);

            //Retrieve the "pole" radio buttons.
            const ddNorth = document.getElementById("dd-north").checked;
            const ddSouth = document.getElementById("dd-south").checked;

            //Discover which one is checked.
            const ddPole = (
                ddNorth === true
                ? "North"
                : "South"
            );

            //Retrieve element where result will be placed.
            const ddLatSum = document.getElementById("dd-lat-sum");

            //Check is entries are all numbers and between certain points.
            if (decimalLatCheck === false) {
                    ddLatSum.textContent = "Degrees must be numbers only";
                } else if (decimalLatNum < 1 || decimalLatNum > 90) {
                    ddLatSum.textContent  = "Degrees must be between 1 + 90";
                } else {
                    //Do the conversion.
                    const decimalDeg = Math.floor(decimalLatNum);
                    const decimalMin = Math.floor((decimalLatNum - decimalDeg) * 60);
                    const decimalSec1 = (decimalLatNum - decimalDeg) - (decimalMin/60);
                    const decimalSec2 = Math.floor(decimalSec1 * 3600);

                    //Degree symbol, space.
                    const degSymbol = String.fromCharCode(176, 32);
                    const minSymbol = String.fromCharCode(39, 32);
                    const secSymbol = String.fromCharCode(34, 32);

                    //Place the result.
                    ddLatSum.textContent = decimalDeg + degSymbol + decimalMin + minSymbol + decimalSec2 + secSymbol + ddPole;
                }

            //Prevents page from reloading and erasing entered numbers.
            event.preventDefault();

        });

    },

    //Convert DD to DMS - Longitude.
    convertDecimalLong: function () {
        "use strict";

        document.getElementById("convert-decimal-long").addEventListener("click", function (event) {

            //Retrieve the entered decimal degree.
            const decimalLong = document.getElementById("decimal-long").value;

            //Verify that the number is up to 3 digits, dot, up to 17 digits.
            const decimalLongCheck = /^\d{1,3}.?\d{1,17}$/.test(decimalLong);

            //Convert from string to number.
            const decimalLongNum = Number(decimalLong);

            //Retrieve the "meridian" radio buttons.
            const ddEast = document.getElementById("dd-east").checked;
            const ddWest = document.getElementById("dd-west").checked;

            //Discover which one is checked.
            const ddMeridian = (
                ddEast === true
                ? "East"
                : "West"
            );

            //Retrieve element where result will be placed.
            const ddLongSum = document.getElementById("dd-long-sum");

            //Check is entries are all numbers and between certain points.
            if (decimalLongCheck === false) {
                    ddLongSum.textContent = "Degrees must be numbers only";
                } else if (decimalLongNum < 1 || decimalLongNum > 180) {
                    ddLongSum.textContent  = "Degrees must be between 1 + 180";
                } else {
                    //Do the conversion.
                    const decimalDeg = Math.floor(decimalLongNum);
                    const decimalMin = Math.floor((decimalLongNum - decimalDeg) * 60);
                    const decimalSec1 = (decimalLongNum - decimalDeg) - (decimalMin/60);
                    const decimalSec2 = Math.floor(decimalSec1 * 3600);

                    //Degree symbol, space.
                    const degSymbol = String.fromCharCode(176, 32);
                    const minSymbol = String.fromCharCode(39, 32);
                    const secSymbol = String.fromCharCode(34, 32);

                    //Place the result.
                    ddLongSum.textContent = decimalDeg + degSymbol + decimalMin + minSymbol + decimalSec2 + secSymbol + ddMeridian;
                }

            //Prevents page from reloading and erasing entered numbers.
            event.preventDefault();

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
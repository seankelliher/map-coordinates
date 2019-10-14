//Global variable (actually let).
let convert;

//Monitor page, after it loads invoke function.
document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    convert.convertDmsLat();
    convert.convertDmsLong();
    convert.convertDeciLat();
    convert.convertDeciLong();
});

//The convert variable (let).
convert = {

    //Convert DMS to DD - Latitude.
    convertDmsLat: function () {
        "use strict";

        const convert1 = document.getElementById("convert-dms-lat");

        convert1.addEventListener("click", function (event) {

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

        const convert2 = document.getElementById("convert-dms-long");

        convert2.addEventListener("click", function (event) {

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
    convertDeciLat: function () {
        "use strict";

        const convert3 = document.getElementById("convert-deci-lat");

        convert3.addEventListener("click", function (event) {

            //Retrieve the entered deci degree.
            const deciLat = document.getElementById("deci-lat").value;

            //Verify that the number is up to 2 digits, dot, up to 17 digits.
            const deciLatCheck = /^\d{1,2}.?\d{1,17}$/.test(deciLat);

            //Convert from string to number.
            const deciLatNum = Number(deciLat);

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
            if (deciLatCheck === false) {
                    ddLatSum.textContent = "Degrees must be numbers only";
                } else if (deciLatNum < 1 || deciLatNum > 90) {
                    ddLatSum.textContent  = "Degrees must be between 1 + 90";
                } else {
                    //Do the conversion.
                    const deciDeg = Math.floor(deciLatNum);
                    const deciMin = Math.floor((deciLatNum - deciDeg) * 60);
                    const deciSec1 = (deciLatNum - deciDeg) - (deciMin/60);
                    const deciSec2 = Math.floor(deciSec1 * 3600);

                    //Degree symbol, space.
                    const degSymbol = String.fromCharCode(176, 32);
                    const minSymbol = String.fromCharCode(39, 32);
                    const secSymbol = String.fromCharCode(34, 32);

                    //Place the result.
                    ddLatSum.textContent = deciDeg + degSymbol + deciMin + minSymbol + deciSec2 + secSymbol + ddPole;
                }

            //Prevents page from reloading and erasing entered numbers.
            event.preventDefault();

        });

    },

    //Convert DD to DMS - Longitude.
    convertDeciLong: function () {
        "use strict";

        const convert4 = document.getElementById("convert-deci-long");

        convert4.addEventListener("click", function (event) {

            //Retrieve the entered deci degree.
            const deciLong = document.getElementById("deci-long").value;

            //Verify that the number is up to 3 digits, dot, up to 17 digits.
            const deciLongCheck = /^\d{1,3}.?\d{1,17}$/.test(deciLong);

            //Convert from string to number.
            const deciLongNum = Number(deciLong);

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
            if (deciLongCheck === false) {
                    ddLongSum.textContent = "Degrees must be numbers only";
                } else if (deciLongNum < 1 || deciLongNum > 180) {
                    ddLongSum.textContent  = "Degrees must be between 1 + 180";
                } else {
                    //Do the conversion.
                    const deciDeg = Math.floor(deciLongNum);
                    const deciMin = Math.floor((deciLongNum - deciDeg) * 60);
                    const deciSec1 = (deciLongNum - deciDeg) - (deciMin/60);
                    const deciSec2 = Math.floor(deciSec1 * 3600);

                    //Degree symbol, space.
                    const degSymbol = String.fromCharCode(176, 32);
                    const minSymbol = String.fromCharCode(39, 32);
                    const secSymbol = String.fromCharCode(34, 32);

                    //Place the result.
                    ddLongSum.textContent = deciDeg + degSymbol + deciMin + minSymbol + deciSec2 + secSymbol + ddMeridian;
                }

            //Prevents page from reloading and erasing entered numbers.
            event.preventDefault();

        });

    }

}; //close convert
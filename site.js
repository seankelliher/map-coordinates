//Global variable (actually let).
let convert;

//Monitor page, after it loads invoke function.
document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    convert.convertDmsLat();
    convert.convertDmsLon();
    convert.convertDeciLat();
    convert.convertDeciLon();
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
            //const dmsSouth = document.getElementById("dms-south").checked;

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
                dmsLatSum.textContent = "Minutes must be numbers only";
            } else if (secLatCheck === false) {
                dmsLatSum.textContent = "Seconds must be numbers only";
            } else if (degLatNum < 1 || degLat > 90) {
                dmsLatSum.textContent = "Degrees must be between 1 + 90";
            } else if (minLatNum < 1 || minLat > 59) {
                dmsLatSum.textContent = "Minutes must be between 1 + 59";
            } else if (secLatNum < 1 || secLat > 59) {
                dmsLatSum.textContent = "Seconds must be between 1 + 59";
            } else {
                //Do the conversion.
                const sum = degLatNum + (minLatNum / 60) + (secLatNum / 3600);

                //Degree symbol, space.
                const degSymbol = String.fromCharCode(176, 32);

                //Place the result.
                dmsLatSum.textContent = sum + degSymbol + dmsPole;
            }

            //Prevents page from reloading and erasing entered numbers.
            event.preventDefault();

        });
    },

    //Convert DMS to DD - Lonitude
    convertDmsLon: function () {
        "use strict";

        const convert2 = document.getElementById("convert-dms-lon");

        convert2.addEventListener("click", function (event) {

            //Retrieve the entered degrees, minutes, seconds.
            const degLon = document.getElementById("deg-lon").value;
            const minLon = document.getElementById("min-lon").value;
            const secLon = document.getElementById("sec-lon").value;

            //Verify that they are numbers, up to two or three digits.
            const degLonCheck = /^\d{1,3}$/.test(degLon);
            const minLonCheck = /^\d{1,2}$/.test(minLon);
            const secLonCheck = /^\d{1,2}$/.test(secLon);

            //Convert from strings to numbers.
            const degLonNum = Number(degLon);
            const minLonNum = Number(minLon);
            const secLonNum = Number(secLon);

            //Retrieve the "gmt" radio buttons.
            const dmsEast = document.getElementById("dms-east").checked;
            //const dmsWest = document.getElementById("dms-west").checked;

            //Discover which one is checked.
            const dmsGmt = (
                dmsEast === true
                ? "East"
                : "West"
            );

            //Retrieve element where result will be placed.
            const dmsLonSum = document.getElementById("dms-lon-sum");

            //Check is entries are all numbers and between certain points.
            if (degLonCheck === false) {
                dmsLonSum.textContent = "Degrees must be numbers only";
            } else if (minLonCheck === false) {
                dmsLonSum.textContent = "Minutes must be numbers only";
            } else if (secLonCheck === false) {
                dmsLonSum.textContent = "Seconds must be numbers only";
            } else if (degLonNum < 1 || degLon > 180) {
                dmsLonSum.textContent = "Degrees must be between 1 + 180";
            } else if (minLonNum < 1 || minLon > 59) {
                dmsLonSum.textContent = "Minutes must be between 1 + 59";
            } else if (secLonNum < 1 || secLon > 59) {
                dmsLonSum.textContent = "Seconds must be between 1 + 59";
            } else {
                //Do the conversion.
                const sum = degLonNum + (minLonNum / 60) + (secLonNum / 3600);

                //Degree symbol, space.
                const degSymbol = String.fromCharCode(176, 32);

                //Place the result.
                dmsLonSum.textContent = sum + degSymbol + dmsGmt;
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
            //const ddSouth = document.getElementById("dd-south").checked;

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
                ddLatSum.textContent = "Degrees must be between 1 + 90";
            } else {
                //Do the conversion.
                const deciDeg = Math.floor(deciLatNum);
                const deciMin = Math.floor((deciLatNum - deciDeg) * 60);
                const deciSec1 = (deciLatNum - deciDeg) - (deciMin / 60);
                const deciSec2 = Math.floor(deciSec1 * 3600);

                //Degree symbol, space.
                const degSum = deciDeg + String.fromCharCode(176, 32);
                const minSum = deciMin + String.fromCharCode(39, 32);
                const secSum = deciSec2 + String.fromCharCode(34, 32);

                //Place the result.
                ddLatSum.textContent = degSum + minSum + secSum + ddPole;
            }

            //Prevents page from reloading and erasing entered numbers.
            event.preventDefault();

        });

    },

    //Convert DD to DMS - Lonitude.
    convertDeciLon: function () {
        "use strict";

        const convert4 = document.getElementById("convert-deci-lon");

        convert4.addEventListener("click", function (event) {

            //Retrieve the entered deci degree.
            const deciLon = document.getElementById("deci-lon").value;

            //Verify that the number is up to 3 digits, dot, up to 17 digits.
            const deciLonCheck = /^\d{1,3}.?\d{1,17}$/.test(deciLon);

            //Convert from string to number.
            const deciLonNum = Number(deciLon);

            //Retrieve the "gmt" radio buttons.
            const ddEast = document.getElementById("dd-east").checked;
            //const ddWest = document.getElementById("dd-west").checked;

            //Discover which one is checked.
            const ddGmt = (
                ddEast === true
                ? "East"
                : "West"
            );

            //Retrieve element where result will be placed.
            const ddLonSum = document.getElementById("dd-lon-sum");

            //Check is entries are all numbers and between certain points.
            if (deciLonCheck === false) {
                ddLonSum.textContent = "Degrees must be numbers only";
            } else if (deciLonNum < 1 || deciLonNum > 180) {
                ddLonSum.textContent = "Degrees must be between 1 + 180";
            } else {
                //Do the conversion.
                const deciDeg = Math.floor(deciLonNum);
                const deciMin = Math.floor((deciLonNum - deciDeg) * 60);
                const deciSec1 = (deciLonNum - deciDeg) - (deciMin / 60);
                const deciSec2 = Math.floor(deciSec1 * 3600);

                //Degree symbol, space.
                const degSum = deciDeg + String.fromCharCode(176, 32);
                const minSum = deciMin + String.fromCharCode(39, 32);
                const secSum = deciSec2 + String.fromCharCode(34, 32);

                //Place the result.
                ddLonSum.textContent = degSum + minSum + secSum + ddGmt;
            }

            //Prevents page from reloading and erasing entered numbers.
            event.preventDefault();

        });

    }

}; //close convert
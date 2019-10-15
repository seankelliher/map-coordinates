//Global variable (actually let).
let convert;

//Monitor page, after it loads invoke function.
document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    convert.dmsLatCheck();
    convert.dmsLonCheck();
    convert.ddLatCheck();
    convert.ddLonCheck();
});

//The convert variable (let).
convert = {

    //Convert DMS to DD - Latitude.
    dmsLatCheck: function () {
        "use strict";

        const convert1 = document.getElementById("dms-lat-btn");

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
            const dmsLatResult = document.getElementById("dms-lat-sum");

            //Check is entries are all numbers and between certain points.
            if (degLatCheck === false) {
                dmsLatResult.textContent = "Degrees must be numbers only";
            } else if (minLatCheck === false) {
                dmsLatResult.textContent = "Minutes must be numbers only";
            } else if (secLatCheck === false) {
                dmsLatResult.textContent = "Seconds must be numbers only";
            } else if (degLatNum < 1 || degLat > 90) {
                dmsLatResult.textContent = "Degrees must be between 1 + 90";
            } else if (minLatNum < 1 || minLat > 59) {
                dmsLatResult.textContent = "Minutes must be between 1 + 59";
            } else if (secLatNum < 1 || secLat > 59) {
                dmsLatResult.textContent = "Seconds must be between 1 + 59";
            } else {
                //Invoke function that does conversion math, pass parameters.
                convert.dmsBothMath(
                    degLatNum,
                    minLatNum,
                    secLatNum,
                    dmsPole,
                    dmsLatResult
                );
            }

            //Prevents page from reloading and erasing entered numbers.
            event.preventDefault();

        });
    },

    //Convert DMS to DD - Longitude
    dmsLonCheck: function () {
        "use strict";

        const convert2 = document.getElementById("dms-lon-btn");

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
            const dmsLonResult = document.getElementById("dms-lon-sum");

            //Check is entries are all numbers and between certain points.
            if (degLonCheck === false) {
                dmsLonResult.textContent = "Degrees must be numbers only";
            } else if (minLonCheck === false) {
                dmsLonResult.textContent = "Minutes must be numbers only";
            } else if (secLonCheck === false) {
                dmsLonResult.textContent = "Seconds must be numbers only";
            } else if (degLonNum < 1 || degLon > 180) {
                dmsLonResult.textContent = "Degrees must be between 1 + 180";
            } else if (minLonNum < 1 || minLon > 59) {
                dmsLonResult.textContent = "Minutes must be between 1 + 59";
            } else if (secLonNum < 1 || secLon > 59) {
                dmsLonResult.textContent = "Seconds must be between 1 + 59";
            } else {
                //Invoke function that does conversion math, pass parameters.
                convert.dmsBothMath(
                    degLonNum,
                    minLonNum,
                    secLonNum,
                    dmsGmt,
                    dmsLonResult
                );
            }

            //Prevents page from reloading and erasing entered numbers.
            event.preventDefault();

        });
    },

    //DMS to DD - Math for both Latitude and Longitude
    dmsBothMath: function (deg, min, sec, poleGmt, result) {
        "use strict";

        //Do the conversion.
        const sum = deg + (min / 60) + (sec / 3600);

        //Degree symbol, space.
        const degSymbol = String.fromCharCode(176, 32);

        //Place the result.
        result.textContent = sum + degSymbol + poleGmt;
    },

    //Convert DD to DMS - Latitude.
    ddLatCheck: function () {
        "use strict";

        const convert3 = document.getElementById("dd-lat-btn");

        convert3.addEventListener("click", function (event) {

            //Retrieve the entered deci degree.
            const deciLat = document.getElementById("deci-lat").value;

            //Verify that the number is up to 2 digits, dot, up to 17 digits.
            const deciLatCheck = /^\d{1,2}\.\d{1,17}$/.test(deciLat);

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
            const ddLatResult = document.getElementById("dd-lat-sum");

            //Check is entries are all numbers and between certain points.
            if (deciLatCheck === false) {
                ddLatResult.textContent = "Numbers only between 1 + 90";
            } else if (deciLatNum < 1 || deciLatNum > 90) {
                ddLatResult.textContent = "Numbers only between 1 + 90";
            } else {
                //Invoke function that does conversion math, pass parameters.
                convert.ddBothMath(deciLatNum, ddPole, ddLatResult);
            }

            //Prevents page from reloading and erasing entered numbers.
            event.preventDefault();

        });

    },

    //Convert DD to DMS - Longitude.
    ddLonCheck: function () {
        "use strict";

        const convert4 = document.getElementById("dd-lon-btn");

        convert4.addEventListener("click", function (event) {

            //Retrieve the entered deci degree.
            const deciLon = document.getElementById("deci-lon").value;

            //Verify that the number is up to 3 digits, dot, up to 17 digits.
            const deciLonCheck = /^\d{1,3}\.\d{1,17}$/.test(deciLon);

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
            const ddLonResult = document.getElementById("dd-lon-sum");

            //Check is entries are all numbers and between certain points.
            if (deciLonCheck === false) {
                ddLonResult.textContent = "Numbers only between 1 + 180";
            } else if (deciLonNum < 1 || deciLonNum > 180) {
                ddLonResult.textContent = "Numbers only between 1 + 180";
            } else {
                //Invoke function that does conversion math, pass parameters.
                convert.ddBothMath(deciLonNum, ddGmt, ddLonResult);
            }

            //Prevents page from reloading and erasing entered numbers.
            event.preventDefault();

        });

    },

    //DD to DMS - Math for both Latitude and Longitude
    ddBothMath: function (deciNum, poleGmt, result) {
        "use strict";

        //Do the conversion.
        const deciDeg = Math.floor(deciNum);
        const deciMin = Math.floor((deciNum - deciDeg) * 60);
        const deciSec1 = (deciNum - deciDeg) - (deciMin / 60);
        const deciSec2 = Math.floor(deciSec1 * 3600);

        //Degree symbol, space.
        const degSum = deciDeg + String.fromCharCode(176, 32);
        const minSum = deciMin + String.fromCharCode(39, 32);
        const secSum = deciSec2 + String.fromCharCode(34, 32);

        //Place the result.
        result.textContent = degSum + minSum + secSum + poleGmt;
    }

}; //close convert
//Math to convert DMS to DD - Latitude.
function doTheMathDmsLat(deg, min, sec) {
    "use strict";

    const degNum = Number(deg);
    const minNum = Number(min);
    const secNum = Number(sec);

    //Do the math.
    const sum = degNum + (minNum / 60) + (secNum / 3600);

    //Retrieve the North "parallels" radio button.
    const dmsNorth = document.getElementById("dms-north");

    //North checked = make sum positive.
    //South checked = make sum negative.
    const sumAbsolute = (
        dmsNorth.checked === true
        ? Math.abs(sum)
        : -Math.abs(sum)
    );

    //Limit sum to 5 places left of decimal.
    const fixedFive = sumAbsolute.toFixed(5);

    return `${fixedFive} °`;
}

//Math to convert DMS to DD - Longitude.
function doTheMathDmsLon(deg, min, sec) {
    "use strict";

    const degNum = Number(deg);
    const minNum = Number(min);
    const secNum = Number(sec);

    //Do the math.
    const sum = degNum + (minNum / 60) + (secNum / 3600);

    //Retrieve the East "meridians" radio button.
    const dmsEast = document.getElementById("dms-east");

    //East checked = make sum positive.
    //West checked = make sum negative.
    const sumAbsolute = (
        dmsEast.checked === true
        ? Math.abs(sum)
        : -Math.abs(sum)
    );

    //Limit sum to 5 places left of decimal.
    const fixedFive = sumAbsolute.toFixed(5);

    return `${fixedFive} °`;
}

export {doTheMathDmsLat, doTheMathDmsLon};
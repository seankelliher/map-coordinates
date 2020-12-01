//Math to convert DD to DMS - Latitude and Longitude.
function doTheMathDd(deci, lines) {
    "use strict";

    //Make inputed data a number. (Example, 61.5708).
    const deciNum = Number(deci);

    //Make number positive (in case it's negative).
    const deciAbs = Math.abs(deciNum);

    //Return an integer. This is your degrees. (61).
    const degs = Math.floor(deciAbs);

    //Get your minutes.
    //(61.5708 - 61) * 60 = 34.248'
    const minsRough = (deciAbs - degs) * 60;
    const mins = Math.floor(minsRough);

    //Get your seconds.
    const secs = (minsRough - mins) * 60;

    let hemisphere;

    //Check "lines" argument received above to know if
    //we are calculating latitude or longitude.
    //Check if number is negative or positive to determine hemisphere.
    if (lines === "parallels") {
        hemisphere = (
            deciNum > 0
            ? "North"
            : "South"
        );
    }

    if (lines === "meridians") {
        hemisphere = (
            deciNum > 0
            ? "East"
            : "West"
        );
    }

    return `${degs}° ${mins}' ${secs.toFixed(2)}" ${hemisphere}`;
}

export {doTheMathDd};
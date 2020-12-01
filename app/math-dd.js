//Math to convert DD to DMS - Latitude.
function doTheMathDdLat(deci) {
    "use strict";

    //Make inputed data a number. 61.5708°
    const deciNum = Number(deci);

    //Make number positive (in case it's negative). 61.5708°
    const deciAbs = Math.abs(deciNum);

    //Return an integer. This is your degrees. 61°
    const degs = Math.floor(deciAbs);

    //Get your minutes.
    //(61.5708 - 61) * 60 = 34.248'
    const minsRough = (deciAbs - degs) * 60;
    const mins = Math.floor(minsRough);

    //Get your seconds.
    //Math.floor(34.248 - 34 * 60);
    const secs = (minsRough - mins) * 60;

    //Determine if "parallel" is North or South.
    const parallel = (
        deciNum > 0
        ? "North"
        : "South"
    );

    return `${degs}° ${mins}' ${secs.toFixed(2)}" ${parallel}`;

}

//Math to convert DD to DMS - Longitude.
function doTheMathDdLon(deci) {
    "use strict";

    //Make inputed data a number.
    const deciNum = Number(deci);

    //Make number positive (in case it's negative).
    const deciAbs = Math.abs(deciNum);

    //Return an integer. This is your degrees.
    const degs = Math.floor(deciAbs);

    //Get your minutes.
    const minsRough = (deciAbs - degs) * 60;
    const mins = Math.floor(minsRough);

    //Get your seconds.
    const secs = (minsRough - mins) * 60;

    //Determine if "meridian" is East or West.
    const meridian = (
        deciNum > 0
        ? "East"
        : "West"
    );

    return `${degs}° ${mins}' ${secs.toFixed(2)}" ${meridian}`;

}

export {doTheMathDdLat, doTheMathDdLon};



//files worked on and need transfer for git
//input-dd.js
//integrity-dd.js
//math-dd.js
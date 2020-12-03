//Math to convert DMS to DD - Latitude and Longitude.
function doTheMathDms(deg, min, sec, lines) {
    "use strict";

    const degNum = Number(deg);
    const minNum = Number(min);
    const secNum = Number(sec);

    //Do the math.
    const sum = degNum + (minNum / 60) + (secNum / 3600);

    let sumAbsolute;

    //Check "lines" argument received above to know if
    //we are calculating latitude or longitude.
    //Check checkboxes. Make sum positive or negative accordingly.
    if (lines === "parallels") {
        const dmsNorth = document.getElementById("dms-north");

        //North checked = make sum positive, South checked = make sum negative.
        sumAbsolute = (
            dmsNorth.checked === true
            ? Math.abs(sum)
            : -Math.abs(sum)
        );
    }

    if (lines === "meridians") {
        const dmsEast = document.getElementById("dms-east");

        //East checked = make sum positive, West checked = make sum negative.
        sumAbsolute = (
            dmsEast.checked === true
            ? Math.abs(sum)
            : -Math.abs(sum)
        );
    }

    //Limit sum to 5 places left of decimal.
    const fixedFive = sumAbsolute.toFixed(5);

    return `${fixedFive} degrees`;
}

export {doTheMathDms};
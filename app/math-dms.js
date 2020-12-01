//Math to convert DMS to DD - Latitude.
function doTheMathDms(deg, min, sec, lines) {
    "use strict";

    const degNum = Number(deg);
    const minNum = Number(min);
    const secNum = Number(sec);

    //Do the math.
    const sum = degNum + (minNum / 60) + (secNum / 3600);

    let sumAbsolute


    //Check the "lines" argument, received above to know if
    //we are calculating latitude or longitude.
    //Check if number is negative or positive to determine hemisphere.
    if (lines === "parallels") {
        //Retrieve the North "parallels" radio button.
        const dmsNorth = document.getElementById("dms-north");

        //North checked = make sum positive.
        //South checked = make sum negative.
        sumAbsolute = (
            dmsNorth.checked === true
            ? Math.abs(sum)
            : -Math.abs(sum)
        );
    }

    if (lines === "meridians") {
        //Retrieve the East "meridians" radio button.
        const dmsEast = document.getElementById("dms-east");
        //East checked = make sum positive.
        //West checked = make sum negative.
        sumAbsolute = (
            dmsEast.checked === true
            ? Math.abs(sum)
            : -Math.abs(sum)
        );
    }

    //Limit sum to 5 places left of decimal.
    const fixedFive = sumAbsolute.toFixed(5);

    return `${fixedFive} °`;
}

export {doTheMathDms};
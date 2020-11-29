//THIS IS ONLY A PLACEHOLDER.
//THESE FUNCTIONS NEED TO BE REVISED.

//Integrity Check for DD to DMS - Latitude.
function integrityCheckDdLat(deg, min, sec) {
    "use strict";

    const degCheck = /^\d{1,2}$/.test(deg);
    const minCheck = /^\d{1,2}$/.test(min);
    const secCheck = /^\d{1,2}$/.test(sec);

    const degNum = Number(deg);
    const degMin = Number(min);
    const degSec = Number(sec);

    if (deg === "") {
        return "You are missing the degrees!";
    }
    if (min === "") {
        return "You are missing the minutes!";
    }
    if (sec === "") {
        return "You are missing the seconds!";
    }
    if (degCheck === false) {
        return "Degrees can be numbers only!";
    }
    if (minCheck === false) {
        return "Minutes can be numbers only!";
    }
    if (secCheck === false) {
        return "Seconds can be numbers only!";
    }
    if (degNum > 90) {
        return "Degrees must be 0 - 90!";
    }
    if (degMin > 59) {
        return "Minutes must be 0 - 59!";
    }
    if (degSec > 59) {
        return "Seconds must be 0 - 59!";
    }
    if (degNum === 90) {
        if (degMin > 0) {
            return "If 90 degs, mins and secs must be 0.";
        }
        if (degSec > 0) {
            return "If 90 degs, mins and secs must be 0.";
        }
    }
}

//Integrity Check for DD to DMS - Longitude.
function integrityCheckDdLon(deg, min, sec) {
    "use strict";

    const degCheck = /^\d{1,3}$/.test(deg);
    const minCheck = /^\d{1,2}$/.test(min);
    const secCheck = /^\d{1,2}$/.test(sec);

    const degNum = Number(deg);
    const degMin = Number(min);
    const degSec = Number(sec);

    if (deg === "") {
        return "You are missing the degrees!";
    }
    if (min === "") {
        return "You are missing the minutes!";
    }
    if (sec === "") {
        return "You are missing the seconds!";
    }
    if (degCheck === false) {
        return "Degrees can be numbers only!";
    }
    if (minCheck === false) {
        return "Minutes can be numbers only!";
    }
    if (secCheck === false) {
        return "Seconds can be numbers only!";
    }
    if (degNum > 180) {
        return "Degrees must be 0 - 180!";
    }
    if (degMin > 59) {
        return "Minutes must be 0 - 59!";
    }
    if (degSec > 59) {
        return "Seconds must be 0 - 59!";
    }
    if (degNum === 180) {
        if (degMin > 0) {
            return "If 180 degs, mins and secs must be 0.";
        }
        if (degSec > 0) {
            return "If 180 degs, mins and secs must be 0.";
        }
    }
}

export {integrityCheckDdLat, integrityCheckDdLon};
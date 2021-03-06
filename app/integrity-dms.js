//Below functions are same, but for different forms.
//Receive input values from "inputs" module.
//Run checks on values.
//Return either error message or "false" to "inputs" module.

//DMS to DD - Latitude.
function integrityCheckDmsLat(deg, min, sec) {
    "use strict";

    const degCheck = /^\d{1,2}$/.test(deg);
    const minCheck = /^\d{1,2}$/.test(min);
    const secCheck = /^\d{1,2}$/.test(sec);

    const degNum = Number(deg);
    const minNum = Number(min);
    const secNum = Number(sec);

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
    if (minNum > 59) {
        return "Minutes must be 0 - 59!";
    }
    if (secNum > 59) {
        return "Seconds must be 0 - 59!";
    }
    if (degNum === 90) {
        if (minNum > 0) {
            return "If 90 degs, mins and secs must be 0.";
        }
        if (secNum > 0) {
            return "If 90 degs, mins and secs must be 0.";
        }
    } else {
        return false;
    }
}

//DMS to DD - Longitude.
function integrityCheckDmsLon(deg, min, sec) {
    "use strict";

    const degCheck = /^\d{1,3}$/.test(deg);
    const minCheck = /^\d{1,2}$/.test(min);
    const secCheck = /^\d{1,2}$/.test(sec);

    const degNum = Number(deg);
    const minNum = Number(min);
    const secNum = Number(sec);

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
    if (minNum > 59) {
        return "Minutes must be 0 - 59!";
    }
    if (secNum > 59) {
        return "Seconds must be 0 - 59!";
    }
    if (degNum === 180) {
        if (minNum > 0) {
            return "If 180 degs, mins and secs must be 0.";
        }
        if (secNum > 0) {
            return "If 180 degs, mins and secs must be 0.";
        }
    } else {
        return false;
    }
}

export {integrityCheckDmsLat, integrityCheckDmsLon};

//NOTE: You could combine these two functions into one, but you end up with
//a number of nested, hard to read "if" statements.
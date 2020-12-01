//Integrity Check for DD to DMS - Latitude.
function integrityCheckDdLat(deci) {
    "use strict";

    //Optional -/+ symbol. Then 1-2 digits + decimal + 1-5 digits.
    const deciCheck = /^[-,+]?\d{1,2}\.\d{1,5}$/.test(deci);

    const deciNum = Number(deci);

    if (deci === "") {
        return "Please add a number!";
    }
    if (deciCheck === false) {
        return "Use 1-2 digits + decimal + 1-5 digits.";
    }
    if (deciNum > 90) {
        return "Degrees must be 0 - 90!";
    } else {
        return false;
    }
}

//Integrity Check for DD to DMS - Longitude.
function integrityCheckDdLon(deci) {
    "use strict";

    //Optional -/+ symbol. Then 1-3 digits + decimal + 1-5 digits.
    const deciCheck = /^[-,+]?\d{1,3}\.\d{1,5}$/.test(deci);

    const deciNum = Number(deci);

    if (deci === "") {
        return "Please add a number!";
    }
    if (deciCheck === false) {
        return "Use 1-3 digits + decimal + 1-5 digits.";
    }
    if (deciNum > 180) {
        return "Degrees must be 0 - 180!";
    } else {
        return false;
    }
}

export {integrityCheckDdLat, integrityCheckDdLon};

//NOTE: You could combine these two functions into one, but you end up with
//a number of nested, hard to read "if" statements.
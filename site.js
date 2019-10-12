//Global variable (actually let)
let convert;

//Monitor page, after it loads invoke function.
document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    convert.convertDmsLat();
    convert.convertDmsLong();
    convert.convertDecimalLat();
    convert.convertDecimalLong();
});

//The convert variable (let)
convert = {

    //Convert DMS to DD - Latitude
    convertDmsLat: function () {
        "use strict";

        document.getElementById("convert-dms-lat").addEventListener("click", function (event) {

            const degLat = document.getElementById("deg-lat").value;
            const minLat = document.getElementById("min-lat").value;
            const secLat = document.getElementById("sec-lat").value;

            const degLatCheck = /^\d{1,2}$/.test(degLat);
            const minLatCheck = /^\d{1,2}$/.test(minLat);
            const secLatCheck = /^\d{1,2}$/.test(secLat);

            const dmsNorth = document.getElementById("dms-north").checked;
            const dmsSouth = document.getElementById("dms-south").checked;

            const dmsPole = (
                dmsNorth === true
                ? "North"
                : "South"
            );

            if (degLatCheck === false) {
                    //run function, show error message
                    alert("error - degrees check is false");
                } else if (minLatCheck === false) {
                    //run function, show error message
                    alert("error - minutes check is false");
                } else if (secLatCheck === false) {
                    //run function, show error message
                    alert("error - seconds check is false");
                } else if (degLat < 1 || degLat > 90) {
                    //run function, show error message
                    alert("error - degrees not between 1 and 90");
                } else if (minLat < 1 || minLat > 59) {
                    //run function, show error message
                    alert("error - minutes not between 1 and 59");
                } else if (secLat < 1 || secLat > 59) {
                    //run function, show error message
                    alert("error - seconds not between 1 and 59");
                } else {
                    //run function to convert
                    const degLatNum = Number(degLat);
                    const minLatNum = Number(minLat);
                    const secLatNum = Number(secLat);

                    const sum = degLatNum + (minLatNum/60) + (secLatNum/3600);
                    alert(sum  + " degrees " + dmsPole);
            }

            //prevents page from reloading and erasing entered numbers.
            event.preventDefault();

        });
    },

    //Convert DMS to DD - Longitude
    convertDmsLong: function () {
        "use strict";

        document.getElementById("convert-dms-long").addEventListener("click", function (event) {

            const degLong = document.getElementById("deg-long").value;
            const minLong = document.getElementById("min-long").value;
            const secLong = document.getElementById("sec-long").value;

            const degLongCheck = /^\d{1,3}$/.test(degLong);
            const minLongCheck = /^\d{1,2}$/.test(minLong);
            const secLongCheck = /^\d{1,2}$/.test(secLong);

            const dmsEast = document.getElementById("dms-east").checked;
            const dmsWest = document.getElementById("dms-west").checked;

            const dmsPole = (
                dmsEast === true
                ? "East"
                : "West"
            );

            if (degLongCheck === false) {
                    //run function, show error message
                    alert("error - degrees check is false");
                } else if (minLongCheck === false) {
                    //run function, show error message
                    alert("error - minutes check is false");
                } else if (secLongCheck === false) {
                    //run function, show error message
                    alert("error - seconds check is false");
                } else if (degLong < 1 || degLong > 180) {
                    //run function, show error message
                    alert("error - degrees not between 1 and 90");
                } else if (minLong < 1 || minLong > 59) {
                    //run function, show error message
                    alert("error - minutes not between 1 and 59");
                } else if (secLong < 1 || secLong > 59) {
                    //run function, show error message
                    alert("error - seconds not between 1 and 59");
                } else {
                    //run function to convert
                    const degLongNum = Number(degLong);
                    const minLongNum = Number(minLong);
                    const secLongNum = Number(secLong);

                    const sum = degLongNum + (minLongNum/60) + (secLongNum/3600);
                    alert(sum  + " degrees " + dmsPole);
            }

            //prevents page from reloading and erasing entered numbers.
            event.preventDefault();

        });
    },

    //Convert DD to DMS - Latitude
    convertDecimalLat: function () {
        "use strict";

        document.getElementById("convert-decimal-lat").addEventListener("click", function () {

            const decimalLat = Number(document.getElementById("decimal-lat").value);
        });

    },

    //Convert DD to DMS - Longitude
    convertDecimalLong: function () {
        "use strict";

        document.getElementById("convert-decimal-long").addEventListener("click", function () {

            const decimalLong = Number(document.getElementById("decimal-long").value);
        });

    },

    functionThree: function () {
        "use strict";

        //add function content
    },

    functionFour: function () {
        "use strict";

        //add function content
    }

}; //close convert
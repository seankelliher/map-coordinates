//Global variable (actually let)
let convert;

//Monitor page, after it loads invoke function.
document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    convert.fromDegrees();
    convert.fromDecimalDegrees();
});

//The convert variable (let)
convert = {

    fromDegrees: function () {
        "use strict";

        document.getElementById("from-dms").addEventListener("click", function () {

            const degrees = Number(document.getElementById("degrees").value);
            const minutes = Number(document.getElementById("minutes").value);
            const seconds = Number(document.getElementById("seconds").value);

        });
    },

    fromDecimalDegrees: function () {
        "use strict";

        document.getElementById("from-dd").addEventListener("click", function () {

            const decimal = Number(document.getElementById("decimal").value);
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
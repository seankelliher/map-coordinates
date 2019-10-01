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

            //add function content
        });
    },

    fromDecimalDegrees: function () {
        "use strict";

        document.getElementById("from-dd").addEventListener("click", function () {

            //add function content
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
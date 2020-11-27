//Show the DMS to DD form elements.
function showDmsToDdForm () {
    "use strict";

    //Gather form elements.
    const forms = document.querySelectorAll("form");
    const formsArray = Array.from(forms); //Works without converting too.

    formsArray.forEach(function (form) {
        if (form.className === "dms-to-dd") {

            //Show selected forms.
            form.style.display = "block";

            //Activate event listeners on forms.
            //dmsLatCheck();
            //dmsLonCheck();

            //Get clicked tab. Add class to highlight it.
            const dmsOriginTab = document.getElementById("dms-to-dd");
            dmsOriginTab.classList.add("selected");
        } else if (form.className === "dd-to-dms") {

            //Hide "not selected" forms.
            form.style.display = "none";

            //Get "not clicked" tab. Remove class that highlights it.
            const ddOriginTab = document.getElementById("dd-to-dms");
            ddOriginTab.classList.remove("selected");
        }
    });
}

export { showDmsToDdForm };
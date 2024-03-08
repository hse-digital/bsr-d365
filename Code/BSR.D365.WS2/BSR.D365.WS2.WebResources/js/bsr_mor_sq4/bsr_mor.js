"use strict";
var MOR;
(function (MOR) {
    var Form;
    function SetTypeOfOccurrence(executionContext) {
        Form = (executionContext.getFormContext());
        if (Form.getAttribute("bsr_assisteddigital").getValue() === true) {
            Form.getControl("bsr_typeofoccurrence2").setDisabled(false);
            if (Form.getAttribute("bsr_reportsubmittedon").getValue() !== null) {
                Form.getAttribute("bsr_typeofoccurrence").setRequiredLevel("required");
            }
            else {
                Form.getAttribute("bsr_typeofoccurrence").setRequiredLevel("none");
            }
        }
        else {
            Form.getControl("bsr_typeofoccurrence2").setDisabled(true);
        }
    }
    MOR.SetTypeOfOccurrence = SetTypeOfOccurrence;
})(MOR || (MOR = {}));
//# sourceMappingURL=bsr_mor.js.map
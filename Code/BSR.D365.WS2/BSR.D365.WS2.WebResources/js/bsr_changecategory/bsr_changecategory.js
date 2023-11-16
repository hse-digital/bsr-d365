"use strict";
var ChangeCategory;
(function (ChangeCategory) {
    var Form;
    function showHideProposedWorks(executionContext) {
        var Form = (executionContext.getFormContext());
        var bsrServiceCode = Form.getAttribute("bsr_servicecode");
        var selectedOptions;
        if (bsrServiceCode !== null) {
            selectedOptions = bsrServiceCode.getSelectedOption();
        }
        else {
            selectedOptions = null;
        }
        if (selectedOptions && selectedOptions.filter(function (i) { return i.text === "Building Control"; }).length > 0) {
            Form.getControl("bsr_proposedworks").setVisible(true);
        }
        else {
            Form.getControl("bsr_proposedworks").setVisible(false);
        }
    }
    ChangeCategory.showHideProposedWorks = showHideProposedWorks;
})(ChangeCategory || (ChangeCategory = {}));
//# sourceMappingURL=bsr_changecategory.js.map
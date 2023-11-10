"use strict";
var ChangeCategory;
(function (ChangeCategory) {
    debugger;
    function showHideProposedWorks(executionContext) {
        var formContext = executionContext.getFormContext();
        var bsrServiceCode = formContext.getAttribute("bsr_servicecode");
        var selectedOptions;
        if (bsrServiceCode !== null) {
            selectedOptions = bsrServiceCode.getSelectedOption();
        }
        else {
            selectedOptions = null;
        }
        if (selectedOptions && selectedOptions.filter(function (i) { return i.text === "Building Control"; }).length > 0) {
            formContext.getControl("bsr_proposedworks").setVisible(true);
        }
        else {
            formContext.getControl("bsr_proposedworks").setVisible(false);
        }
    }
    ChangeCategory.showHideProposedWorks = showHideProposedWorks;
})(ChangeCategory || (ChangeCategory = {}));
//# sourceMappingURL=bsr_changecategory.js.map
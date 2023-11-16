"use strict";
var ChangeRequest;
(function (ChangeRequest) {
    function showHideChangeControlSection(executionContext) {
        var formContext = executionContext.getFormContext();
        var changeCategory = formContext.getAttribute("bsr_changecategoryid");
        var changeCategoryValue;
        if (changeCategory !== null && changeCategory.getValue() !== null) {
            changeCategoryValue = changeCategory.getValue()[0].name;
        }
        var changeControlSection = formContext.ui.tabs.get("{9c5e4f76-9c93-4fdc-ac18-5dec4e49c385}").sections.get("Change Control");
        if (changeCategoryValue === "Major Change" || changeCategoryValue === "Notifiable Change") {
            changeControlSection.setVisible(true);
        }
        else {
            changeControlSection.setVisible(false);
        }
    }
    ChangeRequest.showHideChangeControlSection = showHideChangeControlSection;
    function showHideOtherReason(executionContext) {
        var formContext = executionContext.getFormContext();
        var reasonsForChange = formContext.getAttribute("bsr_changereasons");
        var selectedOptions;
        if (reasonsForChange !== null) {
            selectedOptions = reasonsForChange.getSelectedOption();
        }
        else {
            selectedOptions = null;
        }
        if (selectedOptions && selectedOptions.filter(function (i) { return i.text === "Other"; }).length > 0) {
            formContext.getControl("bsr_otherreason").setVisible(true);
        }
        else {
            formContext.getControl("bsr_otherreason").setVisible(false);
        }
    }
    ChangeRequest.showHideOtherReason = showHideOtherReason;
})(ChangeRequest || (ChangeRequest = {}));
//# sourceMappingURL=bsr_changerequest.js.map
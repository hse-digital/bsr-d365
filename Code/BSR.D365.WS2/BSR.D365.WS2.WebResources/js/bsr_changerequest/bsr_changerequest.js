"use strict";
var ChangeRequest;
(function (ChangeRequest) {
    var Form;
    function showHideChangeControlSection(executionContext) {
        var formContext = (executionContext.getFormContext());
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
})(ChangeRequest || (ChangeRequest = {}));
//# sourceMappingURL=bsr_changerequest.js.map
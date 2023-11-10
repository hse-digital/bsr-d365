"use strict";
var BuildingControlLifecycle;
(function (BuildingControlLifecycle) {
    function showHideCompletionTab(executionContext) {
        debugger;
        var formContext = executionContext.getFormContext();
        var changeControl = formContext.getAttribute("bsr_changecontrol");
        if (changeControl !== null) {
            var changeControlValue = changeControl.getValue();
            if (changeControlValue === true) {
                formContext.ui.tabs.get("completion").setVisible(false);
            }
            else if (changeControlValue === false) {
                formContext.ui.tabs.get("completion").setVisible(true);
            }
        }
    }
    BuildingControlLifecycle.showHideCompletionTab = showHideCompletionTab;
})(BuildingControlLifecycle || (BuildingControlLifecycle = {}));
//# sourceMappingURL=bsr_buildingcontrollifecycle.js.map
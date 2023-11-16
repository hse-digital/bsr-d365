"use strict";
var BuildingControlLifecycle;
(function (BuildingControlLifecycle) {
    function showHideCompletionTab(executionContext) {
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
    function regulatoryDecision(executionContext) {
        var formContext = executionContext.getFormContext();
        var bccaApproval = formContext.getAttribute("bsr_bcaaapproval");
        var bccaApprovalReq = formContext.getAttribute("bsr_bcaaapprovalrequirements");
        var bccaRej = formContext.getAttribute("bsr_bcaarejection");
        var confirmStrings = {
            confirmButtonLabel: "Yes", text: "Are you sure you wish to continue with Reg Decision?", title: "Do you wish to continue?"
        };
        var confirmOptions = { height: 120, width: 260 };
        function handleConfirm(attribute) {
            Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions).then(function (confirmationResult) {
                console.log("Confirmation dialog closed");
                if (confirmationResult.confirmed) {
                    if (attribute) {
                        attribute.setValue(true);
                    }
                }
                else {
                    if (attribute) {
                        attribute.setValue(false);
                    }
                }
            }, function (error) {
                console.log(error.message);
                if (attribute) {
                    attribute.setValue(false);
                }
            });
        }
        if (bccaApproval !== null && bccaApproval.getValue() === true) {
            handleConfirm(bccaApproval);
        }
        if (bccaApprovalReq !== null && bccaApprovalReq.getValue() === true) {
            handleConfirm(bccaApprovalReq);
        }
        if (bccaRej !== null && bccaRej.getValue() === true) {
            handleConfirm(bccaRej);
        }
    }
    BuildingControlLifecycle.regulatoryDecision = regulatoryDecision;
})(BuildingControlLifecycle || (BuildingControlLifecycle = {}));
//# sourceMappingURL=bsr_buildingcontrollifecycle.js.map
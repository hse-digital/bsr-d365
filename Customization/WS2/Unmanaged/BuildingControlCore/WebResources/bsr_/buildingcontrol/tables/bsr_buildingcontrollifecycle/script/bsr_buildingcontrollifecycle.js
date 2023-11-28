"use strict";
var BuildingControlLifecycle;
(function (BuildingControlLifecycle) {
    var Form;
    function regulatoryDecision(executionContext) {
        var Form = (executionContext.getFormContext());
        var bccaApproval = Form.getAttribute("bsr_bcaaapproval");
        var bccaApprovalReq = Form.getAttribute("bsr_bcaaapprovalrequirements");
        var bccaRej = Form.getAttribute("bsr_bcaarejection");
        var bccaApprovalControl = Form.getControl("bsr_bcaaapproval");
        var bccaApprovalReqControl = Form.getControl("bsr_bcaaapprovalrequirements");
        var bccaRejControl = Form.getControl("bsr_bcaarejection");
        var confirmStrings = {
            confirmButtonLabel: "Yes", cancelButtonLabel: "No", text: "Are you sure you wish to continue with Reg Decision?", title: "Do you wish to continue?"
        };
        var confirmOptions = { height: 120, width: 260 };
        function handleConfirm(attribute, section, control) {
            Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions).then(function (confirmationResult) {
                console.log("Confirmation dialog closed");
                if (confirmationResult.confirmed) {
                    if (attribute) {
                        attribute.setValue(true);
                        section.setVisible(true);
                        bccaApprovalControl.setDisabled(true);
                        bccaApprovalReqControl.setDisabled(true);
                        bccaRejControl.setDisabled(true);
                        control.setDisabled(false);
                    }
                }
                else {
                    if (attribute) {
                        attribute.setValue(false);
                        section.setVisible(false);
                    }
                }
            }, function (error) {
                console.log(error.message);
                if (attribute) {
                    attribute.setValue(false);
                    section.setVisible(false);
                }
            });
        }
        if (bccaApproval !== null) {
            var section = Form.ui.tabs.get("tab_assessment").sections.get("section_approval");
            if (bccaApproval.getValue() === true) {
                handleConfirm(bccaApproval, section, bccaApprovalControl);
            }
            else if (bccaApproval.getValue() === false) {
                section.setVisible(false);
                bccaApprovalControl.setDisabled(false);
                bccaApprovalReqControl.setDisabled(false);
                bccaRejControl.setDisabled(false);
            }
        }
        if (bccaApprovalReq !== null) {
            var section = Form.ui.tabs.get("tab_assessment").sections.get("section_requirements");
            if (bccaApprovalReq.getValue() === true) {
                handleConfirm(bccaApprovalReq, section, bccaApprovalReqControl);
            }
            else if (bccaApprovalReq.getValue() === false) {
                section.setVisible(false);
                bccaApprovalControl.setDisabled(false);
                bccaApprovalReqControl.setDisabled(false);
                bccaRejControl.setDisabled(false);
            }
        }
        if (bccaRej !== null) {
            var section = Form.ui.tabs.get("tab_assessment").sections.get("section_rejection ");
            if (bccaRej.getValue() === true) {
                handleConfirm(bccaRej, section, bccaRejControl);
            }
            else if (bccaRej.getValue() === false) {
                section.setVisible(false);
                bccaApprovalControl.setDisabled(false);
                bccaApprovalReqControl.setDisabled(false);
                bccaRejControl.setDisabled(false);
            }
        }
    }
    BuildingControlLifecycle.regulatoryDecision = regulatoryDecision;
    function showHideRegulatoryDecisionSectionsOnLoad(executionContext) {
        var Form = (executionContext.getFormContext());
        var bccaApproval = Form.getAttribute("bsr_bcaaapproval");
        var bccaApprovalReq = Form.getAttribute("bsr_bcaaapprovalrequirements");
        var bccaRej = Form.getAttribute("bsr_bcaarejection");
        var bccaApprovalControl = Form.getControl("bsr_bcaaapproval");
        var bccaApprovalReqControl = Form.getControl("bsr_bcaaapprovalrequirements");
        var bccaRejControl = Form.getControl("bsr_bcaarejection");
        if (bccaApproval !== null) {
            var section = Form.ui.tabs.get("tab_assessment").sections.get("section_approval");
            if (bccaApproval.getValue() === true) {
                bccaApprovalControl.setDisabled(false);
                bccaApprovalReqControl.setDisabled(true);
                bccaRejControl.setDisabled(true);
                section.setVisible(true);
            }
            else if (bccaApproval.getValue() === false) {
                section.setVisible(false);
            }
        }
        if (bccaApprovalReq !== null) {
            var section = Form.ui.tabs.get("tab_assessment").sections.get("section_requirements");
            if (bccaApprovalReq.getValue() === true) {
                bccaApprovalControl.setDisabled(true);
                bccaApprovalReqControl.setDisabled(false);
                bccaRejControl.setDisabled(true);
                section.setVisible(true);
            }
            else if (bccaApprovalReq.getValue() === false) {
                section.setVisible(false);
            }
        }
        if (bccaRej !== null) {
            var section = Form.ui.tabs.get("tab_assessment").sections.get("section_rejection ");
            if (bccaRej.getValue() === true) {
                bccaApprovalControl.setDisabled(true);
                bccaApprovalReqControl.setDisabled(true);
                bccaRejControl.setDisabled(false);
                section.setVisible(true);
            }
            else if (bccaRej.getValue() === false) {
                section.setVisible(false);
            }
        }
    }
    BuildingControlLifecycle.showHideRegulatoryDecisionSectionsOnLoad = showHideRegulatoryDecisionSectionsOnLoad;
})(BuildingControlLifecycle || (BuildingControlLifecycle = {}));
//# sourceMappingURL=bsr_buildingcontrollifecycle.js.map
"use strict";

namespace BuildingControlLifecycle {
    var Form: Form.bsr_buildingcontrollifecycle.Main.Information;

    export function regulatoryDecision(executionContext: Xrm.ExecutionContext<any, any>) {
        var Form = <Form.bsr_buildingcontrollifecycle.Main.Information>(
            executionContext.getFormContext()
        );

        var bccaApproval: Xrm.OptionSetAttribute<boolean> = Form.getAttribute("bsr_bcaaapproval");
        var bccaApprovalReq: Xrm.OptionSetAttribute<boolean> = Form.getAttribute("bsr_bcaaapprovalrequirements");
        var bccaRej: Xrm.OptionSetAttribute<boolean> = Form.getAttribute("bsr_bcaarejection");

        var bccaApprovalControl: Xrm.OptionSetControl<boolean> = Form.getControl("bsr_bcaaapproval");
        var bccaApprovalReqControl: Xrm.OptionSetControl<boolean> = Form.getControl("bsr_bcaaapprovalrequirements");
        var bccaRejControl: Xrm.OptionSetControl<boolean> = Form.getControl("bsr_bcaarejection");

        var confirmStrings = {
            confirmButtonLabel: "Yes", cancelButtonLabel: "No", text: "Are you sure you wish to continue with Reg Decision?", title: "Do you wish to continue?"
        };

        var confirmOptions = { height: 120, width: 260 };

        function handleConfirm(attribute: Xrm.OptionSetAttribute<boolean>, section: Xrm.PageSection, control: Xrm.OptionSetControl<boolean>) {
            Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions).then(
                function (confirmationResult) {
                    console.log("Confirmation dialog closed");                 

                    if (confirmationResult.confirmed) {
                        if (attribute) {
                            attribute.setValue(true);
                            section.setVisible(true);

                            //lock all 3 fields temporarily, as we'll unlock the one we need straight after
                            bccaApprovalControl.setDisabled(true);
                            bccaApprovalReqControl.setDisabled(true);
                            bccaRejControl.setDisabled(true); 

                            // unlock the one we need
                            control.setDisabled(false);
                        }
                    } else {
                        if (attribute) {
                            attribute.setValue(false);
                            section.setVisible(false);
                        }
                    }
                },
                function (error) {
                    console.log(error.message);

                    if (attribute) {
                        attribute.setValue(false);
                        section.setVisible(false);
                    }
                }
            );
        }

        if (bccaApproval !== null) {
            var section: Xrm.PageSection = Form.ui.tabs.get("tab_assessment").sections.get("section_approval");

            if (bccaApproval.getValue() === true) {
                handleConfirm(bccaApproval, section, bccaApprovalControl);
            } else if (bccaApproval.getValue() === false) {
                section.setVisible(false);

                // unlock all 3 fields
                bccaApprovalControl.setDisabled(false);
                bccaApprovalReqControl.setDisabled(false);
                bccaRejControl.setDisabled(false);
            }
        }

        if (bccaApprovalReq !== null) {
            var section: Xrm.PageSection = Form.ui.tabs.get("tab_assessment").sections.get("section_requirements");

            if (bccaApprovalReq.getValue() === true) {
                handleConfirm(bccaApprovalReq, section, bccaApprovalReqControl);
            } else if (bccaApprovalReq.getValue() === false) {
                section.setVisible(false);

                // unlock all 3 fields
                bccaApprovalControl.setDisabled(false);
                bccaApprovalReqControl.setDisabled(false);
                bccaRejControl.setDisabled(false);
            }
        }

        if (bccaRej !== null) {
            var section: Xrm.PageSection = Form.ui.tabs.get("tab_assessment").sections.get("section_rejection ");

            if (bccaRej.getValue() === true) {
                handleConfirm(bccaRej, section, bccaRejControl);
            } else if (bccaRej.getValue() === false) {
                section.setVisible(false);

                // unlock all 3 fields
                bccaApprovalControl.setDisabled(false);
                bccaApprovalReqControl.setDisabled(false);
                bccaRejControl.setDisabled(false);
            }

        }
    }

    export function showHideRegulatoryDecisionSectionsOnLoad(executionContext: Xrm.ExecutionContext<any, any>) {
        var Form = <Form.bsr_buildingcontrollifecycle.Main.Information>(
            executionContext.getFormContext()
        );

        var bccaApproval: Xrm.OptionSetAttribute<boolean> = Form.getAttribute("bsr_bcaaapproval");
        var bccaApprovalReq: Xrm.OptionSetAttribute<boolean> = Form.getAttribute("bsr_bcaaapprovalrequirements");
        var bccaRej: Xrm.OptionSetAttribute<boolean> = Form.getAttribute("bsr_bcaarejection");

        var bccaApprovalControl: Xrm.OptionSetControl<boolean> = Form.getControl("bsr_bcaaapproval");
        var bccaApprovalReqControl: Xrm.OptionSetControl<boolean> = Form.getControl("bsr_bcaaapprovalrequirements");
        var bccaRejControl: Xrm.OptionSetControl<boolean> = Form.getControl("bsr_bcaarejection");

        if (bccaApproval !== null) {
            var section: Xrm.PageSection = Form.ui.tabs.get("tab_assessment").sections.get("section_approval");

            if (bccaApproval.getValue() === true) {

                bccaApprovalControl.setDisabled(false);
                bccaApprovalReqControl.setDisabled(true);
                bccaRejControl.setDisabled(true);

                section.setVisible(true);
            } else if (bccaApproval.getValue() === false) {
                section.setVisible(false);
            }
        }

        if (bccaApprovalReq !== null) {
            var section: Xrm.PageSection = Form.ui.tabs.get("tab_assessment").sections.get("section_requirements");

            if (bccaApprovalReq.getValue() === true) {

                bccaApprovalControl.setDisabled(true);
                bccaApprovalReqControl.setDisabled(false);
                bccaRejControl.setDisabled(true);

                section.setVisible(true);
            } else if (bccaApprovalReq.getValue() === false) {
                section.setVisible(false);
            }
        }

        if (bccaRej !== null) {
            var section: Xrm.PageSection = Form.ui.tabs.get("tab_assessment").sections.get("section_rejection ");

            if (bccaRej.getValue() === true) {

                bccaApprovalControl.setDisabled(true);
                bccaApprovalReqControl.setDisabled(true);
                bccaRejControl.setDisabled(false);

                section.setVisible(true);
            } else if (bccaRej.getValue() === false) {
                section.setVisible(false);
            }
        }
    }
}

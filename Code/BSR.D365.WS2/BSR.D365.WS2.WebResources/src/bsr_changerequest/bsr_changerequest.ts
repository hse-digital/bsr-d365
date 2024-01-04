"use strict";

namespace ChangeRequest {
    var Form: Form.bsr_changerequest.Main.Information;

    export function showHideChangeControlSection(executionContext: Xrm.ExecutionContext<any, any>) {
        Form = <Form.bsr_changerequest.Main.Information>(
            executionContext.getFormContext()
        );

        var changeCategory = Form.getAttribute("bsr_changecategoryid");
        var changeCategoryValue;

        if (changeCategory !== null && changeCategory.getValue() !== null)
        {
            changeCategoryValue = changeCategory.getValue()[0].name;
        }

        var changeControlSection = Form.ui.tabs.get("{9c5e4f76-9c93-4fdc-ac18-5dec4e49c385}").sections.get("Change Control");
        var validationTab = Form.ui.tabs.get("validation_tab");

        if (changeCategoryValue === "Major Change" || changeCategoryValue === "Notifiable Change")
        {
            changeControlSection.setVisible(true);
            // Show validation tab
            validationTab.setVisible(true);
        } else
        {
            changeControlSection.setVisible(false);
            validationTab.setVisible(false);
        }
    }

    export function validation(executionContext: Xrm.ExecutionContext<any, any>) {

        Form = <Form.bsr_changerequest.Main.Information>(
            executionContext.getFormContext()
        );

        type ValidationAttributes = {
            attribute: Xrm.OptionSetAttribute<boolean>,
            control: Xrm.OptionSetControl<boolean>,
            urlControl: Xrm.StringControl
        }

        var validApplication: Xrm.OptionSetAttribute<boolean> = Form.getAttribute("bsr_validapplication");
        var invalidApplication: Xrm.OptionSetAttribute<boolean> = Form.getAttribute("bsr_invalidapplication");
        var validationDate: Xrm.DateAttribute = Form.getAttribute("bsr_datevalidated");

        var validApplicationControl: Xrm.OptionSetControl<boolean> = Form.getControl("bsr_validapplication");
        var invalidApplicationControl: Xrm.OptionSetControl<boolean> = Form.getControl("bsr_invalidapplication");

        var validApplicationURLControl: Xrm.StringControl = Form.getControl("bsr_validationurl")
        var invalidApplicationURLControl: Xrm.StringControl = Form.getControl("bsr_invalidapplicationemail")

        var confirmStrings = {
            confirmButtonLabel: "Yes", cancelButtonLabel: "No", text: "Are you sure you wish to validate this application?", title: "Do you wish to continue?"
        };

        var confirmOptions = { height: 120, width: 260 };

        function handleConfirm({ attribute, control, urlControl }: ValidationAttributes) {
            Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions).then(
                function (confirmationResult) {
                    console.log("Confirmation dialog closed");

                    if (confirmationResult.confirmed) {
                        if (attribute) {
                            attribute.setValue(true);
                            var currentDate = new Date();
                            validationDate.setValue(currentDate);

                            // Lock all fields temporarily, as we'll unlock the ones we need straight after
                            validApplicationControl.setDisabled(true);
                            invalidApplicationControl.setDisabled(true);
                            validApplicationURLControl.setDisabled(true);
                            invalidApplicationURLControl.setDisabled(true);

                            control.setDisabled(false);
                            urlControl.setDisabled(false);
                        }
                    } else {
                        if (attribute) {
                            attribute.setValue(false);
                        }
                    }
                },
                function (error) {
                    console.log(error.message);

                    if (attribute) {
                        attribute.setValue(false);
                    }
                }
            );
        }

        if (validApplication !== null) {
            if (validApplication.getValue() === true) {

                const obj: ValidationAttributes = {
                    attribute: validApplication,
                    control: validApplicationControl,
                    urlControl: validApplicationURLControl
                }
                
                handleConfirm(obj)
            } else if (validApplication.getValue() === false) {
                validApplicationControl.setDisabled(false);
                invalidApplicationControl.setDisabled(false);
                validApplicationURLControl.setDisabled(false);
                invalidApplicationURLControl.setDisabled(false);
                validationDate.setValue(null);
            }
        }

        if (invalidApplication !== null) {
            if (invalidApplication.getValue() === true) {

                const obj: ValidationAttributes = {
                    attribute: invalidApplication,
                    control: invalidApplicationControl,
                    urlControl: invalidApplicationURLControl
                }

                handleConfirm(obj)
            } else if (invalidApplication.getValue() === false) {
                validApplicationControl.setDisabled(false);
                invalidApplicationControl.setDisabled(false);
                validApplicationURLControl.setDisabled(false);
                invalidApplicationURLControl.setDisabled(false);
                validationDate.setValue(null);
            }
        }
    }

    export function validationOnLoad(executionContext: Xrm.ExecutionContext<any, any>) {
        Form = <Form.bsr_changerequest.Main.Information>(
            executionContext.getFormContext()
        );

        var validApplication: Xrm.OptionSetAttribute<boolean> = Form.getAttribute("bsr_validapplication");
        var invalidApplication: Xrm.OptionSetAttribute<boolean> = Form.getAttribute("bsr_invalidapplication");

        var validApplicationControl: Xrm.OptionSetControl<boolean> = Form.getControl("bsr_validapplication");
        var invalidApplicationControl: Xrm.OptionSetControl<boolean> = Form.getControl("bsr_invalidapplication");

        var validApplicationURLControl: Xrm.StringControl = Form.getControl("bsr_validationurl")
        var invalidApplicationURLControl: Xrm.StringControl = Form.getControl("bsr_invalidapplicationemail");


        if (validApplication !== null) {
            if (validApplication.getValue() === true) {
                validApplicationControl.setDisabled(false);
                invalidApplicationControl.setDisabled(true);
                validApplicationURLControl.setDisabled(false);
                invalidApplicationURLControl.setDisabled(true);
            }
        }

        if (invalidApplication !== null) {
            if (invalidApplication.getValue() === true) {
                validApplicationControl.setDisabled(true);
                invalidApplicationControl.setDisabled(false);
                validApplicationURLControl.setDisabled(true);
                invalidApplicationURLControl.setDisabled(false);
            }
        }
    }
}

"use strict";
var ChangeRequest;
(function (ChangeRequest) {
    var Form;
    function showHideChangeControlSection(executionContext) {
        Form = (executionContext.getFormContext());
        var changeCategory = Form.getAttribute("bsr_changecategoryid");
        var changeCategoryValue;
        if (changeCategory !== null && changeCategory.getValue() !== null) {
            changeCategoryValue = changeCategory.getValue()[0].name;
        }
        var changeControlSection = Form.ui.tabs.get("{9c5e4f76-9c93-4fdc-ac18-5dec4e49c385}").sections.get("Change Control");
        var validationTab = Form.ui.tabs.get("validation_tab");
        if (changeCategoryValue === "Major Change" || changeCategoryValue === "Notifiable Change") {
            changeControlSection.setVisible(true);
            validationTab.setVisible(true);
        }
        else {
            changeControlSection.setVisible(false);
            validationTab.setVisible(false);
        }
    }
    ChangeRequest.showHideChangeControlSection = showHideChangeControlSection;
    function validation(executionContext) {
        Form = (executionContext.getFormContext());
        var validApplication = Form.getAttribute("bsr_validapplication");
        var invalidApplication = Form.getAttribute("bsr_invalidapplication");
        var validationDate = Form.getAttribute("bsr_datevalidated");
        var validApplicationControl = Form.getControl("bsr_validapplication");
        var invalidApplicationControl = Form.getControl("bsr_invalidapplication");
        var validApplicationURLControl = Form.getControl("bsr_validationurl");
        var invalidApplicationURLControl = Form.getControl("bsr_invalidapplicationemail");
        var confirmStrings = {
            confirmButtonLabel: "Yes", cancelButtonLabel: "No", text: "Are you sure you wish to validate this application?", title: "Do you wish to continue?"
        };
        var confirmOptions = { height: 120, width: 260 };
        function handleConfirm(_a) {
            var attribute = _a.attribute, control = _a.control, urlControl = _a.urlControl;
            Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions).then(function (confirmationResult) {
                console.log("Confirmation dialog closed");
                if (confirmationResult.confirmed) {
                    if (attribute) {
                        attribute.setValue(true);
                        var currentDate = new Date();
                        validationDate.setValue(currentDate);
                        validApplicationControl.setDisabled(true);
                        invalidApplicationControl.setDisabled(true);
                        validApplicationURLControl.setDisabled(true);
                        invalidApplicationURLControl.setDisabled(true);
                        control.setDisabled(false);
                        urlControl.setDisabled(false);
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
        if (validApplication !== null) {
            if (validApplication.getValue() === true) {
                var obj = {
                    attribute: validApplication,
                    control: validApplicationControl,
                    urlControl: validApplicationURLControl
                };
                handleConfirm(obj);
            }
            else if (validApplication.getValue() === false) {
                validApplicationControl.setDisabled(false);
                invalidApplicationControl.setDisabled(false);
                validApplicationURLControl.setDisabled(false);
                invalidApplicationURLControl.setDisabled(false);
                validationDate.setValue(null);
            }
        }
        if (invalidApplication !== null) {
            if (invalidApplication.getValue() === true) {
                var obj = {
                    attribute: invalidApplication,
                    control: invalidApplicationControl,
                    urlControl: invalidApplicationURLControl
                };
                handleConfirm(obj);
            }
            else if (invalidApplication.getValue() === false) {
                validApplicationControl.setDisabled(false);
                invalidApplicationControl.setDisabled(false);
                validApplicationURLControl.setDisabled(false);
                invalidApplicationURLControl.setDisabled(false);
                validationDate.setValue(null);
            }
        }
    }
    ChangeRequest.validation = validation;
    function validationOnLoad(executionContext) {
        Form = (executionContext.getFormContext());
        var validApplication = Form.getAttribute("bsr_validapplication");
        var invalidApplication = Form.getAttribute("bsr_invalidapplication");
        var validApplicationControl = Form.getControl("bsr_validapplication");
        var invalidApplicationControl = Form.getControl("bsr_invalidapplication");
        var validApplicationURLControl = Form.getControl("bsr_validationurl");
        var invalidApplicationURLControl = Form.getControl("bsr_invalidapplicationemail");
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
    ChangeRequest.validationOnLoad = validationOnLoad;
})(ChangeRequest || (ChangeRequest = {}));
//# sourceMappingURL=bsr_changerequest.js.map
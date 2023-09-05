"use strict";
var BuildingDetails;
(function (BuildingDetails) {
    var Form;
    function ShowHideExistingHRBFields(executionContext) {
        Form = executionContext.getFormContext();
        if (Form.getAttribute("bsr_hrbworkid").getValue() !== null) {
            var hrbWork = Form.getAttribute("bsr_hrbworkid").getValue()[0].id;
            console.log("HRB Work Id: ", hrbWork);
            if (hrbWork === '{6FA7A0F4-4047-EE11-BE6E-6045BDF1E965}') {
                console.log("HRB Work: New Build");
                Form.getControl("bsr_existtypeworkproposal").setVisible(false);
                Form.getControl("bsr_existingbuildingworkid").setVisible(false);
                Form.getControl("bsr_currentprimaryuse").setVisible(false);
            }
            else if (hrbWork === '{57871F02-4147-EE11-BE6E-6045BDF1E965}') {
                console.log('HRB Work: Convert Non-HRB to HRB');
                Form.getControl("bsr_existtypeworkproposal").setVisible(false);
                Form.getControl("bsr_existingbuildingworkid").setVisible(false);
                Form.getControl("bsr_currentprimaryuse").setVisible(true);
            }
        }
        if (Form.getAttribute("bsr_existingbuildingworkid").getValue() !== null) {
            var existingbuildingwork = Form.getAttribute("bsr_existingbuildingworkid").getValue()[0].id;
            console.log("Existing building work: ", existingbuildingwork);
            if (existingbuildingwork === '{C19E1C08-4147-EE11-BE6E-6045BDF1E965}' || (existingbuildingwork === '{089F1C08-4147-EE11-BE6E-6045BDF1E965}')) {
                Form.getControl("bsr_existtypeworkproposal").setVisible(true);
                Form.getControl("bsr_existingbuildingworkid").setVisible(true);
                Form.getControl("bsr_hrbworkid").setVisible(false);
            }
        }
        function SetExistingUseCategory(executionContext) {
            Form = executionContext.getFormContext();
            if (Form.getAttribute("bsr_existtypeworkproposal").getValue() != null &&
                Form.getAttribute("bsr_existtypeworkproposal").getValue() !== undefined) {
                var existingTypeWorkProposal = Form.getAttribute("bsr_existtypeworkproposal").getValue();
                console.log("existingTypeWorkProsal value: ", existingTypeWorkProposal);
                if (existingTypeWorkProposal.indexOf(760810008) !== -1 && existingTypeWorkProposal.length === 1) {
                    Form.getAttribute("bsr_existingusecategory").setValue(760810001);
                }
                else {
                    Form.getAttribute("bsr_existingusecategory").setValue(760810000);
                }
            }
        }
        BuildingDetails.SetExistingUseCategory = SetExistingUseCategory;
    }
    BuildingDetails.ShowHideExistingHRBFields = ShowHideExistingHRBFields;
})(BuildingDetails || (BuildingDetails = {}));
//# sourceMappingURL=bsr_buildingdetails.js.map
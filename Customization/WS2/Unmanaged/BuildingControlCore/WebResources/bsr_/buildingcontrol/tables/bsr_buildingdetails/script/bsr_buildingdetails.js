"use strict";
var BuildingDetails;
(function (BuildingDetails) {
    var Form;
    function ShowHideExistingHRBFields(executionContext) {
        Form = executionContext.getFormContext();
        if (Form.getAttribute("bsr_buildingcategory").getValue() !== null &&
            Form.getAttribute("bsr_buildingcategory").getValue() !== undefined) {
            var buildType = Form.getAttribute("bsr_buildingcategory").getValue();
            if (buildType === 760810000) {
                console.log("buildCategory: New Build");
                Form.getControl("bsr_existtypeworkproposal").setVisible(false);
                Form.getControl("bsr_existingusecategory").setVisible(false);
            }
            else if (buildType === 760810001) {
                console.log("buildCategory: Existing HRB");
                Form.getControl("bsr_existtypeworkproposal").setVisible(true);
                Form.getControl("bsr_existingusecategory").setVisible(true);
            }
            else if (buildType === 760810002) {
                console.log("buildCategory: Convert Building to HRB");
                Form.getControl("bsr_existtypeworkproposal").setVisible(false);
                Form.getControl("bsr_existingusecategory").setVisible(false);
            }
        }
    }
    BuildingDetails.ShowHideExistingHRBFields = ShowHideExistingHRBFields;
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
})(BuildingDetails || (BuildingDetails = {}));
//# sourceMappingURL=bsr_buildingdetails.js.map
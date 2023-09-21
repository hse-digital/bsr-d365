"use strict";
var BuildingProfessionApplicationForm;
(function (BuildingProfessionApplicationForm) {
    var Form;
    function Test(executionContext) {
        Form = executionContext.getFormContext();
        var buildingProfessionType = Form.getAttribute("bsr_buildingprofessiontypecode").getValue();
        if (buildingProfessionType === 760810000) {
            Form.ui.tabs.get("Class").setVisible(true);
            Form.ui.tabs.get("Competency").setVisible(true);
            Form.ui.tabs.get("Memberships").setVisible(true);
            Form.ui.tabs.get("Employment").setVisible(true);
            Form.ui.tabs.get("rbcainfo").setVisible(false);
            Form.getControl("bsr_applicantid").setVisible(true);
            Form.getControl("bsr_applicantid1").setVisible(false);
            Form.getControl("bsr_rbcasecondarycontactid").setVisible(false);
            Form.getControl("bsr_secondarycontactposition").setVisible(false);
            Form.ui.quickForms.get("QuickviewControl1694786591140").setVisible(false);
            Form.ui.tabs.get("General").sections.get("additional_info").setVisible(false);
            Form.getControl("bsr_primarycontactposition").setVisible(false);
            Form.ui.quickForms.get("rbiprimarycontactquickview").setVisible(true);
            Form.ui.quickForms.get("bcaprimarycontactquickview").setVisible(false);
        }
        else if (buildingProfessionType === 760810001) {
            Form.ui.tabs.get("Class").setVisible(false);
            Form.ui.tabs.get("Competency").setVisible(false);
            Form.ui.tabs.get("Memberships").setVisible(false);
            Form.ui.tabs.get("Employment").setVisible(false);
            Form.ui.tabs.get("rbcainfo").setVisible(true);
            Form.getControl("bsr_applicantid").setVisible(false);
            Form.getControl("bsr_applicantid1").setVisible(true);
            Form.getControl("bsr_rbcasecondarycontactid").setVisible(true);
            Form.getControl("bsr_secondarycontactposition").setVisible(true);
            Form.ui.quickForms.get("QuickviewControl1694786591140").setVisible(true);
            Form.ui.tabs.get("General").sections.get("additional_info").setVisible(true);
            Form.getControl("bsr_primarycontactposition").setVisible(true);
            Form.ui.quickForms.get("bcaprimarycontactquickview").setVisible(true);
            Form.ui.quickForms.get("rbiprimarycontactquickview").setVisible(false);
        }
        else {
            Form.ui.tabs.get("Class").setVisible(false);
            Form.ui.tabs.get("Competency").setVisible(false);
            Form.ui.tabs.get("Memberships").setVisible(false);
            Form.ui.tabs.get("Employment").setVisible(false);
            Form.ui.tabs.get("rbcainfo").setVisible(false);
            Form.getControl("bsr_applicantid").setVisible(false);
            Form.getControl("bsr_applicantid1").setVisible(false);
            Form.getControl("bsr_rbcasecondarycontactid").setVisible(false);
            Form.getControl("bsr_secondarycontactposition").setVisible(false);
            Form.ui.quickForms.get("QuickviewControl1694786591140").setVisible(false);
            Form.ui.tabs.get("General").sections.get("additional_info").setVisible(false);
            Form.getControl("bsr_primarycontactposition").setVisible(false);
            Form.ui.quickForms.get("bcaprimarycontactquickview").setVisible(false);
            Form.ui.quickForms.get("rbiprimarycontactquickview").setVisible(false);
        }
    }
    BuildingProfessionApplicationForm.Test = Test;
})(BuildingProfessionApplicationForm || (BuildingProfessionApplicationForm = {}));
//# sourceMappingURL=bsr_buildingprofessionapplication.js.map
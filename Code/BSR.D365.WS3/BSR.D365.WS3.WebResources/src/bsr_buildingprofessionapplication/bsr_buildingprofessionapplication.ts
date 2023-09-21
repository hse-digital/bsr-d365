namespace BuildingProfessionApplicationForm {
    var Form: Form.bsr_buildingprofessionapplication.Main.Information;

    export function Test(executionContext: Xrm.ExecutionContext<any, any>) {
        // Get the form context
        Form = <Form.bsr_buildingprofessionapplication.Main.Information>executionContext.getFormContext();

        // Get the value of the building profession type attribute
        const buildingProfessionType = Form.getAttribute("bsr_buildingprofessiontypecode").getValue();

        // Check the building profession type and set the visibility of tabs, sections, fields, and quick view forms accordingly
        if (buildingProfessionType === bsr_buildingprofessiontypecode.BuildingInspector) {
            // Setting visibility for various elements when buildingProfessionType is 760810000
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

            // Show 'rbiprimarycontactquickview' quick view form for buildingProfessionType 760810000
            Form.ui.quickForms.get("rbiprimarycontactquickview").setVisible(true);

            // Hide the 'bcaprimarycontactquickview' quick view form for buildingProfessionType 760810000
            Form.ui.quickForms.get("bcaprimarycontactquickview").setVisible(false);
        }
        else if (buildingProfessionType === bsr_buildingprofessiontypecode.BuildingControlApprover) {
            // Setting visibility for various elements when buildingProfessionType is 760810001
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

            // Show the 'bcaprimarycontactquickview' quick view form for buildingProfessionType 760810001
            Form.ui.quickForms.get("bcaprimarycontactquickview").setVisible(true);

            // Hide 'rbiprimarycontactquickview' quick view form for buildingProfessionType 760810001
            Form.ui.quickForms.get("rbiprimarycontactquickview").setVisible(false);
        }
        else {
            // Setting visibility for all tabs, fields, and sections to false when buildingProfessionType does not match any predefined values
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

            // Hide both the 'bcaprimarycontactquickview' and 'rbiprimarycontactquickview' quick view forms for other buildingProfessionType values
            Form.ui.quickForms.get("bcaprimarycontactquickview").setVisible(false);
            Form.ui.quickForms.get("rbiprimarycontactquickview").setVisible(false);
        }
    }
}

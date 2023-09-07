namespace BuildingDetails {
    var Form: Form.bsr_buildingdetails.Main.Information;

    export function ShowHideExistingHRBFields(executionContext: Xrm.ExecutionContext<any, any>) {


        Form = <Form.bsr_buildingdetails.Main.Information>executionContext.getFormContext();

        if (Form.getAttribute("bsr_hrbworkid").getValue() == null &&
            Form.getAttribute("bsr_existingbuildingworkid").getValue() == null) {
            Form.getControl("bsr_currentprimaryuse").setVisible(false);
        }

        if (
            Form.getAttribute("bsr_hrbworkid").getValue() !== null
        ) {
            var hrbWork = Form.getAttribute("bsr_hrbworkid").getValue()[0].id;
            console.log("HRB Work Id: ", hrbWork);
            if (hrbWork === '{6FA7A0F4-4047-EE11-BE6E-6045BDF1E965}') {
                console.log("HRB Work: New Build");
                Form.getControl("bsr_existtypeworkproposal").setVisible(false);
                Form.getControl("bsr_existingbuildingworkid").setVisible(false);
                Form.getControl("bsr_currentprimaryuse").setVisible(false);
            } else if (hrbWork === '{57871F02-4147-EE11-BE6E-6045BDF1E965}') {
                console.log('HRB Work: Convert Non-HRB to HRB');
                Form.getControl("bsr_existtypeworkproposal").setVisible(false);
                Form.getControl("bsr_existingbuildingworkid").setVisible(false);
                Form.getControl("bsr_currentprimaryuse").setVisible(true);
            }
        }

        if (Form.getAttribute("bsr_existingbuildingworkid").getValue() !== null
        ) {
            var existingbuildingwork = Form.getAttribute("bsr_existingbuildingworkid").getValue()[0].id;
            console.log("Existing building work: ", existingbuildingwork);
            if (existingbuildingwork === '{C19E1C08-4147-EE11-BE6E-6045BDF1E965}' || (existingbuildingwork === '{089F1C08-4147-EE11-BE6E-6045BDF1E965}')) {
                Form.getControl("bsr_existtypeworkproposal").setVisible(true);
                Form.getControl("bsr_existingbuildingworkid").setVisible(true);
                Form.getControl("bsr_hrbworkid").setVisible(false);
            }
    }

}

namespace BuildingDetails {
    var Form: Form.bsr_buildingdetails.Main.Information

    export function ShowHidePrimaryUseFields(executionContext: Xrm.ExecutionContext<any, any>) {

        Form = <Form.bsr_buildingdetails.Main.Information>executionContext.getForm();

        if (
            Form.getAttribute("bsr_buildingcategory") !== null ||
            Form.getAttribute("bsr_buildingcategory") !== undefined
        ) {
            var buildType = Form.getAttribute("bsr_buildingcategory").getValue();

            if (buildType === 760810000) {
                console.log("buildType: New Build");
                Form.getControl("bsr_primaryuse").setVisible(true);
                Form.getControl("bsr_changeprimaryuse").setVisible(false);
                Form.getControl("bsr_currentprimaryuse").setVisible(false);
                Form.getControl("bsr_proposedprimaryuse").setVisible(false);
            } else if (buildType === 760810001) {
                console.log("buildType: Change of use");
                Form.getControl("bsr_primaryuse").setVisible(false);
                Form.getControl("bsr_changeprimaryuse").setVisible(true);
                Form.getControl("bsr_currentprimaryuse").setVisible(false);
                Form.getControl("bsr_proposedprimaryuse").setVisible(false);
            } else if (buildType === 760810002) {
                console.log("buildType: Existing building");
                Form.getControl("bsr_primaryuse").setVisible(false);
                Form.getControl("bsr_changeprimaryuse").setVisible(false);
                Form.getControl("bsr_currentprimaryuse").setVisible(true);
                Form.getControl("bsr_proposedprimaryuse").setVisible(true);
            }
        }
    }
}
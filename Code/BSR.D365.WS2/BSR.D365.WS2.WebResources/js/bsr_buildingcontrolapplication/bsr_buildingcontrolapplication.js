"use strict";
var BuildingControlApplication;
(function (BuildingControlApplication) {
    var Form;
    function ShowHideStagedApplicationsTab(executionContext) {
        Form = (executionContext.getFormContext());
        if (Form.getAttribute('bsr_stagedapplication').getValue() == false &&
            Form.getAttribute('bsr_issubsequentstagedapp').getValue() == false) {
            Form.ui.tabs.get('tab_staged_application').setVisible(false);
        }
        else {
            Form.ui.tabs.get('tab_staged_application').setVisible(true);
            if (Form.getAttribute('bsr_stagedapplication').getValue() == true) {
                Form.getControl('Subgrid_new_2').setVisible(true);
            }
            else if (Form.getAttribute('bsr_issubsequentstagedapp').getValue() == true) {
                Form.getControl('Subgrid_new_2').setVisible(false);
                Form.ui.tabs.get("tab_4").setVisible(false);
                Form.getControl("Subgrid_new_1").setVisible(false);
            }
        }
    }
    BuildingControlApplication.ShowHideStagedApplicationsTab = ShowHideStagedApplicationsTab;
})(BuildingControlApplication || (BuildingControlApplication = {}));
//# sourceMappingURL=bsr_buildingcontrolapplication.js.map
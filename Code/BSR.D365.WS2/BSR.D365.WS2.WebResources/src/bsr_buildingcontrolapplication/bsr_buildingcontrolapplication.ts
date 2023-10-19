namespace BuildingControlApplication {
  var Form: Form.bsr_buildingcontrolapplication.Main.Information;

  export function ShowHideStagedApplicationsTab(
    executionContext: Xrm.ExecutionContext<any, any>
  ) {
    Form = <Form.bsr_buildingcontrolapplication.Main.Information>(
      executionContext.getFormContext()
    );

    if (
      Form.getAttribute('bsr_stagedapplication').getValue() == false &&
      Form.getAttribute('bsr_issubsequentstagedapp').getValue() == false
    ) {
      Form.ui.tabs.get('tab_staged_application').setVisible(false);
    } else {
      Form.ui.tabs.get('tab_staged_application').setVisible(true);

      if (Form.getAttribute('bsr_stagedapplication').getValue() == true) {
        Form.getControl('Subgrid_new_2').setVisible(true);
      } else if (
        Form.getAttribute('bsr_issubsequentstagedapp').getValue() == true
      ) {
        Form.getControl('Subgrid_new_2').setVisible(false);
      }
    }
  }
}

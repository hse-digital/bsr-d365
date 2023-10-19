namespace BuildingDetails {
  var Form: Form.bsr_buildingdetails.Main.Information;

  export function ShowHideExistingHRBFields(
    executionContext: Xrm.ExecutionContext<any, any>
  ) {
    Form = <Form.bsr_buildingdetails.Main.Information>(
      executionContext.getFormContext()
    );

    if (
      Form.getAttribute('bsr_hrbworkid').getValue() == null &&
      Form.getAttribute('bsr_existingbuildingworkid').getValue() == null
    ) {
      Form.getControl('bsr_currentprimaryuse').setVisible(false);
    }

    if (Form.getAttribute('bsr_hrbworkid').getValue() !== null) {
      var hrbWork = Form.getAttribute('bsr_hrbworkid').getValue()[0].id;
      if (hrbWork === '{6FA7A0F4-4047-EE11-BE6E-6045BDF1E965}') {
        Form.getControl('bsr_existtypeworkproposal').setVisible(false);
        Form.getControl('bsr_existingbuildingworkid').setVisible(false);
        Form.getControl('bsr_currentprimaryuse').setVisible(false);
      } else if (hrbWork === '{57871F02-4147-EE11-BE6E-6045BDF1E965}') {
        Form.getControl('bsr_existtypeworkproposal').setVisible(false);
        Form.getControl('bsr_existingbuildingworkid').setVisible(false);
        Form.getControl('bsr_currentprimaryuse').setVisible(true);
      }
    }

    if (Form.getAttribute('bsr_existingbuildingworkid').getValue() !== null) {
      var existingbuildingwork = Form.getAttribute(
        'bsr_existingbuildingworkid'
      ).getValue()[0].id;
      if (
        existingbuildingwork === '{C19E1C08-4147-EE11-BE6E-6045BDF1E965}' ||
        existingbuildingwork === '{089F1C08-4147-EE11-BE6E-6045BDF1E965}'
      ) {
        Form.getControl('bsr_existtypeworkproposal').setVisible(true);
        Form.getControl('bsr_existingbuildingworkid').setVisible(true);
        Form.getControl('bsr_hrbworkid').setVisible(false);
      }
    }
  }

  export function LockFieldsOnSubmissionDate(
    executionContext: Xrm.ExecutionContext<any, any>
  ) {
    Form = <Form.bsr_buildingdetails.Main.Information>(
      executionContext.getFormContext()
    );

    if (Form.getAttribute('bsr_submissiondate').getValue() !== null) {
      Form.getControl('bsr_existtypeworkproposal').setDisabled(true);
      Form.getControl('bsr_primaryuse').setDisabled(true);
      Form.getControl('bsr_currentprimaryuse').setDisabled(true);
    } else {
      Form.getControl('bsr_existtypeworkproposal').setDisabled(false);
      Form.getControl('bsr_primaryuse').setDisabled(false);
      Form.getControl('bsr_currentprimaryuse').setDisabled(false);
    }
  }

  export function ShowHidePrescribedDocumentSection(
    executionContext: Xrm.ExecutionContext<any, any>
  ) {
    Form = <Form.bsr_buildingdetails.Main.Information>(
      executionContext.getFormContext()
    );

    var bsr_bcapplicationid = Form.getAttribute(
      'bsr_bcapplicationid'
    ).getValue()[0].id;

    Xrm.WebApi.retrieveRecord(
      'bsr_buildingcontrolapplication',
      bsr_bcapplicationid,
      '?$select=bsr_stagedapplication,bsr_issubsequentstagedapp'
    ).then(
      function success(result) {
        var bsr_stagedapplication = result.bsr_stagedapplication;
        var bsr_issubsequentstagedapp = result.bsr_issubsequentstagedapp;
        if (
          bsr_stagedapplication == true ||
          bsr_issubsequentstagedapp == true
        ) {
          Form.ui.tabs
            .get('tab1')
            .sections.get('tab1_section_12')
            .setVisible(false);
          Form.ui.tabs
            .get('tab1')
            .sections.get('tab1_section_16')
            .setVisible(false);
        }
      },
      function (error) {
        console.log(error.message);
      }
    );
  }
}

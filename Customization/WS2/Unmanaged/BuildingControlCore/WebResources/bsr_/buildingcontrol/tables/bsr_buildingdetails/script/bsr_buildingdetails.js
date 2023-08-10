"use strict";

var BuildingDetails;

(function (BuildingDetails) {
  function ShowHidePrimaryUseFields(executionContext) {
    var formContext = executionContext.getFormContext();

    console.log("formContext: ", formContext);

    if (
      formContext.getAttribute("bsr_buildingcategory") !== null ||
      formContext.getAttribute("bsr_buildingcategory") !== undefined
    ) {
      var buildType = formContext
        .getAttribute("bsr_buildingcategory")
        .getValue();

      console.log("buildType: ", buildType);

      if (buildType === 760810000) {
        console.log("buildType: New Build");

        formContext.getControl("bsr_primaryuse").setVisible(true);
        formContext.getControl("bsr_changeprimaryuse").setVisible(false);
        formContext.getControl("bsr_currentprimaryuse").setVisible(false);
        formContext.getControl("bsr_proposedprimaryuse").setVisible(false);
      } else if (buildType === 760810001) {
        console.log("buildType: Change of use");

        formContext.getControl("bsr_primaryuse").setVisible(false);
        formContext.getControl("bsr_changeprimaryuse").setVisible(true);
        formContext.getControl("bsr_currentprimaryuse").setVisible(false);
        formContext.getControl("bsr_proposedprimaryuse").setVisible(false);
      } else if (buildType === 760810002) {
        console.log("buildType: Existing building");

        formContext.getControl("bsr_primaryuse").setVisible(false);
        formContext.getControl("bsr_changeprimaryuse").setVisible(false);
        formContext.getControl("bsr_currentprimaryuse").setVisible(true);
        formContext.getControl("bsr_proposedprimaryuse").setVisible(true);
      }
    }
  }

  BuildingDetails.ShowHidePrimaryUseFields = ShowHidePrimaryUseFields;
})(BuildingDetails || (BuildingDetails = {}));

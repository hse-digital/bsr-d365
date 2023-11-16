declare namespace Form.bsr_buildingcontrollifecycle.Quick {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "bsr_allrequirementsassessed"): Xrm.OptionSetAttribute<bsr_allrequirementsassessed> | null;
      get(name: "bsr_allrequirementssubmitted"): Xrm.OptionSetAttribute<bsr_allrequirementssubmitted> | null;
      get(name: "bsr_appassesscomplete"): Xrm.OptionSetAttribute<bsr_appassesscomplete> | null;
      get(name: "bsr_appassessdatecomplete"): Xrm.DateAttribute | null;
      get(name: "bsr_approvaldecisionissueddate"): Xrm.DateAttribute | null;
      get(name: "bsr_approvalrequirementsdecisionissueddate"): Xrm.DateAttribute | null;
      get(name: "bsr_assessrecordsdatefinalised"): Xrm.DateAttribute | null;
      get(name: "bsr_bcaaapplication"): Xrm.LookupAttribute<"bsr_buildingcontrolapplication"> | null;
      get(name: "bsr_bcaaapproval"): Xrm.OptionSetAttribute<boolean> | null;
      get(name: "bsr_bcaaapprovalrequirements"): Xrm.OptionSetAttribute<boolean> | null;
      get(name: "bsr_bcaarejection"): Xrm.OptionSetAttribute<boolean> | null;
      get(name: "bsr_buildingdetails"): Xrm.LookupAttribute<"bsr_buildingdetails"> | null;
      get(name: "bsr_buildinspectionscompletedate"): Xrm.DateAttribute | null;
      get(name: "bsr_finaliseassessrecords"): Xrm.OptionSetAttribute<bsr_finaliseassessrecords> | null;
      get(name: "bsr_isbuildcomplete"): Xrm.OptionSetAttribute<bsr_isbuildcomplete> | null;
      get(name: "bsr_name"): Xrm.Attribute<string>;
      get(name: "bsr_outstandingissueschecked"): Xrm.OptionSetAttribute<bsr_outstandingissueschecked> | null;
      get(name: "bsr_outstandingissuesdatecompleted"): Xrm.DateAttribute | null;
      get(name: "bsr_reglead"): Xrm.LookupAttribute<"systemuser"> | null;
      get(name: "bsr_regtaskscheduledatecreated"): Xrm.DateAttribute | null;
      get(name: "bsr_regulatorytaskschedulecreated"): Xrm.OptionSetAttribute<bsr_regulatorytaskschedulecreated> | null;
      get(name: "bsr_rejectiondecisionissueddate"): Xrm.DateAttribute | null;
      get(name: "createdon"): Xrm.DateAttribute | null;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "bsr_name"): Xrm.StringControl;
      get(name: "header_process_bsr_allrequirementsassessed"): Xrm.OptionSetControl<bsr_allrequirementsassessed> | null;
      get(name: "header_process_bsr_allrequirementssubmitted"): Xrm.OptionSetControl<bsr_allrequirementssubmitted> | null;
      get(name: "header_process_bsr_appassesscomplete"): Xrm.OptionSetControl<bsr_appassesscomplete> | null;
      get(name: "header_process_bsr_appassessdatecomplete"): Xrm.DateControl | null;
      get(name: "header_process_bsr_approvaldecisionissueddate"): Xrm.DateControl | null;
      get(name: "header_process_bsr_approvalrequirementsdecisionissueddate"): Xrm.DateControl | null;
      get(name: "header_process_bsr_assessrecordsdatefinalised"): Xrm.DateControl | null;
      get(name: "header_process_bsr_bcaaapplication"): Xrm.LookupControl<"bsr_buildingcontrolapplication"> | null;
      get(name: "header_process_bsr_bcaaapproval"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_bsr_bcaaapprovalrequirements"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_bsr_bcaarejection"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_bsr_buildingdetails"): Xrm.LookupControl<"bsr_buildingdetails"> | null;
      get(name: "header_process_bsr_buildinspectionscompletedate"): Xrm.DateControl | null;
      get(name: "header_process_bsr_buildinspectionscompletedate_1"): Xrm.DateControl | null;
      get(name: "header_process_bsr_finaliseassessrecords"): Xrm.OptionSetControl<bsr_finaliseassessrecords> | null;
      get(name: "header_process_bsr_isbuildcomplete"): Xrm.OptionSetControl<bsr_isbuildcomplete> | null;
      get(name: "header_process_bsr_isbuildcomplete_1"): Xrm.OptionSetControl<bsr_isbuildcomplete> | null;
      get(name: "header_process_bsr_outstandingissueschecked"): Xrm.OptionSetControl<bsr_outstandingissueschecked> | null;
      get(name: "header_process_bsr_outstandingissuesdatecompleted"): Xrm.DateControl | null;
      get(name: "header_process_bsr_reglead"): Xrm.LookupControl<"systemuser"> | null;
      get(name: "header_process_bsr_regtaskscheduledatecreated"): Xrm.DateControl | null;
      get(name: "header_process_bsr_regulatorytaskschedulecreated"): Xrm.OptionSetControl<bsr_regulatorytaskschedulecreated> | null;
      get(name: "header_process_bsr_rejectiondecisionissueddate"): Xrm.DateControl | null;
      get(name: "header_process_createdon"): Xrm.DateControl | null;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "bsr_allrequirementsassessed"): Xrm.OptionSetAttribute<bsr_allrequirementsassessed> | null;
    getAttribute(attributeName: "bsr_allrequirementssubmitted"): Xrm.OptionSetAttribute<bsr_allrequirementssubmitted> | null;
    getAttribute(attributeName: "bsr_appassesscomplete"): Xrm.OptionSetAttribute<bsr_appassesscomplete> | null;
    getAttribute(attributeName: "bsr_appassessdatecomplete"): Xrm.DateAttribute | null;
    getAttribute(attributeName: "bsr_approvaldecisionissueddate"): Xrm.DateAttribute | null;
    getAttribute(attributeName: "bsr_approvalrequirementsdecisionissueddate"): Xrm.DateAttribute | null;
    getAttribute(attributeName: "bsr_assessrecordsdatefinalised"): Xrm.DateAttribute | null;
    getAttribute(attributeName: "bsr_bcaaapplication"): Xrm.LookupAttribute<"bsr_buildingcontrolapplication"> | null;
    getAttribute(attributeName: "bsr_bcaaapproval"): Xrm.OptionSetAttribute<boolean> | null;
    getAttribute(attributeName: "bsr_bcaaapprovalrequirements"): Xrm.OptionSetAttribute<boolean> | null;
    getAttribute(attributeName: "bsr_bcaarejection"): Xrm.OptionSetAttribute<boolean> | null;
    getAttribute(attributeName: "bsr_buildingdetails"): Xrm.LookupAttribute<"bsr_buildingdetails"> | null;
    getAttribute(attributeName: "bsr_buildinspectionscompletedate"): Xrm.DateAttribute | null;
    getAttribute(attributeName: "bsr_finaliseassessrecords"): Xrm.OptionSetAttribute<bsr_finaliseassessrecords> | null;
    getAttribute(attributeName: "bsr_isbuildcomplete"): Xrm.OptionSetAttribute<bsr_isbuildcomplete> | null;
    getAttribute(attributeName: "bsr_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "bsr_outstandingissueschecked"): Xrm.OptionSetAttribute<bsr_outstandingissueschecked> | null;
    getAttribute(attributeName: "bsr_outstandingissuesdatecompleted"): Xrm.DateAttribute | null;
    getAttribute(attributeName: "bsr_reglead"): Xrm.LookupAttribute<"systemuser"> | null;
    getAttribute(attributeName: "bsr_regtaskscheduledatecreated"): Xrm.DateAttribute | null;
    getAttribute(attributeName: "bsr_regulatorytaskschedulecreated"): Xrm.OptionSetAttribute<bsr_regulatorytaskschedulecreated> | null;
    getAttribute(attributeName: "bsr_rejectiondecisionissueddate"): Xrm.DateAttribute | null;
    getAttribute(attributeName: "createdon"): Xrm.DateAttribute | null;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "bsr_name"): Xrm.StringControl;
    getControl(controlName: "header_process_bsr_allrequirementsassessed"): Xrm.OptionSetControl<bsr_allrequirementsassessed> | null;
    getControl(controlName: "header_process_bsr_allrequirementssubmitted"): Xrm.OptionSetControl<bsr_allrequirementssubmitted> | null;
    getControl(controlName: "header_process_bsr_appassesscomplete"): Xrm.OptionSetControl<bsr_appassesscomplete> | null;
    getControl(controlName: "header_process_bsr_appassessdatecomplete"): Xrm.DateControl | null;
    getControl(controlName: "header_process_bsr_approvaldecisionissueddate"): Xrm.DateControl | null;
    getControl(controlName: "header_process_bsr_approvalrequirementsdecisionissueddate"): Xrm.DateControl | null;
    getControl(controlName: "header_process_bsr_assessrecordsdatefinalised"): Xrm.DateControl | null;
    getControl(controlName: "header_process_bsr_bcaaapplication"): Xrm.LookupControl<"bsr_buildingcontrolapplication"> | null;
    getControl(controlName: "header_process_bsr_bcaaapproval"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_bsr_bcaaapprovalrequirements"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_bsr_bcaarejection"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_bsr_buildingdetails"): Xrm.LookupControl<"bsr_buildingdetails"> | null;
    getControl(controlName: "header_process_bsr_buildinspectionscompletedate"): Xrm.DateControl | null;
    getControl(controlName: "header_process_bsr_buildinspectionscompletedate_1"): Xrm.DateControl | null;
    getControl(controlName: "header_process_bsr_finaliseassessrecords"): Xrm.OptionSetControl<bsr_finaliseassessrecords> | null;
    getControl(controlName: "header_process_bsr_isbuildcomplete"): Xrm.OptionSetControl<bsr_isbuildcomplete> | null;
    getControl(controlName: "header_process_bsr_isbuildcomplete_1"): Xrm.OptionSetControl<bsr_isbuildcomplete> | null;
    getControl(controlName: "header_process_bsr_outstandingissueschecked"): Xrm.OptionSetControl<bsr_outstandingissueschecked> | null;
    getControl(controlName: "header_process_bsr_outstandingissuesdatecompleted"): Xrm.DateControl | null;
    getControl(controlName: "header_process_bsr_reglead"): Xrm.LookupControl<"systemuser"> | null;
    getControl(controlName: "header_process_bsr_regtaskscheduledatecreated"): Xrm.DateControl | null;
    getControl(controlName: "header_process_bsr_regulatorytaskschedulecreated"): Xrm.OptionSetControl<bsr_regulatorytaskschedulecreated> | null;
    getControl(controlName: "header_process_bsr_rejectiondecisionissueddate"): Xrm.DateControl | null;
    getControl(controlName: "header_process_createdon"): Xrm.DateControl | null;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}

declare namespace Form.bsr_changerequest.Main {
  namespace Information {
    namespace Tabs {
      interface tab_2 extends Xrm.SectionCollectionBase {
        get(name: "tab_2_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "bsr_advicesought"): Xrm.OptionSetAttribute<boolean>;
      get(name: "bsr_advicesummary"): Xrm.Attribute<string>;
      get(name: "bsr_applicantisclient"): Xrm.OptionSetAttribute<boolean>;
      get(name: "bsr_approvalstatuscode"): Xrm.OptionSetAttribute<bsr_approvalstatuscode>;
      get(name: "bsr_building"): Xrm.LookupAttribute<"bsr_building">;
      get(name: "bsr_buildingapplicationid"): Xrm.LookupAttribute<"bsr_buildingapplication">;
      get(name: "bsr_buildingcontrolapplicationid"): Xrm.LookupAttribute<"bsr_buildingcontrolapplication">;
      get(name: "bsr_buildingcontrollifecycleid"): Xrm.LookupAttribute<"bsr_buildingcontrollifecycle">;
      get(name: "bsr_changecategoryid"): Xrm.LookupAttribute<"bsr_changecategory">;
      get(name: "bsr_changedescription"): Xrm.Attribute<string>;
      get(name: "bsr_changereasons"): Xrm.MultiSelectOptionSetAttribute<bsr_changerequest_bsr_changereasons>;
      get(name: "bsr_datevalidated"): Xrm.DateAttribute;
      get(name: "bsr_declaration"): Xrm.OptionSetAttribute<boolean>;
      get(name: "bsr_impactedstages"): Xrm.Attribute<string>;
      get(name: "bsr_majorandnotifiablechange"): Xrm.OptionSetAttribute<boolean>;
      get(name: "bsr_name"): Xrm.Attribute<string>;
      get(name: "bsr_newdutyholderstartdate"): Xrm.DateAttribute;
      get(name: "bsr_otherreason"): Xrm.Attribute<string>;
      get(name: "bsr_previousdutyholderenddate"): Xrm.DateAttribute;
      get(name: "bsr_referencenumber"): Xrm.Attribute<string>;
      get(name: "bsr_reg25email"): Xrm.Attribute<string>;
      get(name: "bsr_reg25notice"): Xrm.Attribute<string>;
      get(name: "bsr_reg25noticerequired"): Xrm.OptionSetAttribute<boolean>;
      get(name: "bsr_reviewrequired"): Xrm.OptionSetAttribute<boolean>;
      get(name: "bsr_submittedbyid"): Xrm.LookupAttribute<"contact">;
      get(name: "bsr_submittedondate"): Xrm.DateAttribute;
      get(name: "bsr_typeofdutyholdercode"): Xrm.OptionSetAttribute<bsr_typeofdutyholderchoice>;
      get(name: "bsr_validationurl"): Xrm.Attribute<string>;
      get(name: "createdon"): Xrm.DateAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "statuscode"): Xrm.OptionSetAttribute<bsr_changerequest_statuscode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "Proposed_Works"): Xrm.SubGridControl<"bsr_changecategory">;
      get(name: "Related_Payment_Records"): Xrm.SubGridControl<"bsr_payment">;
      get(name: "Subgrid_new_1"): Xrm.SubGridControl<"bsr_change">;
      get(name: "Subgrid_new_2"): Xrm.SubGridControl<"bsr_changecategory">;
      get(name: "bsr_advicesought"): Xrm.OptionSetControl<boolean>;
      get(name: "bsr_advicesummary"): Xrm.StringControl;
      get(name: "bsr_applicantisclient"): Xrm.OptionSetControl<boolean>;
      get(name: "bsr_approvalstatuscode"): Xrm.OptionSetControl<bsr_approvalstatuscode>;
      get(name: "bsr_building"): Xrm.LookupControl<"bsr_building">;
      get(name: "bsr_buildingapplicationid"): Xrm.LookupControl<"bsr_buildingapplication">;
      get(name: "bsr_buildingcontrolapplicationid"): Xrm.LookupControl<"bsr_buildingcontrolapplication">;
      get(name: "bsr_buildingcontrollifecycleid"): Xrm.LookupControl<"bsr_buildingcontrollifecycle">;
      get(name: "bsr_changecategoryid"): Xrm.LookupControl<"bsr_changecategory">;
      get(name: "bsr_changedescription"): Xrm.StringControl;
      get(name: "bsr_changereasons"): Xrm.MultiSelectOptionSetControl<bsr_changerequest_bsr_changereasons>;
      get(name: "bsr_datevalidated"): Xrm.DateControl;
      get(name: "bsr_declaration"): Xrm.OptionSetControl<boolean>;
      get(name: "bsr_documenttypes"): Xrm.SubGridControl<"bsr_documenttypes">;
      get(name: "bsr_impactedstages"): Xrm.StringControl;
      get(name: "bsr_majorandnotifiablechange"): Xrm.OptionSetControl<boolean>;
      get(name: "bsr_name"): Xrm.StringControl;
      get(name: "bsr_newdutyholderstartdate"): Xrm.DateControl;
      get(name: "bsr_otherreason"): Xrm.StringControl;
      get(name: "bsr_previousdutyholderenddate"): Xrm.DateControl;
      get(name: "bsr_reg25email"): Xrm.StringControl;
      get(name: "bsr_reg25notice"): Xrm.StringControl;
      get(name: "bsr_reg25noticerequired"): Xrm.OptionSetControl<boolean>;
      get(name: "bsr_reviewrequired"): Xrm.OptionSetControl<boolean>;
      get(name: "bsr_submittedbyid"): Xrm.LookupControl<"contact">;
      get(name: "bsr_submittedondate"): Xrm.DateControl;
      get(name: "bsr_typeofdutyholdercode"): Xrm.OptionSetControl<bsr_typeofdutyholderchoice>;
      get(name: "bsr_validationurl"): Xrm.StringControl;
      get(name: "createdon"): Xrm.DateControl;
      get(name: "header_bsr_changecategoryid"): Xrm.LookupControl<"bsr_changecategory">;
      get(name: "header_bsr_referencenumber"): Xrm.StringControl;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_statuscode"): Xrm.OptionSetControl<bsr_changerequest_statuscode>;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_2"): Xrm.PageTab<Tabs.tab_2>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "bsr_advicesought"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "bsr_advicesummary"): Xrm.Attribute<string>;
    getAttribute(attributeName: "bsr_applicantisclient"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "bsr_approvalstatuscode"): Xrm.OptionSetAttribute<bsr_approvalstatuscode>;
    getAttribute(attributeName: "bsr_building"): Xrm.LookupAttribute<"bsr_building">;
    getAttribute(attributeName: "bsr_buildingapplicationid"): Xrm.LookupAttribute<"bsr_buildingapplication">;
    getAttribute(attributeName: "bsr_buildingcontrolapplicationid"): Xrm.LookupAttribute<"bsr_buildingcontrolapplication">;
    getAttribute(attributeName: "bsr_buildingcontrollifecycleid"): Xrm.LookupAttribute<"bsr_buildingcontrollifecycle">;
    getAttribute(attributeName: "bsr_changecategoryid"): Xrm.LookupAttribute<"bsr_changecategory">;
    getAttribute(attributeName: "bsr_changedescription"): Xrm.Attribute<string>;
    getAttribute(attributeName: "bsr_changereasons"): Xrm.MultiSelectOptionSetAttribute<bsr_changerequest_bsr_changereasons>;
    getAttribute(attributeName: "bsr_datevalidated"): Xrm.DateAttribute;
    getAttribute(attributeName: "bsr_declaration"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "bsr_impactedstages"): Xrm.Attribute<string>;
    getAttribute(attributeName: "bsr_majorandnotifiablechange"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "bsr_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "bsr_newdutyholderstartdate"): Xrm.DateAttribute;
    getAttribute(attributeName: "bsr_otherreason"): Xrm.Attribute<string>;
    getAttribute(attributeName: "bsr_previousdutyholderenddate"): Xrm.DateAttribute;
    getAttribute(attributeName: "bsr_referencenumber"): Xrm.Attribute<string>;
    getAttribute(attributeName: "bsr_reg25email"): Xrm.Attribute<string>;
    getAttribute(attributeName: "bsr_reg25notice"): Xrm.Attribute<string>;
    getAttribute(attributeName: "bsr_reg25noticerequired"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "bsr_reviewrequired"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "bsr_submittedbyid"): Xrm.LookupAttribute<"contact">;
    getAttribute(attributeName: "bsr_submittedondate"): Xrm.DateAttribute;
    getAttribute(attributeName: "bsr_typeofdutyholdercode"): Xrm.OptionSetAttribute<bsr_typeofdutyholderchoice>;
    getAttribute(attributeName: "bsr_validationurl"): Xrm.Attribute<string>;
    getAttribute(attributeName: "createdon"): Xrm.DateAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "statuscode"): Xrm.OptionSetAttribute<bsr_changerequest_statuscode>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "Proposed_Works"): Xrm.SubGridControl<"bsr_changecategory">;
    getControl(controlName: "Related_Payment_Records"): Xrm.SubGridControl<"bsr_payment">;
    getControl(controlName: "Subgrid_new_1"): Xrm.SubGridControl<"bsr_change">;
    getControl(controlName: "Subgrid_new_2"): Xrm.SubGridControl<"bsr_changecategory">;
    getControl(controlName: "bsr_advicesought"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "bsr_advicesummary"): Xrm.StringControl;
    getControl(controlName: "bsr_applicantisclient"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "bsr_approvalstatuscode"): Xrm.OptionSetControl<bsr_approvalstatuscode>;
    getControl(controlName: "bsr_building"): Xrm.LookupControl<"bsr_building">;
    getControl(controlName: "bsr_buildingapplicationid"): Xrm.LookupControl<"bsr_buildingapplication">;
    getControl(controlName: "bsr_buildingcontrolapplicationid"): Xrm.LookupControl<"bsr_buildingcontrolapplication">;
    getControl(controlName: "bsr_buildingcontrollifecycleid"): Xrm.LookupControl<"bsr_buildingcontrollifecycle">;
    getControl(controlName: "bsr_changecategoryid"): Xrm.LookupControl<"bsr_changecategory">;
    getControl(controlName: "bsr_changedescription"): Xrm.StringControl;
    getControl(controlName: "bsr_changereasons"): Xrm.MultiSelectOptionSetControl<bsr_changerequest_bsr_changereasons>;
    getControl(controlName: "bsr_datevalidated"): Xrm.DateControl;
    getControl(controlName: "bsr_declaration"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "bsr_documenttypes"): Xrm.SubGridControl<"bsr_documenttypes">;
    getControl(controlName: "bsr_impactedstages"): Xrm.StringControl;
    getControl(controlName: "bsr_majorandnotifiablechange"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "bsr_name"): Xrm.StringControl;
    getControl(controlName: "bsr_newdutyholderstartdate"): Xrm.DateControl;
    getControl(controlName: "bsr_otherreason"): Xrm.StringControl;
    getControl(controlName: "bsr_previousdutyholderenddate"): Xrm.DateControl;
    getControl(controlName: "bsr_reg25email"): Xrm.StringControl;
    getControl(controlName: "bsr_reg25notice"): Xrm.StringControl;
    getControl(controlName: "bsr_reg25noticerequired"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "bsr_reviewrequired"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "bsr_submittedbyid"): Xrm.LookupControl<"contact">;
    getControl(controlName: "bsr_submittedondate"): Xrm.DateControl;
    getControl(controlName: "bsr_typeofdutyholdercode"): Xrm.OptionSetControl<bsr_typeofdutyholderchoice>;
    getControl(controlName: "bsr_validationurl"): Xrm.StringControl;
    getControl(controlName: "createdon"): Xrm.DateControl;
    getControl(controlName: "header_bsr_changecategoryid"): Xrm.LookupControl<"bsr_changecategory">;
    getControl(controlName: "header_bsr_referencenumber"): Xrm.StringControl;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_statuscode"): Xrm.OptionSetControl<bsr_changerequest_statuscode>;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}

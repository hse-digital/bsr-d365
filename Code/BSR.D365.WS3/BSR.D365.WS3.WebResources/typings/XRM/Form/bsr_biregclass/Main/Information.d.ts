declare namespace Form.bsr_biregclass.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "bsr_biapplicationid"): Xrm.LookupAttribute<"bsr_buildingprofessionapplication">;
      get(name: "bsr_biclassid"): Xrm.LookupAttribute<"bsr_biclass">;
      get(name: "bsr_buildinginspectorid"): Xrm.LookupAttribute<"contact">;
      get(name: "bsr_name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "statuscode"): Xrm.OptionSetAttribute<bsr_biregclass_statuscode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "bsr_biapplicationid"): Xrm.LookupControl<"bsr_buildingprofessionapplication">;
      get(name: "bsr_biclassid"): Xrm.LookupControl<"bsr_biclass">;
      get(name: "bsr_buildinginspectorid"): Xrm.LookupControl<"contact">;
      get(name: "bsr_name"): Xrm.StringControl;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_statuscode"): Xrm.OptionSetControl<bsr_biregclass_statuscode>;
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
    getAttribute(attributeName: "bsr_biapplicationid"): Xrm.LookupAttribute<"bsr_buildingprofessionapplication">;
    getAttribute(attributeName: "bsr_biclassid"): Xrm.LookupAttribute<"bsr_biclass">;
    getAttribute(attributeName: "bsr_buildinginspectorid"): Xrm.LookupAttribute<"contact">;
    getAttribute(attributeName: "bsr_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "statuscode"): Xrm.OptionSetAttribute<bsr_biregclass_statuscode>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "bsr_biapplicationid"): Xrm.LookupControl<"bsr_buildingprofessionapplication">;
    getControl(controlName: "bsr_biclassid"): Xrm.LookupControl<"bsr_biclass">;
    getControl(controlName: "bsr_buildinginspectorid"): Xrm.LookupControl<"contact">;
    getControl(controlName: "bsr_name"): Xrm.StringControl;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_statuscode"): Xrm.OptionSetControl<bsr_biregclass_statuscode>;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}

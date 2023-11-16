declare namespace Form.bsr_changecategory.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "bsr_name"): Xrm.Attribute<string>;
      get(name: "bsr_proposedworks"): Xrm.OptionSetAttribute<boolean>;
      get(name: "bsr_servicecode"): Xrm.MultiSelectOptionSetAttribute<bsr_bsrservicecode>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "bsr_name"): Xrm.StringControl;
      get(name: "bsr_proposedworks"): Xrm.OptionSetControl<boolean>;
      get(name: "bsr_servicecode"): Xrm.MultiSelectOptionSetControl<bsr_bsrservicecode>;
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
    getAttribute(attributeName: "bsr_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "bsr_proposedworks"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "bsr_servicecode"): Xrm.MultiSelectOptionSetAttribute<bsr_bsrservicecode>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "bsr_name"): Xrm.StringControl;
    getControl(controlName: "bsr_proposedworks"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "bsr_servicecode"): Xrm.MultiSelectOptionSetControl<bsr_bsrservicecode>;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}

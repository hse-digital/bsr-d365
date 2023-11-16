interface bsr_changecategory_Base extends WebEntity {
  bsr_changecategoryid?: string | null;
  bsr_name?: string | null;
  bsr_proposedworks?: boolean | null;
  bsr_service?: bsr_bsrservicecode | null;
  bsr_servicecode?: bsr_bsrservicecode | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  statecode?: bsr_changecategory_statecode | null;
  statuscode?: bsr_changecategory_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface bsr_changecategory_Relationships {
  bsr_changecategory_bsr_changerequest?: bsr_changerequest_Result[] | null;
  bsr_changerequest_changecategoryid?: bsr_changerequest_Result[] | null;
}
interface bsr_changecategory extends bsr_changecategory_Base, bsr_changecategory_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface bsr_changecategory_Create extends bsr_changecategory {
}
interface bsr_changecategory_Update extends bsr_changecategory {
}
interface bsr_changecategory_Select {
  bsr_changecategoryid: WebAttribute<bsr_changecategory_Select, { bsr_changecategoryid: string | null }, {  }>;
  bsr_name: WebAttribute<bsr_changecategory_Select, { bsr_name: string | null }, {  }>;
  bsr_proposedworks: WebAttribute<bsr_changecategory_Select, { bsr_proposedworks: boolean | null }, {  }>;
  bsr_service: WebAttribute<bsr_changecategory_Select, { bsr_service: bsr_bsrservicecode | null }, { bsr_service_formatted?: string }>;
  bsr_servicecode: WebAttribute<bsr_changecategory_Select, { bsr_servicecode: bsr_bsrservicecode | null }, { bsr_servicecode_formatted?: string }>;
  createdby_guid: WebAttribute<bsr_changecategory_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<bsr_changecategory_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<bsr_changecategory_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<bsr_changecategory_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<bsr_changecategory_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<bsr_changecategory_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<bsr_changecategory_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<bsr_changecategory_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<bsr_changecategory_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<bsr_changecategory_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<bsr_changecategory_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<bsr_changecategory_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<bsr_changecategory_Select, { statecode: bsr_changecategory_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<bsr_changecategory_Select, { statuscode: bsr_changecategory_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<bsr_changecategory_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<bsr_changecategory_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<bsr_changecategory_Select, { versionnumber: number | null }, {  }>;
}
interface bsr_changecategory_Filter {
  bsr_changecategoryid: XQW.Guid;
  bsr_name: string;
  bsr_proposedworks: boolean;
  bsr_service: bsr_bsrservicecode;
  bsr_servicecode: bsr_bsrservicecode;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: bsr_changecategory_statecode;
  statuscode: bsr_changecategory_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface bsr_changecategory_Expand {
  bsr_changecategory_bsr_changerequest: WebExpand<bsr_changecategory_Expand, bsr_changerequest_Select, bsr_changerequest_Filter, { bsr_changecategory_bsr_changerequest: bsr_changerequest_Result[] }>;
  bsr_changerequest_changecategoryid: WebExpand<bsr_changecategory_Expand, bsr_changerequest_Select, bsr_changerequest_Filter, { bsr_changerequest_changecategoryid: bsr_changerequest_Result[] }>;
}
interface bsr_changecategory_FormattedResult {
  bsr_service_formatted?: string;
  bsr_servicecode_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface bsr_changecategory_Result extends bsr_changecategory_Base, bsr_changecategory_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface bsr_changecategory_RelatedOne {
}
interface bsr_changecategory_RelatedMany {
  bsr_changecategory_bsr_changerequest: WebMappingRetrieve<bsr_changerequest_Select,bsr_changerequest_Expand,bsr_changerequest_Filter,bsr_changerequest_Fixed,bsr_changerequest_Result,bsr_changerequest_FormattedResult>;
  bsr_changerequest_changecategoryid: WebMappingRetrieve<bsr_changerequest_Select,bsr_changerequest_Expand,bsr_changerequest_Filter,bsr_changerequest_Fixed,bsr_changerequest_Result,bsr_changerequest_FormattedResult>;
}
interface WebEntitiesRetrieve {
  bsr_changecategories: WebMappingRetrieve<bsr_changecategory_Select,bsr_changecategory_Expand,bsr_changecategory_Filter,bsr_changecategory_Fixed,bsr_changecategory_Result,bsr_changecategory_FormattedResult>;
}
interface WebEntitiesRelated {
  bsr_changecategories: WebMappingRelated<bsr_changecategory_RelatedOne,bsr_changecategory_RelatedMany>;
}
interface WebEntitiesCUDA {
  bsr_changecategories: WebMappingCUDA<bsr_changecategory_Create,bsr_changecategory_Update,bsr_changecategory_Select>;
}

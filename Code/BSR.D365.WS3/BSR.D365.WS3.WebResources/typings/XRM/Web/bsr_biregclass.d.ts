interface bsr_biregclass_Base extends WebEntity {
  bsr_biregclassid?: string | null;
  bsr_name?: string | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  statecode?: bsr_biregclass_statecode | null;
  statuscode?: bsr_biregclass_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface bsr_biregclass_Relationships {
}
interface bsr_biregclass extends bsr_biregclass_Base, bsr_biregclass_Relationships {
  bsr_biapplicationid_bind$bsr_buildingprofessionapplications?: string | null;
  bsr_biclassid_bind$bsr_biclasses?: string | null;
  bsr_buildinginspectorid_bind$contacts?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface bsr_biregclass_Create extends bsr_biregclass {
}
interface bsr_biregclass_Update extends bsr_biregclass {
}
interface bsr_biregclass_Select {
  bsr_biapplicationid_guid: WebAttribute<bsr_biregclass_Select, { bsr_biapplicationid_guid: string | null }, { bsr_biapplicationid_formatted?: string }>;
  bsr_biclassid_guid: WebAttribute<bsr_biregclass_Select, { bsr_biclassid_guid: string | null }, { bsr_biclassid_formatted?: string }>;
  bsr_biregclassid: WebAttribute<bsr_biregclass_Select, { bsr_biregclassid: string | null }, {  }>;
  bsr_buildinginspectorid_guid: WebAttribute<bsr_biregclass_Select, { bsr_buildinginspectorid_guid: string | null }, { bsr_buildinginspectorid_formatted?: string }>;
  bsr_name: WebAttribute<bsr_biregclass_Select, { bsr_name: string | null }, {  }>;
  createdby_guid: WebAttribute<bsr_biregclass_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<bsr_biregclass_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<bsr_biregclass_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<bsr_biregclass_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<bsr_biregclass_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<bsr_biregclass_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<bsr_biregclass_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<bsr_biregclass_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<bsr_biregclass_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<bsr_biregclass_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<bsr_biregclass_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<bsr_biregclass_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<bsr_biregclass_Select, { statecode: bsr_biregclass_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<bsr_biregclass_Select, { statuscode: bsr_biregclass_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<bsr_biregclass_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<bsr_biregclass_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<bsr_biregclass_Select, { versionnumber: number | null }, {  }>;
}
interface bsr_biregclass_Filter {
  bsr_biapplicationid_guid: XQW.Guid;
  bsr_biclassid_guid: XQW.Guid;
  bsr_biregclassid: XQW.Guid;
  bsr_buildinginspectorid_guid: XQW.Guid;
  bsr_name: string;
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
  statecode: bsr_biregclass_statecode;
  statuscode: bsr_biregclass_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface bsr_biregclass_Expand {
  bsr_biapplicationid: WebExpand<bsr_biregclass_Expand, bsr_buildingprofessionapplication_Select, bsr_buildingprofessionapplication_Filter, { bsr_biapplicationid: bsr_buildingprofessionapplication_Result }>;
}
interface bsr_biregclass_FormattedResult {
  bsr_biapplicationid_formatted?: string;
  bsr_biclassid_formatted?: string;
  bsr_buildinginspectorid_formatted?: string;
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
interface bsr_biregclass_Result extends bsr_biregclass_Base, bsr_biregclass_Relationships {
  "@odata.etag": string;
  bsr_biapplicationid_guid: string | null;
  bsr_biclassid_guid: string | null;
  bsr_buildinginspectorid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface bsr_biregclass_RelatedOne {
  bsr_biapplicationid: WebMappingRetrieve<bsr_buildingprofessionapplication_Select,bsr_buildingprofessionapplication_Expand,bsr_buildingprofessionapplication_Filter,bsr_buildingprofessionapplication_Fixed,bsr_buildingprofessionapplication_Result,bsr_buildingprofessionapplication_FormattedResult>;
}
interface bsr_biregclass_RelatedMany {
}
interface WebEntitiesRetrieve {
  bsr_biregclasses: WebMappingRetrieve<bsr_biregclass_Select,bsr_biregclass_Expand,bsr_biregclass_Filter,bsr_biregclass_Fixed,bsr_biregclass_Result,bsr_biregclass_FormattedResult>;
}
interface WebEntitiesRelated {
  bsr_biregclasses: WebMappingRelated<bsr_biregclass_RelatedOne,bsr_biregclass_RelatedMany>;
}
interface WebEntitiesCUDA {
  bsr_biregclasses: WebMappingCUDA<bsr_biregclass_Create,bsr_biregclass_Update,bsr_biregclass_Select>;
}

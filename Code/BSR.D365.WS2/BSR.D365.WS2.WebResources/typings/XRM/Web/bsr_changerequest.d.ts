interface bsr_changerequest_Base extends WebEntity {
  bsr_advicesought?: boolean | null;
  bsr_advicesummary?: string | null;
  bsr_applicantisclient?: boolean | null;
  bsr_approvalstatuscode?: bsr_approvalstatuscode | null;
  bsr_changedescription?: string | null;
  bsr_changereasons?: bsr_changerequest_bsr_changereasons | null;
  bsr_changerequestid?: string | null;
  bsr_datevalidated?: Date | null;
  bsr_declaration?: boolean | null;
  bsr_impactedstages?: string | null;
  bsr_informationrequest?: boolean | null;
  bsr_informationrequesttracker?: string | null;
  bsr_invalidapplicationemail?: string | null;
  bsr_invalidpplication?: boolean | null;
  bsr_majorandnotifiablechange?: boolean | null;
  bsr_name?: string | null;
  bsr_newdutyholderstartdate?: Date | null;
  bsr_otherreason?: string | null;
  bsr_previousdutyholderenddate?: Date | null;
  bsr_referencenumber?: string | null;
  bsr_reg25email?: string | null;
  bsr_reg25notice?: string | null;
  bsr_reg25noticerequired?: boolean | null;
  bsr_reviewrequired?: boolean | null;
  bsr_submittedondate?: Date | null;
  bsr_typeofdutyholdercode?: bsr_typeofdutyholderchoice | null;
  bsr_validapplication?: boolean | null;
  bsr_validationurl?: string | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  statecode?: bsr_changerequest_statecode | null;
  statuscode?: bsr_changerequest_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface bsr_changerequest_Relationships {
  bsr_changecategory_bsr_changerequest?: bsr_changecategory_Result[] | null;
  bsr_changerequest_bsr_changerequest?: bsr_changerequest_Result[] | null;
}
interface bsr_changerequest extends bsr_changerequest_Base, bsr_changerequest_Relationships {
  bsr_building_bind$bsr_buildings?: string | null;
  bsr_buildingapplicationid_bind$bsr_buildingapplications?: string | null;
  bsr_buildingcontrolapplicationid_bind$bsr_buildingcontrolapplications?: string | null;
  bsr_buildingcontrollifecycleid_bind$bsr_buildingcontrollifecycles?: string | null;
  bsr_changecategoryid_bind$bsr_changecategories?: string | null;
  bsr_structureid_bind$bsr_blocks?: string | null;
  bsr_submittedbyid_bind$contacts?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface bsr_changerequest_Create extends bsr_changerequest {
}
interface bsr_changerequest_Update extends bsr_changerequest {
}
interface bsr_changerequest_Select {
  bsr_advicesought: WebAttribute<bsr_changerequest_Select, { bsr_advicesought: boolean | null }, {  }>;
  bsr_advicesummary: WebAttribute<bsr_changerequest_Select, { bsr_advicesummary: string | null }, {  }>;
  bsr_applicantisclient: WebAttribute<bsr_changerequest_Select, { bsr_applicantisclient: boolean | null }, {  }>;
  bsr_approvalstatuscode: WebAttribute<bsr_changerequest_Select, { bsr_approvalstatuscode: bsr_approvalstatuscode | null }, { bsr_approvalstatuscode_formatted?: string }>;
  bsr_building_guid: WebAttribute<bsr_changerequest_Select, { bsr_building_guid: string | null }, { bsr_building_formatted?: string }>;
  bsr_buildingapplicationid_guid: WebAttribute<bsr_changerequest_Select, { bsr_buildingapplicationid_guid: string | null }, { bsr_buildingapplicationid_formatted?: string }>;
  bsr_buildingcontrolapplicationid_guid: WebAttribute<bsr_changerequest_Select, { bsr_buildingcontrolapplicationid_guid: string | null }, { bsr_buildingcontrolapplicationid_formatted?: string }>;
  bsr_buildingcontrollifecycleid_guid: WebAttribute<bsr_changerequest_Select, { bsr_buildingcontrollifecycleid_guid: string | null }, { bsr_buildingcontrollifecycleid_formatted?: string }>;
  bsr_changecategoryid_guid: WebAttribute<bsr_changerequest_Select, { bsr_changecategoryid_guid: string | null }, { bsr_changecategoryid_formatted?: string }>;
  bsr_changedescription: WebAttribute<bsr_changerequest_Select, { bsr_changedescription: string | null }, {  }>;
  bsr_changereasons: WebAttribute<bsr_changerequest_Select, { bsr_changereasons: bsr_changerequest_bsr_changereasons | null }, { bsr_changereasons_formatted?: string }>;
  bsr_changerequestid: WebAttribute<bsr_changerequest_Select, { bsr_changerequestid: string | null }, {  }>;
  bsr_datevalidated: WebAttribute<bsr_changerequest_Select, { bsr_datevalidated: Date | null }, { bsr_datevalidated_formatted?: string }>;
  bsr_declaration: WebAttribute<bsr_changerequest_Select, { bsr_declaration: boolean | null }, {  }>;
  bsr_impactedstages: WebAttribute<bsr_changerequest_Select, { bsr_impactedstages: string | null }, {  }>;
  bsr_informationrequest: WebAttribute<bsr_changerequest_Select, { bsr_informationrequest: boolean | null }, {  }>;
  bsr_informationrequesttracker: WebAttribute<bsr_changerequest_Select, { bsr_informationrequesttracker: string | null }, {  }>;
  bsr_invalidapplicationemail: WebAttribute<bsr_changerequest_Select, { bsr_invalidapplicationemail: string | null }, {  }>;
  bsr_invalidpplication: WebAttribute<bsr_changerequest_Select, { bsr_invalidpplication: boolean | null }, {  }>;
  bsr_majorandnotifiablechange: WebAttribute<bsr_changerequest_Select, { bsr_majorandnotifiablechange: boolean | null }, {  }>;
  bsr_name: WebAttribute<bsr_changerequest_Select, { bsr_name: string | null }, {  }>;
  bsr_newdutyholderstartdate: WebAttribute<bsr_changerequest_Select, { bsr_newdutyholderstartdate: Date | null }, { bsr_newdutyholderstartdate_formatted?: string }>;
  bsr_otherreason: WebAttribute<bsr_changerequest_Select, { bsr_otherreason: string | null }, {  }>;
  bsr_previousdutyholderenddate: WebAttribute<bsr_changerequest_Select, { bsr_previousdutyholderenddate: Date | null }, { bsr_previousdutyholderenddate_formatted?: string }>;
  bsr_referencenumber: WebAttribute<bsr_changerequest_Select, { bsr_referencenumber: string | null }, {  }>;
  bsr_reg25email: WebAttribute<bsr_changerequest_Select, { bsr_reg25email: string | null }, {  }>;
  bsr_reg25notice: WebAttribute<bsr_changerequest_Select, { bsr_reg25notice: string | null }, {  }>;
  bsr_reg25noticerequired: WebAttribute<bsr_changerequest_Select, { bsr_reg25noticerequired: boolean | null }, {  }>;
  bsr_reviewrequired: WebAttribute<bsr_changerequest_Select, { bsr_reviewrequired: boolean | null }, {  }>;
  bsr_structureid_guid: WebAttribute<bsr_changerequest_Select, { bsr_structureid_guid: string | null }, { bsr_structureid_formatted?: string }>;
  bsr_submittedbyid_guid: WebAttribute<bsr_changerequest_Select, { bsr_submittedbyid_guid: string | null }, { bsr_submittedbyid_formatted?: string }>;
  bsr_submittedondate: WebAttribute<bsr_changerequest_Select, { bsr_submittedondate: Date | null }, { bsr_submittedondate_formatted?: string }>;
  bsr_typeofdutyholdercode: WebAttribute<bsr_changerequest_Select, { bsr_typeofdutyholdercode: bsr_typeofdutyholderchoice | null }, { bsr_typeofdutyholdercode_formatted?: string }>;
  bsr_validapplication: WebAttribute<bsr_changerequest_Select, { bsr_validapplication: boolean | null }, {  }>;
  bsr_validationurl: WebAttribute<bsr_changerequest_Select, { bsr_validationurl: string | null }, {  }>;
  createdby_guid: WebAttribute<bsr_changerequest_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<bsr_changerequest_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<bsr_changerequest_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<bsr_changerequest_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<bsr_changerequest_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<bsr_changerequest_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<bsr_changerequest_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<bsr_changerequest_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<bsr_changerequest_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<bsr_changerequest_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<bsr_changerequest_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<bsr_changerequest_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<bsr_changerequest_Select, { statecode: bsr_changerequest_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<bsr_changerequest_Select, { statuscode: bsr_changerequest_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<bsr_changerequest_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<bsr_changerequest_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<bsr_changerequest_Select, { versionnumber: number | null }, {  }>;
}
interface bsr_changerequest_Filter {
  bsr_advicesought: boolean;
  bsr_advicesummary: string;
  bsr_applicantisclient: boolean;
  bsr_approvalstatuscode: bsr_approvalstatuscode;
  bsr_building_guid: XQW.Guid;
  bsr_buildingapplicationid_guid: XQW.Guid;
  bsr_buildingcontrolapplicationid_guid: XQW.Guid;
  bsr_buildingcontrollifecycleid_guid: XQW.Guid;
  bsr_changecategoryid_guid: XQW.Guid;
  bsr_changedescription: string;
  bsr_changereasons: bsr_changerequest_bsr_changereasons;
  bsr_changerequestid: XQW.Guid;
  bsr_datevalidated: Date;
  bsr_declaration: boolean;
  bsr_impactedstages: string;
  bsr_informationrequest: boolean;
  bsr_informationrequesttracker: string;
  bsr_invalidapplicationemail: string;
  bsr_invalidpplication: boolean;
  bsr_majorandnotifiablechange: boolean;
  bsr_name: string;
  bsr_newdutyholderstartdate: Date;
  bsr_otherreason: string;
  bsr_previousdutyholderenddate: Date;
  bsr_referencenumber: string;
  bsr_reg25email: string;
  bsr_reg25notice: string;
  bsr_reg25noticerequired: boolean;
  bsr_reviewrequired: boolean;
  bsr_structureid_guid: XQW.Guid;
  bsr_submittedbyid_guid: XQW.Guid;
  bsr_submittedondate: Date;
  bsr_typeofdutyholdercode: bsr_typeofdutyholderchoice;
  bsr_validapplication: boolean;
  bsr_validationurl: string;
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
  statecode: bsr_changerequest_statecode;
  statuscode: bsr_changerequest_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface bsr_changerequest_Expand {
  bsr_buildingcontrolapplicationid: WebExpand<bsr_changerequest_Expand, bsr_buildingcontrolapplication_Select, bsr_buildingcontrolapplication_Filter, { bsr_buildingcontrolapplicationid: bsr_buildingcontrolapplication_Result }>;
  bsr_buildingcontrollifecycleid: WebExpand<bsr_changerequest_Expand, bsr_buildingcontrollifecycle_Select, bsr_buildingcontrollifecycle_Filter, { bsr_buildingcontrollifecycleid: bsr_buildingcontrollifecycle_Result }>;
  bsr_changecategory_bsr_changerequest: WebExpand<bsr_changerequest_Expand, bsr_changecategory_Select, bsr_changecategory_Filter, { bsr_changecategory_bsr_changerequest: bsr_changecategory_Result[] }>;
  bsr_changecategoryid: WebExpand<bsr_changerequest_Expand, bsr_changecategory_Select, bsr_changecategory_Filter, { bsr_changecategoryid: bsr_changecategory_Result }>;
  bsr_changerequest_bsr_changerequest: WebExpand<bsr_changerequest_Expand, bsr_changerequest_Select, bsr_changerequest_Filter, { bsr_changerequest_bsr_changerequest: bsr_changerequest_Result[] }>;
}
interface bsr_changerequest_FormattedResult {
  bsr_approvalstatuscode_formatted?: string;
  bsr_building_formatted?: string;
  bsr_buildingapplicationid_formatted?: string;
  bsr_buildingcontrolapplicationid_formatted?: string;
  bsr_buildingcontrollifecycleid_formatted?: string;
  bsr_changecategoryid_formatted?: string;
  bsr_changereasons_formatted?: string;
  bsr_datevalidated_formatted?: string;
  bsr_newdutyholderstartdate_formatted?: string;
  bsr_previousdutyholderenddate_formatted?: string;
  bsr_structureid_formatted?: string;
  bsr_submittedbyid_formatted?: string;
  bsr_submittedondate_formatted?: string;
  bsr_typeofdutyholdercode_formatted?: string;
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
interface bsr_changerequest_Result extends bsr_changerequest_Base, bsr_changerequest_Relationships {
  "@odata.etag": string;
  bsr_building_guid: string | null;
  bsr_buildingapplicationid_guid: string | null;
  bsr_buildingcontrolapplicationid_guid: string | null;
  bsr_buildingcontrollifecycleid_guid: string | null;
  bsr_changecategoryid_guid: string | null;
  bsr_structureid_guid: string | null;
  bsr_submittedbyid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface bsr_changerequest_RelatedOne {
  bsr_buildingcontrolapplicationid: WebMappingRetrieve<bsr_buildingcontrolapplication_Select,bsr_buildingcontrolapplication_Expand,bsr_buildingcontrolapplication_Filter,bsr_buildingcontrolapplication_Fixed,bsr_buildingcontrolapplication_Result,bsr_buildingcontrolapplication_FormattedResult>;
  bsr_buildingcontrollifecycleid: WebMappingRetrieve<bsr_buildingcontrollifecycle_Select,bsr_buildingcontrollifecycle_Expand,bsr_buildingcontrollifecycle_Filter,bsr_buildingcontrollifecycle_Fixed,bsr_buildingcontrollifecycle_Result,bsr_buildingcontrollifecycle_FormattedResult>;
  bsr_changecategoryid: WebMappingRetrieve<bsr_changecategory_Select,bsr_changecategory_Expand,bsr_changecategory_Filter,bsr_changecategory_Fixed,bsr_changecategory_Result,bsr_changecategory_FormattedResult>;
}
interface bsr_changerequest_RelatedMany {
  bsr_changecategory_bsr_changerequest: WebMappingRetrieve<bsr_changecategory_Select,bsr_changecategory_Expand,bsr_changecategory_Filter,bsr_changecategory_Fixed,bsr_changecategory_Result,bsr_changecategory_FormattedResult>;
  bsr_changerequest_bsr_changerequest: WebMappingRetrieve<bsr_changerequest_Select,bsr_changerequest_Expand,bsr_changerequest_Filter,bsr_changerequest_Fixed,bsr_changerequest_Result,bsr_changerequest_FormattedResult>;
}
interface WebEntitiesRetrieve {
  bsr_changerequests: WebMappingRetrieve<bsr_changerequest_Select,bsr_changerequest_Expand,bsr_changerequest_Filter,bsr_changerequest_Fixed,bsr_changerequest_Result,bsr_changerequest_FormattedResult>;
}
interface WebEntitiesRelated {
  bsr_changerequests: WebMappingRelated<bsr_changerequest_RelatedOne,bsr_changerequest_RelatedMany>;
}
interface WebEntitiesCUDA {
  bsr_changerequests: WebMappingCUDA<bsr_changerequest_Create,bsr_changerequest_Update,bsr_changerequest_Select>;
}

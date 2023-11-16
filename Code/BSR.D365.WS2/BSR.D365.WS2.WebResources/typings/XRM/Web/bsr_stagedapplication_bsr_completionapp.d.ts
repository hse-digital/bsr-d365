interface bsr_stagedapplication_bsr_completionapp_Base extends WebEntity {
  bsr_buildingcontrolapplicationidone?: string | null;
  bsr_buildingcontrolapplicationidtwo?: string | null;
  bsr_stagedapplication_bsr_completionappid?: string | null;
  versionnumber?: number | null;
}
interface bsr_stagedapplication_bsr_completionapp_Relationships {
  bsr_stagedapplication_bsr_completionapp?: bsr_buildingcontrolapplication_Result[] | null;
}
interface bsr_stagedapplication_bsr_completionapp extends bsr_stagedapplication_bsr_completionapp_Base, bsr_stagedapplication_bsr_completionapp_Relationships {
}
interface bsr_stagedapplication_bsr_completionapp_Create extends bsr_stagedapplication_bsr_completionapp {
}
interface bsr_stagedapplication_bsr_completionapp_Update extends bsr_stagedapplication_bsr_completionapp {
}
interface bsr_stagedapplication_bsr_completionapp_Select {
  bsr_buildingcontrolapplicationidone: WebAttribute<bsr_stagedapplication_bsr_completionapp_Select, { bsr_buildingcontrolapplicationidone: string | null }, {  }>;
  bsr_buildingcontrolapplicationidtwo: WebAttribute<bsr_stagedapplication_bsr_completionapp_Select, { bsr_buildingcontrolapplicationidtwo: string | null }, {  }>;
  bsr_stagedapplication_bsr_completionappid: WebAttribute<bsr_stagedapplication_bsr_completionapp_Select, { bsr_stagedapplication_bsr_completionappid: string | null }, {  }>;
  versionnumber: WebAttribute<bsr_stagedapplication_bsr_completionapp_Select, { versionnumber: number | null }, {  }>;
}
interface bsr_stagedapplication_bsr_completionapp_Filter {
  bsr_buildingcontrolapplicationidone: XQW.Guid;
  bsr_buildingcontrolapplicationidtwo: XQW.Guid;
  bsr_stagedapplication_bsr_completionappid: XQW.Guid;
  versionnumber: number;
}
interface bsr_stagedapplication_bsr_completionapp_Expand {
  bsr_stagedapplication_bsr_completionapp: WebExpand<bsr_stagedapplication_bsr_completionapp_Expand, bsr_buildingcontrolapplication_Select, bsr_buildingcontrolapplication_Filter, { bsr_stagedapplication_bsr_completionapp: bsr_buildingcontrolapplication_Result[] }>;
}
interface bsr_stagedapplication_bsr_completionapp_FormattedResult {
}
interface bsr_stagedapplication_bsr_completionapp_Result extends bsr_stagedapplication_bsr_completionapp_Base, bsr_stagedapplication_bsr_completionapp_Relationships {
  "@odata.etag": string;
}
interface bsr_stagedapplication_bsr_completionapp_RelatedOne {
}
interface bsr_stagedapplication_bsr_completionapp_RelatedMany {
  bsr_stagedapplication_bsr_completionapp: WebMappingRetrieve<bsr_buildingcontrolapplication_Select,bsr_buildingcontrolapplication_Expand,bsr_buildingcontrolapplication_Filter,bsr_buildingcontrolapplication_Fixed,bsr_buildingcontrolapplication_Result,bsr_buildingcontrolapplication_FormattedResult>;
}
interface WebEntitiesRetrieve {
  bsr_stagedapplication_bsr_completionappset: WebMappingRetrieve<bsr_stagedapplication_bsr_completionapp_Select,bsr_stagedapplication_bsr_completionapp_Expand,bsr_stagedapplication_bsr_completionapp_Filter,bsr_stagedapplication_bsr_completionapp_Fixed,bsr_stagedapplication_bsr_completionapp_Result,bsr_stagedapplication_bsr_completionapp_FormattedResult>;
}
interface WebEntitiesRelated {
  bsr_stagedapplication_bsr_completionappset: WebMappingRelated<bsr_stagedapplication_bsr_completionapp_RelatedOne,bsr_stagedapplication_bsr_completionapp_RelatedMany>;
}
interface WebEntitiesCUDA {
  bsr_stagedapplication_bsr_completionappset: WebMappingCUDA<bsr_stagedapplication_bsr_completionapp_Create,bsr_stagedapplication_bsr_completionapp_Update,bsr_stagedapplication_bsr_completionapp_Select>;
}

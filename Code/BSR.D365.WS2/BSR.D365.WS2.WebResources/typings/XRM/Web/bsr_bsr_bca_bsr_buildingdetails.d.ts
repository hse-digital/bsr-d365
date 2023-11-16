interface bsr_bsr_bca_bsr_buildingdetails_Base extends WebEntity {
  bsr_bsr_bca_bsr_buildingdetailsid?: string | null;
  bsr_buildingcontrolapplicationid?: string | null;
  bsr_buildingdetailsid?: string | null;
  versionnumber?: number | null;
}
interface bsr_bsr_bca_bsr_buildingdetails_Relationships {
  bsr_bsr_bca_bsr_buildingdetails?: bsr_buildingcontrolapplication_Result[] | null;
}
interface bsr_bsr_bca_bsr_buildingdetails extends bsr_bsr_bca_bsr_buildingdetails_Base, bsr_bsr_bca_bsr_buildingdetails_Relationships {
}
interface bsr_bsr_bca_bsr_buildingdetails_Create extends bsr_bsr_bca_bsr_buildingdetails {
}
interface bsr_bsr_bca_bsr_buildingdetails_Update extends bsr_bsr_bca_bsr_buildingdetails {
}
interface bsr_bsr_bca_bsr_buildingdetails_Select {
  bsr_bsr_bca_bsr_buildingdetailsid: WebAttribute<bsr_bsr_bca_bsr_buildingdetails_Select, { bsr_bsr_bca_bsr_buildingdetailsid: string | null }, {  }>;
  bsr_buildingcontrolapplicationid: WebAttribute<bsr_bsr_bca_bsr_buildingdetails_Select, { bsr_buildingcontrolapplicationid: string | null }, {  }>;
  bsr_buildingdetailsid: WebAttribute<bsr_bsr_bca_bsr_buildingdetails_Select, { bsr_buildingdetailsid: string | null }, {  }>;
  versionnumber: WebAttribute<bsr_bsr_bca_bsr_buildingdetails_Select, { versionnumber: number | null }, {  }>;
}
interface bsr_bsr_bca_bsr_buildingdetails_Filter {
  bsr_bsr_bca_bsr_buildingdetailsid: XQW.Guid;
  bsr_buildingcontrolapplicationid: XQW.Guid;
  bsr_buildingdetailsid: XQW.Guid;
  versionnumber: number;
}
interface bsr_bsr_bca_bsr_buildingdetails_Expand {
  bsr_bsr_bca_bsr_buildingdetails: WebExpand<bsr_bsr_bca_bsr_buildingdetails_Expand, bsr_buildingcontrolapplication_Select, bsr_buildingcontrolapplication_Filter, { bsr_bsr_bca_bsr_buildingdetails: bsr_buildingcontrolapplication_Result[] }>;
}
interface bsr_bsr_bca_bsr_buildingdetails_FormattedResult {
}
interface bsr_bsr_bca_bsr_buildingdetails_Result extends bsr_bsr_bca_bsr_buildingdetails_Base, bsr_bsr_bca_bsr_buildingdetails_Relationships {
  "@odata.etag": string;
}
interface bsr_bsr_bca_bsr_buildingdetails_RelatedOne {
}
interface bsr_bsr_bca_bsr_buildingdetails_RelatedMany {
  bsr_bsr_bca_bsr_buildingdetails: WebMappingRetrieve<bsr_buildingcontrolapplication_Select,bsr_buildingcontrolapplication_Expand,bsr_buildingcontrolapplication_Filter,bsr_buildingcontrolapplication_Fixed,bsr_buildingcontrolapplication_Result,bsr_buildingcontrolapplication_FormattedResult>;
}
interface WebEntitiesRetrieve {
  bsr_bsr_bca_bsr_buildingdetailsset: WebMappingRetrieve<bsr_bsr_bca_bsr_buildingdetails_Select,bsr_bsr_bca_bsr_buildingdetails_Expand,bsr_bsr_bca_bsr_buildingdetails_Filter,bsr_bsr_bca_bsr_buildingdetails_Fixed,bsr_bsr_bca_bsr_buildingdetails_Result,bsr_bsr_bca_bsr_buildingdetails_FormattedResult>;
}
interface WebEntitiesRelated {
  bsr_bsr_bca_bsr_buildingdetailsset: WebMappingRelated<bsr_bsr_bca_bsr_buildingdetails_RelatedOne,bsr_bsr_bca_bsr_buildingdetails_RelatedMany>;
}
interface WebEntitiesCUDA {
  bsr_bsr_bca_bsr_buildingdetailsset: WebMappingCUDA<bsr_bsr_bca_bsr_buildingdetails_Create,bsr_bsr_bca_bsr_buildingdetails_Update,bsr_bsr_bca_bsr_buildingdetails_Select>;
}

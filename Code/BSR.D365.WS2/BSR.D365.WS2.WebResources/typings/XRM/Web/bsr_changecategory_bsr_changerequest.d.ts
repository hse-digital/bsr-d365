interface bsr_changecategory_bsr_changerequest_Base extends WebEntity {
  bsr_changecategory_bsr_changerequestid?: string | null;
  bsr_changecategoryid?: string | null;
  bsr_changerequestid?: string | null;
  versionnumber?: number | null;
}
interface bsr_changecategory_bsr_changerequest_Relationships {
  bsr_changecategory_bsr_changerequest?: bsr_changecategory_Result[] | null;
}
interface bsr_changecategory_bsr_changerequest extends bsr_changecategory_bsr_changerequest_Base, bsr_changecategory_bsr_changerequest_Relationships {
}
interface bsr_changecategory_bsr_changerequest_Create extends bsr_changecategory_bsr_changerequest {
}
interface bsr_changecategory_bsr_changerequest_Update extends bsr_changecategory_bsr_changerequest {
}
interface bsr_changecategory_bsr_changerequest_Select {
  bsr_changecategory_bsr_changerequestid: WebAttribute<bsr_changecategory_bsr_changerequest_Select, { bsr_changecategory_bsr_changerequestid: string | null }, {  }>;
  bsr_changecategoryid: WebAttribute<bsr_changecategory_bsr_changerequest_Select, { bsr_changecategoryid: string | null }, {  }>;
  bsr_changerequestid: WebAttribute<bsr_changecategory_bsr_changerequest_Select, { bsr_changerequestid: string | null }, {  }>;
  versionnumber: WebAttribute<bsr_changecategory_bsr_changerequest_Select, { versionnumber: number | null }, {  }>;
}
interface bsr_changecategory_bsr_changerequest_Filter {
  bsr_changecategory_bsr_changerequestid: XQW.Guid;
  bsr_changecategoryid: XQW.Guid;
  bsr_changerequestid: XQW.Guid;
  versionnumber: number;
}
interface bsr_changecategory_bsr_changerequest_Expand {
  bsr_changecategory_bsr_changerequest: WebExpand<bsr_changecategory_bsr_changerequest_Expand, bsr_changecategory_Select, bsr_changecategory_Filter, { bsr_changecategory_bsr_changerequest: bsr_changecategory_Result[] }>;
}
interface bsr_changecategory_bsr_changerequest_FormattedResult {
}
interface bsr_changecategory_bsr_changerequest_Result extends bsr_changecategory_bsr_changerequest_Base, bsr_changecategory_bsr_changerequest_Relationships {
  "@odata.etag": string;
}
interface bsr_changecategory_bsr_changerequest_RelatedOne {
}
interface bsr_changecategory_bsr_changerequest_RelatedMany {
  bsr_changecategory_bsr_changerequest: WebMappingRetrieve<bsr_changecategory_Select,bsr_changecategory_Expand,bsr_changecategory_Filter,bsr_changecategory_Fixed,bsr_changecategory_Result,bsr_changecategory_FormattedResult>;
}
interface WebEntitiesRetrieve {
  bsr_changecategory_bsr_changerequestset: WebMappingRetrieve<bsr_changecategory_bsr_changerequest_Select,bsr_changecategory_bsr_changerequest_Expand,bsr_changecategory_bsr_changerequest_Filter,bsr_changecategory_bsr_changerequest_Fixed,bsr_changecategory_bsr_changerequest_Result,bsr_changecategory_bsr_changerequest_FormattedResult>;
}
interface WebEntitiesRelated {
  bsr_changecategory_bsr_changerequestset: WebMappingRelated<bsr_changecategory_bsr_changerequest_RelatedOne,bsr_changecategory_bsr_changerequest_RelatedMany>;
}
interface WebEntitiesCUDA {
  bsr_changecategory_bsr_changerequestset: WebMappingCUDA<bsr_changecategory_bsr_changerequest_Create,bsr_changecategory_bsr_changerequest_Update,bsr_changecategory_bsr_changerequest_Select>;
}

interface bsr_changerequest_bsr_changerequest_Base extends WebEntity {
  bsr_changerequest_bsr_changerequestid?: string | null;
  bsr_changerequestidone?: string | null;
  bsr_changerequestidtwo?: string | null;
  versionnumber?: number | null;
}
interface bsr_changerequest_bsr_changerequest_Relationships {
  bsr_changerequest_bsr_changerequest?: bsr_changerequest_Result[] | null;
}
interface bsr_changerequest_bsr_changerequest extends bsr_changerequest_bsr_changerequest_Base, bsr_changerequest_bsr_changerequest_Relationships {
}
interface bsr_changerequest_bsr_changerequest_Create extends bsr_changerequest_bsr_changerequest {
}
interface bsr_changerequest_bsr_changerequest_Update extends bsr_changerequest_bsr_changerequest {
}
interface bsr_changerequest_bsr_changerequest_Select {
  bsr_changerequest_bsr_changerequestid: WebAttribute<bsr_changerequest_bsr_changerequest_Select, { bsr_changerequest_bsr_changerequestid: string | null }, {  }>;
  bsr_changerequestidone: WebAttribute<bsr_changerequest_bsr_changerequest_Select, { bsr_changerequestidone: string | null }, {  }>;
  bsr_changerequestidtwo: WebAttribute<bsr_changerequest_bsr_changerequest_Select, { bsr_changerequestidtwo: string | null }, {  }>;
  versionnumber: WebAttribute<bsr_changerequest_bsr_changerequest_Select, { versionnumber: number | null }, {  }>;
}
interface bsr_changerequest_bsr_changerequest_Filter {
  bsr_changerequest_bsr_changerequestid: XQW.Guid;
  bsr_changerequestidone: XQW.Guid;
  bsr_changerequestidtwo: XQW.Guid;
  versionnumber: number;
}
interface bsr_changerequest_bsr_changerequest_Expand {
  bsr_changerequest_bsr_changerequest: WebExpand<bsr_changerequest_bsr_changerequest_Expand, bsr_changerequest_Select, bsr_changerequest_Filter, { bsr_changerequest_bsr_changerequest: bsr_changerequest_Result[] }>;
}
interface bsr_changerequest_bsr_changerequest_FormattedResult {
}
interface bsr_changerequest_bsr_changerequest_Result extends bsr_changerequest_bsr_changerequest_Base, bsr_changerequest_bsr_changerequest_Relationships {
  "@odata.etag": string;
}
interface bsr_changerequest_bsr_changerequest_RelatedOne {
}
interface bsr_changerequest_bsr_changerequest_RelatedMany {
  bsr_changerequest_bsr_changerequest: WebMappingRetrieve<bsr_changerequest_Select,bsr_changerequest_Expand,bsr_changerequest_Filter,bsr_changerequest_Fixed,bsr_changerequest_Result,bsr_changerequest_FormattedResult>;
}
interface WebEntitiesRetrieve {
  bsr_changerequest_bsr_changerequestset: WebMappingRetrieve<bsr_changerequest_bsr_changerequest_Select,bsr_changerequest_bsr_changerequest_Expand,bsr_changerequest_bsr_changerequest_Filter,bsr_changerequest_bsr_changerequest_Fixed,bsr_changerequest_bsr_changerequest_Result,bsr_changerequest_bsr_changerequest_FormattedResult>;
}
interface WebEntitiesRelated {
  bsr_changerequest_bsr_changerequestset: WebMappingRelated<bsr_changerequest_bsr_changerequest_RelatedOne,bsr_changerequest_bsr_changerequest_RelatedMany>;
}
interface WebEntitiesCUDA {
  bsr_changerequest_bsr_changerequestset: WebMappingCUDA<bsr_changerequest_bsr_changerequest_Create,bsr_changerequest_bsr_changerequest_Update,bsr_changerequest_bsr_changerequest_Select>;
}

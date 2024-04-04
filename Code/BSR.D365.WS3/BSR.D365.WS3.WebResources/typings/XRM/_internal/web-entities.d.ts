interface WebMappingRetrieve<ISelect, IExpand, IFilter, IFixed, Result, FormattedResult> {
}
interface WebMappingCUDA<ICreate, IUpdate, ISelect> {
}
interface WebMappingRelated<ISingle, IMultiple> {
}
interface WebEntity {
}
interface WebEntity_Fixed {
  "@odata.etag": string;
}
interface bsr_buildingprofessionapplication_Base extends WebEntity {
}
interface bsr_buildingprofessionapplication_Fixed extends WebEntity_Fixed {
  bsr_buildingprofessionapplicationid: string;
}
interface bsr_buildingprofessionapplication extends bsr_buildingprofessionapplication_Base, bsr_buildingprofessionapplication_Relationships {
}
interface bsr_buildingprofessionapplication_Relationships {
}
interface bsr_buildingprofessionapplication_Result extends bsr_buildingprofessionapplication_Base, bsr_buildingprofessionapplication_Relationships {
}
interface bsr_buildingprofessionapplication_FormattedResult {
}
interface bsr_buildingprofessionapplication_Select {
}
interface bsr_buildingprofessionapplication_Expand {
}
interface bsr_buildingprofessionapplication_Filter {
}
interface bsr_buildingprofessionapplication_Create extends bsr_buildingprofessionapplication {
}
interface bsr_buildingprofessionapplication_Update extends bsr_buildingprofessionapplication {
}
interface bsr_biregclass_Base extends WebEntity {
}
interface bsr_biregclass_Fixed extends WebEntity_Fixed {
  bsr_biregclassid: string;
}
interface bsr_biregclass extends bsr_biregclass_Base, bsr_biregclass_Relationships {
}
interface bsr_biregclass_Relationships {
}
interface bsr_biregclass_Result extends bsr_biregclass_Base, bsr_biregclass_Relationships {
}
interface bsr_biregclass_FormattedResult {
}
interface bsr_biregclass_Select {
}
interface bsr_biregclass_Expand {
}
interface bsr_biregclass_Filter {
}
interface bsr_biregclass_Create extends bsr_biregclass {
}
interface bsr_biregclass_Update extends bsr_biregclass {
}

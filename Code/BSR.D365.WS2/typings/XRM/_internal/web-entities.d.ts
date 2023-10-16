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
interface bsr_buildingcontrolapplication_Base extends WebEntity {
}
interface bsr_buildingcontrolapplication_Fixed extends WebEntity_Fixed {
  bsr_buildingcontrolapplicationid: string;
}
interface bsr_buildingcontrolapplication extends bsr_buildingcontrolapplication_Base, bsr_buildingcontrolapplication_Relationships {
}
interface bsr_buildingcontrolapplication_Relationships {
}
interface bsr_buildingcontrolapplication_Result extends bsr_buildingcontrolapplication_Base, bsr_buildingcontrolapplication_Relationships {
}
interface bsr_buildingcontrolapplication_FormattedResult {
}
interface bsr_buildingcontrolapplication_Select {
}
interface bsr_buildingcontrolapplication_Expand {
}
interface bsr_buildingcontrolapplication_Filter {
}
interface bsr_buildingcontrolapplication_Create extends bsr_buildingcontrolapplication {
}
interface bsr_buildingcontrolapplication_Update extends bsr_buildingcontrolapplication {
}
interface bsr_buildingdetails_Base extends WebEntity {
}
interface bsr_buildingdetails_Fixed extends WebEntity_Fixed {
  bsr_buildingdetailsid: string;
}
interface bsr_buildingdetails extends bsr_buildingdetails_Base, bsr_buildingdetails_Relationships {
}
interface bsr_buildingdetails_Relationships {
}
interface bsr_buildingdetails_Result extends bsr_buildingdetails_Base, bsr_buildingdetails_Relationships {
}
interface bsr_buildingdetails_FormattedResult {
}
interface bsr_buildingdetails_Select {
}
interface bsr_buildingdetails_Expand {
}
interface bsr_buildingdetails_Filter {
}
interface bsr_buildingdetails_Create extends bsr_buildingdetails {
}
interface bsr_buildingdetails_Update extends bsr_buildingdetails {
}

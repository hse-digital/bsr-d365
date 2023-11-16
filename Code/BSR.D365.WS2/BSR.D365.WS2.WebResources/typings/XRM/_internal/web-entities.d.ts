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
interface bsr_bsr_bca_bsr_buildingdetails_Base extends WebEntity {
}
interface bsr_bsr_bca_bsr_buildingdetails_Fixed extends WebEntity_Fixed {
  bsr_bsr_bca_bsr_buildingdetailsid: string;
}
interface bsr_bsr_bca_bsr_buildingdetails extends bsr_bsr_bca_bsr_buildingdetails_Base, bsr_bsr_bca_bsr_buildingdetails_Relationships {
}
interface bsr_bsr_bca_bsr_buildingdetails_Relationships {
}
interface bsr_bsr_bca_bsr_buildingdetails_Result extends bsr_bsr_bca_bsr_buildingdetails_Base, bsr_bsr_bca_bsr_buildingdetails_Relationships {
}
interface bsr_bsr_bca_bsr_buildingdetails_FormattedResult {
}
interface bsr_bsr_bca_bsr_buildingdetails_Select {
}
interface bsr_bsr_bca_bsr_buildingdetails_Expand {
}
interface bsr_bsr_bca_bsr_buildingdetails_Filter {
}
interface bsr_bsr_bca_bsr_buildingdetails_Create extends bsr_bsr_bca_bsr_buildingdetails {
}
interface bsr_bsr_bca_bsr_buildingdetails_Update extends bsr_bsr_bca_bsr_buildingdetails {
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
interface bsr_buildingcontrollifecycle_Base extends WebEntity {
}
interface bsr_buildingcontrollifecycle_Fixed extends WebEntity_Fixed {
  bsr_buildingcontrollifecycleid: string;
}
interface bsr_buildingcontrollifecycle extends bsr_buildingcontrollifecycle_Base, bsr_buildingcontrollifecycle_Relationships {
}
interface bsr_buildingcontrollifecycle_Relationships {
}
interface bsr_buildingcontrollifecycle_Result extends bsr_buildingcontrollifecycle_Base, bsr_buildingcontrollifecycle_Relationships {
}
interface bsr_buildingcontrollifecycle_FormattedResult {
}
interface bsr_buildingcontrollifecycle_Select {
}
interface bsr_buildingcontrollifecycle_Expand {
}
interface bsr_buildingcontrollifecycle_Filter {
}
interface bsr_buildingcontrollifecycle_Create extends bsr_buildingcontrollifecycle {
}
interface bsr_buildingcontrollifecycle_Update extends bsr_buildingcontrollifecycle {
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
interface bsr_changecategory_Base extends WebEntity {
}
interface bsr_changecategory_Fixed extends WebEntity_Fixed {
  bsr_changecategoryid: string;
}
interface bsr_changecategory extends bsr_changecategory_Base, bsr_changecategory_Relationships {
}
interface bsr_changecategory_Relationships {
}
interface bsr_changecategory_Result extends bsr_changecategory_Base, bsr_changecategory_Relationships {
}
interface bsr_changecategory_FormattedResult {
}
interface bsr_changecategory_Select {
}
interface bsr_changecategory_Expand {
}
interface bsr_changecategory_Filter {
}
interface bsr_changecategory_Create extends bsr_changecategory {
}
interface bsr_changecategory_Update extends bsr_changecategory {
}
interface bsr_changecategory_bsr_changerequest_Base extends WebEntity {
}
interface bsr_changecategory_bsr_changerequest_Fixed extends WebEntity_Fixed {
  bsr_changecategory_bsr_changerequestid: string;
}
interface bsr_changecategory_bsr_changerequest extends bsr_changecategory_bsr_changerequest_Base, bsr_changecategory_bsr_changerequest_Relationships {
}
interface bsr_changecategory_bsr_changerequest_Relationships {
}
interface bsr_changecategory_bsr_changerequest_Result extends bsr_changecategory_bsr_changerequest_Base, bsr_changecategory_bsr_changerequest_Relationships {
}
interface bsr_changecategory_bsr_changerequest_FormattedResult {
}
interface bsr_changecategory_bsr_changerequest_Select {
}
interface bsr_changecategory_bsr_changerequest_Expand {
}
interface bsr_changecategory_bsr_changerequest_Filter {
}
interface bsr_changecategory_bsr_changerequest_Create extends bsr_changecategory_bsr_changerequest {
}
interface bsr_changecategory_bsr_changerequest_Update extends bsr_changecategory_bsr_changerequest {
}
interface bsr_changerequest_Base extends WebEntity {
}
interface bsr_changerequest_Fixed extends WebEntity_Fixed {
  bsr_changerequestid: string;
}
interface bsr_changerequest extends bsr_changerequest_Base, bsr_changerequest_Relationships {
}
interface bsr_changerequest_Relationships {
}
interface bsr_changerequest_Result extends bsr_changerequest_Base, bsr_changerequest_Relationships {
}
interface bsr_changerequest_FormattedResult {
}
interface bsr_changerequest_Select {
}
interface bsr_changerequest_Expand {
}
interface bsr_changerequest_Filter {
}
interface bsr_changerequest_Create extends bsr_changerequest {
}
interface bsr_changerequest_Update extends bsr_changerequest {
}
interface bsr_changerequest_bsr_changerequest_Base extends WebEntity {
}
interface bsr_changerequest_bsr_changerequest_Fixed extends WebEntity_Fixed {
  bsr_changerequest_bsr_changerequestid: string;
}
interface bsr_changerequest_bsr_changerequest extends bsr_changerequest_bsr_changerequest_Base, bsr_changerequest_bsr_changerequest_Relationships {
}
interface bsr_changerequest_bsr_changerequest_Relationships {
}
interface bsr_changerequest_bsr_changerequest_Result extends bsr_changerequest_bsr_changerequest_Base, bsr_changerequest_bsr_changerequest_Relationships {
}
interface bsr_changerequest_bsr_changerequest_FormattedResult {
}
interface bsr_changerequest_bsr_changerequest_Select {
}
interface bsr_changerequest_bsr_changerequest_Expand {
}
interface bsr_changerequest_bsr_changerequest_Filter {
}
interface bsr_changerequest_bsr_changerequest_Create extends bsr_changerequest_bsr_changerequest {
}
interface bsr_changerequest_bsr_changerequest_Update extends bsr_changerequest_bsr_changerequest {
}
interface bsr_stagedapplication_bsr_completionapp_Base extends WebEntity {
}
interface bsr_stagedapplication_bsr_completionapp_Fixed extends WebEntity_Fixed {
  bsr_stagedapplication_bsr_completionappid: string;
}
interface bsr_stagedapplication_bsr_completionapp extends bsr_stagedapplication_bsr_completionapp_Base, bsr_stagedapplication_bsr_completionapp_Relationships {
}
interface bsr_stagedapplication_bsr_completionapp_Relationships {
}
interface bsr_stagedapplication_bsr_completionapp_Result extends bsr_stagedapplication_bsr_completionapp_Base, bsr_stagedapplication_bsr_completionapp_Relationships {
}
interface bsr_stagedapplication_bsr_completionapp_FormattedResult {
}
interface bsr_stagedapplication_bsr_completionapp_Select {
}
interface bsr_stagedapplication_bsr_completionapp_Expand {
}
interface bsr_stagedapplication_bsr_completionapp_Filter {
}
interface bsr_stagedapplication_bsr_completionapp_Create extends bsr_stagedapplication_bsr_completionapp {
}
interface bsr_stagedapplication_bsr_completionapp_Update extends bsr_stagedapplication_bsr_completionapp {
}

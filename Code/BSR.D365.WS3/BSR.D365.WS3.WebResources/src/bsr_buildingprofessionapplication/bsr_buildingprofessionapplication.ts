namespace BuildingProfessionApplicationForm {

    var Form: Form.bsr_buildingprofessionapplication.Main.Information;

    export function Test(executionContext: Xrm.ExecutionContext<any, any>) {
        Form = <Form.bsr_buildingprofessionapplication.Main.Information>executionContext.getFormContext();

        //to get an attribute: Form.GetAttribute..

    }



}
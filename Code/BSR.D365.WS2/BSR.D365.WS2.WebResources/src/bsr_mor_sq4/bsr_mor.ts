namespace MOR {
    var Form: Form.bsr_mor.Main.Information;

    export function SetTypeOfOccurrence(executionContext: Xrm.ExecutionContext<any, any>) {
        Form = <Form.bsr_mor.Main.Information>(
            executionContext.getFormContext()
        );

        if (Form.getAttribute("bsr_assisteddigital").getValue() === true) {
            
            Form.getControl("bsr_typeofoccurrence2").setDisabled(false);

            if (Form.getAttribute("bsr_reportsubmittedon").getValue() !== null) {
                Form.getAttribute("bsr_typeofoccurrence").setRequiredLevel("required");
            } else {
                Form.getAttribute("bsr_typeofoccurrence").setRequiredLevel("none");
            }

        } else {
            Form.getControl("bsr_typeofoccurrence2").setDisabled(true);
        }

    }

}
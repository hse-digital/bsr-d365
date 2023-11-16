"use strict";

namespace ChangeCategory {
    var Form: Form.bsr_changecategory.Main.Information;

    export function showHideProposedWorks(executionContext: Xrm.ExecutionContext<any, any>) {
        var Form = <Form.bsr_changecategory.Main.Information>(
            executionContext.getFormContext()
        );

        var bsrServiceCode = Form.getAttribute("bsr_servicecode");

        var selectedOptions;

        if (bsrServiceCode !== null) {
            selectedOptions = bsrServiceCode.getSelectedOption();
        } else {
            selectedOptions = null;
        }

        if (selectedOptions && selectedOptions.filter(i => i.text === "Building Control").length > 0) {
            Form.getControl("bsr_proposedworks").setVisible(true);
        } else {
            Form.getControl("bsr_proposedworks").setVisible(false);
        }
    }
}

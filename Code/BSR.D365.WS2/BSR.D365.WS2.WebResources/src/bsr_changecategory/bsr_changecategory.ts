"use strict";

namespace ChangeCategory {
    
    export function showHideProposedWorks(executionContext) {
        var formContext = executionContext.getFormContext();
        var bsrServiceCode = formContext.getAttribute("bsr_servicecode");

        var selectedOptions;

        if (bsrServiceCode !== null) {
            selectedOptions = bsrServiceCode.getSelectedOption();
        } else {
            selectedOptions = null;
        }

        if (selectedOptions && selectedOptions.filter(i => i.text === "Building Control").length > 0) {
            formContext.getControl("bsr_proposedworks").setVisible(true);
        } else {
            formContext.getControl("bsr_proposedworks").setVisible(false);
        }
    }
}

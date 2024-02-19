function includeCustomJS() {
    setTimeout(function() {
        var userRoles = frappe.user_roles;
        var Workspace = userRoles.includes("Workspace Manager");
        var hr = userRoles.includes("HR Manager");
        var system = userRoles.includes("System Manager");
        if (!Workspace) {
            $(".custom-actions.hidden-xs.hidden-md button[data-label='Create%20Workspace']").attr("hidden", true);
            $(".custom-actions[data-label='Create Workspace'].hidden-xs.hidden-md, button.btn.btn-secondary.btn-default.btn-sm[data-label='Edit']").attr("hidden", true);
        }
        if (!hr && !system) {
            $("span.custom-btn-group-label:contains('List View')").closest(".btn.ellipsis").attr("hidden", true);
        }
        console.log("in");
    }, 1200);
}

function report_view() {
    // Define a custom subclass
    class CustomReportView extends frappe.views.ReportView {
        is_editable(df, data) {
            console.log("Working")
            return false; // Always return false to prevent editing
        }
    }

    // Replace ReportView with CustomReportView globally
    frappe.views.ReportView = CustomReportView;
}

$(document).ready(function() {
    includeCustomJS();
    report_view();

    // Bind to window popstate event
    window.onpopstate = function() {
        includeCustomJS();
        report_view();
    };

    // Bind to navbar click event
    $('.navbar').on('click', function(event) {
        includeCustomJS();
        report_view();
    });

    // Bind to document click event
    $(document).on('click', function(event) {
        includeCustomJS();
        report_view();
    });
});

function includeCustomJS() {
    setTimeout(function(){
        var userRoles = frappe.user_roles;     
        var Workspace = userRoles.includes("Workspace Manager");
        var hr = userRoles.includes("HR Manager");
        var system = userRoles.includes("System Manager");
        if (!Workspace){
            $(".custom-actions.hidden-xs.hidden-md button[data-label='Create%20Workspace']").attr("hidden", true);
            $(".custom-actions[data-label='Create Workspace'].hidden-xs.hidden-md, button.btn.btn-secondary.btn-default.btn-sm[data-label='Edit']").attr("hidden", true);
        }
        if(!hr && !system){
            $("span.custom-btn-group-label:contains('List View')").closest(".btn.ellipsis").attr("hidden", true);
        }
    }, 1200);
}

function report_view() {
    frappe.views.ReportView.prototype.is_editable = function(df, data) {
        return false;
    };
}

$(document).ready(function() {
    includeCustomJS();
    report_view();

    window.onpopstate = function() {
        includeCustomJS();
        report_view();
    };

    $('.navbar').on('click', function(event) {
        includeCustomJS();
        report_view();
    });


    $(document).on('click', function(event) {
        includeCustomJS();
        report_view();
    });
});

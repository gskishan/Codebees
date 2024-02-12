function includeCustomJS() {
    var userRoles = frappe.user_roles;     
    var isWorkspaceManager = userRoles.includes("Workspace Manager");
    var isHRManager = userRoles.includes("HR Manager");
    var isSystemManager = userRoles.includes("System Manager");

    if (!isWorkspaceManager) {
        $(".custom-actions.hidden-xs.hidden-md button[data-label='Create%20Workspace']").attr("hidden", true);
        $(".custom-actions[data-label='Create Workspace'].hidden-xs.hidden-md, button.btn.btn-secondary.btn-default.btn-sm[data-label='Edit']").attr("hidden", true);
    }
    
    if (!isHRManager && !isSystemManager) {
        $("span.custom-btn-group-label:contains('List View')").closest(".btn.ellipsis").attr("hidden", true);
    }
    console.log("in");
}

$(document).ready(function() {
    includeCustomJS();
});

window.onpopstate = function() {
    includeCustomJS();
};

$(document).ready(function() {
    $('.navbar').on('click', function(event) {
        includeCustomJS();
    });
});

document.addEventListener('click', function(event) {
     includeCustomJS();
});

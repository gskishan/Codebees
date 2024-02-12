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
        console.log("in")
    }, 1600);
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

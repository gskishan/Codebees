setTimeout(function(){
    $("span.custom-btn-group-label:contains('List View')").closest(".btn.ellipsis").attr("hidden", true);
    var userRoles = frappe.user_roles;     
    var Workspace = userRoles.includes("Workspace Manager");
    if (!Workspace){
        $(".custom-actions.hidden-xs.hidden-md button[data-label='Create%20Workspace']").attr("hidden", true);
        $(".custom-actions[data-label='Create Workspace'].hidden-xs.hidden-md, button.btn.btn-secondary.btn-default.btn-sm[data-label='Edit']").attr("hidden", true);
    }
}, 600);


function handleUrlChange() {
    // Your custom code to execute when the URL changes
    console.log("URL changed:", window.location.href);
}

// Attach the handleUrlChange function to the onpopstate event
window.onpopstate = handleUrlChange;



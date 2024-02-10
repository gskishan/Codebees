frappe.listview_settings['Employee'] = {
    refresh: function (listview) {
        // Check if the current user has HR Manager or System Manager role
        frappe.call({
            method: "frappe.core.doctype.user.user.has_role",
            args: {
                roles: ["HR Manager", "System Manager"]
            },
            callback: function(r) {
                if(r.message) {
                    // User has one of the specified roles, keep the "List View" button visible
                    console.log("working");
                    $("span.custom-btn-group-label:contains('List View')").closest(".btn.ellipsis").removeAttr("hidden");
                } else {
                    // User does not have the specified roles, hide the "List View" button
                    $("span.custom-btn-group-label:contains('List View')").closest(".btn.ellipsis").attr("hidden", true);
                }
            }
        });
    }
};

frappe.ui.form.on('Holiday List', {
    refresh: function(frm) {
        // Get the user's roles
        var userRoles = frappe.user_roles;

        // Check if the user has the "System Manager" or "HR Manager" role
        var isSystemManager = userRoles.includes("System Manager");
        var isHRManager = userRoles.includes("HR Manager");

        if (!isSystemManager && !isHRManager) {
            // Hide specific sidebar menus
            ["form-assignments", "form-attachments", "form-tags", "form-shared", "form-sidebar-stats","form-sidebar-stats","sidebar-menu"].forEach(function(menu) {
                $("ul.list-unstyled.sidebar-menu." + menu).attr("hidden", true);
            });

            // Hide the new-timeline section
            frm.page.wrapper.find(".new-timeline").css({'display':'none'});
            frm.page.wrapper.find(".comment-box").css({'display':'none'});
        }
        if (!isSystemManager){
            frm.dashboard.hide();
        }
        
        
        // Show or hide the 'add_weekly_holidays' section based on the user's role
        frm.toggle_display('add_weekly_holidays', isSystemManager);

        // Hide or show the entire button section based on the user's role
        frm.fields_dict['clear_table'].wrapper.toggle(isSystemManager);
    }
});

frappe.ui.form.on('Leave Application', {
	refresh(frm) {
	    
	    var userRoles = frappe.user_roles;
        

        // Check if the user has the "System Manager" role
        var isSystemManager = userRoles.includes("System Manager");
        var isHRUser = userRoles.includes("HR User");
        var isHRManager = userRoles.includes("HR Manager");
	    
		if (!isSystemManager && !isHRManager) {
            // Hide specific sidebar menus
            ["form-assignments", "form-attachments", "form-tags", "form-shared", "form-sidebar-stats","form-sidebar-stats","sidebar-menu.text-muted"].forEach(function(menu) {
                $("ul.list-unstyled.sidebar-menu." + menu).attr("hidden", true);
            });
            // Hide the new-timeline section
            frm.page.wrapper.find(".new-timeline").css({'display':'none'});
	    frm.page.wrapper.find(".comment-box").css({'display':'none'});
	}
	}
})

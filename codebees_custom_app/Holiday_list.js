frappe.ui.form.on('Holiday List', {
    refresh: function(frm) {
        // Get the user's roles
        var user_roles = frappe.user_roles;

        // Check if the user has a specific role
        var show_section = user_roles.includes('System Manager');

        // Show or hide the section based on the user's role
        frm.toggle_display('add_weekly_holidays', show_section);

        // Hide or show the entire button section
        frm.fields_dict['clear_table'].wrapper.toggle(show_section);
    }
});

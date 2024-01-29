frappe.ui.login = {
    on_login: function (user) {
        frappe.call({
            method: 'your_custom_method_to_get_employee_profile_link',
            args: { user: user },
            callback: function (r) {
                if (r.message && r.message.redirect_url) {
                    window.location.href = r.message.redirect_url;
                }
            }
        });
    }
};

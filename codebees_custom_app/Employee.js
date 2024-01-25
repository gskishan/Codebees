frappe.ui.form.on('Employee', {
    refresh: function(frm) {
        // Get the current user's roles
        var userRoles = frappe.user_roles;

        // Check if the user has the "System Manager" role
        var isSystemManager = userRoles.includes("System Manager","HR User","HR Manager");

        // Make fields read-only based on the user's role
        frm.set_df_property('date_of_joining', 'read_only', !isSystemManager);
        frm.set_df_property('status', 'read_only', !isSystemManager);
        frm.set_df_property('user_id', 'read_only', !isSystemManager);
        frm.set_df_property('create_user', 'read_only', !isSystemManager);
        frm.set_df_property('create_user_permission', 'read_only', !isSystemManager);
        frm.set_df_property('company', 'read_only', !isSystemManager);
        frm.set_df_property('employee_number', 'read_only', !isSystemManager);
        frm.set_df_property('designation', 'read_only', !isSystemManager);
        frm.set_df_property('reports_to', 'read_only', !isSystemManager);
        frm.set_df_property('custom_report_manager', 'read_only', !isSystemManager);
        frm.set_df_property('department', 'read_only', !isSystemManager);
        frm.set_df_property('employment_type', 'read_only', !isSystemManager);
        frm.set_df_property('employment_details', 'read_only', !isSystemManager);
        frm.set_df_property('company_email', 'read_only', !isSystemManager);
        frm.set_df_property('attendance_device_id', 'read_only', !isSystemManager);
        frm.set_df_property('holiday_list', 'read_only', !isSystemManager);
        frm.set_df_property('approvers_section', 'read_only', !isSystemManager);
        frm.set_df_property('default_shift', 'read_only', !isSystemManager);
        frm.set_df_property('expense_approver', 'read_only', !isSystemManager);
        frm.set_df_property('shift_request_approver', 'read_only', !isSystemManager);
        frm.set_df_property('leave_approver', 'read_only', !isSystemManager);
        frm.set_df_property('ctc', 'read_only', !isSystemManager);
        frm.set_df_property('salary_currency', 'read_only', !isSystemManager);
        frm.set_df_property('salary_mode', 'read_only', !isSystemManager);
        frm.set_df_property('payroll_cost_center', 'read_only', !isSystemManager);
        frm.set_df_property('pan_number', 'read_only', !isSystemManager);
        frm.set_df_property('custom_esi_number', 'read_only', !isSystemManager);
        frm.set_df_property('bank_name', 'read_only', !isSystemManager);
        frm.set_df_property('bank_ac_no', 'read_only', !isSystemManager);
        frm.set_df_property('ifsc_code', 'read_only', !isSystemManager);
        frm.set_df_property('branch', 'read_only', !isSystemManager);
        frm.set_df_property('grade', 'read_only', !isSystemManager);
        frm.set_df_property('employee_name', 'read_only', !isSystemManager);
        frm.set_df_property('first_name', 'read_only', !isSystemManager);
        frm.set_df_property('last_name', 'read_only', !isSystemManager);
        frm.set_df_property('middle_name', 'read_only', !isSystemManager);
        frm.set_df_property('date_of_birth', 'read_only', !isSystemManager);
        frm.set_df_property('job_applicant', 'read_only', !isSystemManager);
        frm.set_df_property('final_confirmation_date', 'read_only', !isSystemManager);
        frm.set_df_property('notice_number_of_days', 'read_only', !isSystemManager);
        frm.set_df_property('scheduled_confirmation_date', 'read_only', !isSystemManager);
        frm.set_df_property('contract_end_date', 'read_only', !isSystemManager);
        frm.set_df_property('date_of_retirement', 'read_only', !isSystemManager);
        frm.set_df_property('prefered_contact_email', 'read_only', !isSystemManager);
        frm.set_df_property('provident_fund_account', 'read_only', !isSystemManager);
    }
});

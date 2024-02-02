frappe.ui.form.on('Employee', {
    refresh: function(frm) {
        console.log("Workinginging")
        // Get the current user's roles
        var userRoles = frappe.user_roles;
        var isSystemManager = userRoles.includes("System Manager");
        var isHRUser = userRoles.includes("HR User");
        var isHRManager = userRoles.includes("HR Manager");
        var readOnlyFields = [
            'date_of_joining', 'status', 'user_id', 'create_user', 'create_user_permission',
            'company', 'employee_number', 'designation', 'reports_to', 'custom_report_manager',
            'department', 'employment_type', 'employment_details', 'company_email',
            'attendance_device_id', 'holiday_list', 'approvers_section', 'default_shift',
            'expense_approver', 'shift_request_approver', 'leave_approver', 'ctc',
            'salary_currency', 'salary_mode', 'payroll_cost_center', 'pan_number',
            'custom_esi_number', 'bank_name', 'bank_ac_no', 'ifsc_code', 'branch',
            'grade', 'employee_name', 'first_name', 'last_name', 'middle_name',
            'date_of_birth', 'job_applicant', 'final_confirmation_date',
            'notice_number_of_days', 'scheduled_confirmation_date', 'contract_end_date',
            'date_of_retirement', 'prefered_contact_email', 'provident_fund_account'
        ];

        for (var field of readOnlyFields) {
            frm.set_df_property(field, 'read_only', !(isSystemManager || isHRUser || isHRManager));
        }

        if (!isHRManager && !isSystemManager) {
            //$("#employee-exit-tab").css("display", "none");
            $("#employee-salary_information-tab").css("display", "none");
            $("#employee-connections_tab-tab").css("display","none")
        }

        if (!isHRManager && !isSystemManager && !isHRUser) {
            $("#employee-profile_tab-tab").css("display", "none");
        }
    }
});

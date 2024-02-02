frappe.ui.form.on('Employee', {
    refresh: function(frm) {
        
        var userRoles = frappe.user_roles;
        

        // Check if the user has the "System Manager" role
        var isSystemManager = userRoles.includes("System Manager");
        var isHRUser = userRoles.includes("HR User");
        var isHRManager = userRoles.includes("HR Manager");

        // Make fields read-only based on the user's role
        // List of fields to be made read-only
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
            'date_of_retirement', 'prefered_contact_email', 'provident_fund_account',
            'resignation_letter_date', 'relieving_date', 'held_on', 'leave_encashed',
            'new_workplace', 'encashment_date', 'reason_for_leaving', 'feedback', 'lft',
            'rgt', 'old_parent'
        ];
        
        // Set read-only properties for specified fields based on user roles
        for (var field of readOnlyFields) {
            frm.set_df_property(field, 'read_only', !(isSystemManager ||isHRManager));
        }


        if (!isHRManager && !isSystemManager) {
            $("#employee-salary_information-tab").css("display", "none");
            $("#employee-connections_tab-tab").css("display","none")
            $("#employee-profile_tab-tab").css("display", "none");
        }

        if (!isHRManager && !isSystemManager && !isHRUser) {
            $("#employee-profile_tab-tab").css("display", "none");
            $("employee-exit-tab").css("display","none");
        }
        if (!isSystemManager && !isHRManager) {
            // Hide specific sidebar menus
            ["form-assignments", "form-attachments", "form-tags", "form-shared", "form-sidebar-stats","form-sidebar-stats","sidebar-menu.text-muted"].forEach(function(menu) {
                $("ul.list-unstyled.sidebar-menu." + menu).attr("hidden", true);
            });
            // Hide the new-timeline section
            frm.page.wrapper.find(".new-timeline").css({'display':'none'});
            frm.page.wrapper.find(".comment-box").css({'display':'none'});
        }    
            
        if (!isSystemManager){
            frm.dashboard.hide();
        }
    }
    
});

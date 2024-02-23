frappe.ui.form.on('Employee', {
    onload:function(frm){
        frappe.call({
            method: "hrms.hr.doctype.leave_application.leave_application.get_leave_details",
            async: false,
            args: {
                employee: cur_frm.doc.name,
                date: frappe.datetime.now_date()
            },
            callback: function (r) {
                if (!r.exc && r.message["leave_allocation"]) {
                    let leave_details = r.message["leave_allocation"];

                    let templateContent = `{% if not jQuery.isEmptyObject(data) %}
    <table class="table table-bordered small">
        <thead>
            <tr>
                <th style="width: 16%">{{ __("Leave Type") }}</th>
                <th style="width: 16%" class="text-right">{{ __("Total Allocated Leaves") }}</th>
                <th style="width: 16%" class="text-right">{{ __("Expired Leaves") }}</th>
                <th style="width: 16%" class="text-right">{{ __("Used Leaves") }}</th>
                <th style="width: 16%" class="text-right">{{ __("Leaves Pending Approval") }}</th>
                <th style="width: 16%" class="text-right">{{ __("Available Leaves") }}</th>
            </tr>
        </thead>
        <tbody>
            {% for(const [key, value] of Object.entries(data)) { %}
                {% let color = cint(value["remaining_leaves"]) > 0 ? "green" : "red" %}
                <tr>
                    <td> {%= key %} </td>
                    <td class="text-right"> {%= value["total_leaves"] %} </td>
                    <td class="text-right"> {%= value["expired_leaves"] %} </td>
                    <td class="text-right" id="taken"> {%= value["leaves_taken"] %} </td>
                    <td class="text-right" id="pending"> {%= value["leaves_pending_approval"] %} </td>
                    <td class="text-right" style="color: {{ color }}"> {%= value["remaining_leaves"] %} </td>
                </tr>
            {% } %}
        </tbody>
    </table>
{% else %}
    <p style="margin-top: 30px;"> {{ __("No leaves have been allocated.") }} </p>
{% endif %}`;


                    let updatedHTMLContent = frappe.render_template(templateContent, {
                        data: leave_details
                    });


                    cur_frm.fields_dict["custom_allocated_leaves"].$wrapper.html(updatedHTMLContent);


                }
            }
        });

        $(document).on('click', '#taken', function () {
                window.location.href = '/app/leave-application?workflow_state=Approved&employee=' + encodeURIComponent(frm.doc.name)

        });
            $(document).on('click', '#pending', function () {
                window.location.href = '/app/leave-application?workflow_state=Pending&employee=' + encodeURIComponent(frm.doc.name)

        });
    },
    refresh: function (frm) {
        // Check if the user has HR Manager or System Manager role
        var hasHrOrSystemManagerRole = frappe.user_roles.includes("HR Manager") || frappe.user_roles.includes("System Manager");

        // Get the leave_approver field object
        var leaveApproverField = frm.fields_dict['leave_approver'];

        // Hide the leave_approver field for employee role users, show for HR Manager and System Manager
        leaveApproverField.df.hidden = !hasHrOrSystemManagerRole;
        leaveApproverField.refresh();

        // Make other adjustments based on user roles
        if (!hasHrOrSystemManagerRole) {
            // List of fields to be made read-only
            var readOnlyFields = [
                // Add the list of fields here
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
                frm.set_df_property(field, 'read_only', true);
            }

            // Hide tabs and elements for employee role users
            frm.toggle_display(['salary_information', 'profile_tab'], false);
            if (!frappe.user_roles.includes("HR User")) {
                frm.toggle_display('exit_tab',false);
            }
        }

        // Additional adjustments based on user roles
        if (!frappe.user_roles.includes("System Manager")) {
            // Hide specific sidebar menus
            ["form-assignments", "form-attachments", "form-tags", "form-shared", "form-sidebar-stats", "form-sidebar-stats", "sidebar-menu.text-muted"].forEach(function (menu) {
                $("ul.list-unstyled.sidebar-menu." + menu).attr("hidden", true);
            });

            // Hide the new-timeline section and comment-box
            frm.page.wrapper.find(".new-timeline, .comment-box").hide();
        }

        frm.page.wrapper.find(".scroll-to-top").hide();

        // Hide dashboard if not System Manager
        if (!frappe.user_roles.includes("System Manager")) {
            frm.dashboard.hide();
        }


    // Check if the current user has the "Employee" role
if (user_has_role("Employee")) {
    // Hide the element with class "row form-dashboard-section form-heatmap"
    frm.page.wrapper.find(".row.form-dashboard-section.form-heatmap").hide();

    // Hide the element with class "document-link" and data-doctype="Employee" or "Attendance"
    frm.page.wrapper.find(".document-link[data-doctype='Employee'], .document-link[data-doctype='Attendance'], .document-link[data-doctype='Employee Checkin'], .document-link[data-doctype='Leave Allocation'], .document-link[data-doctype='Leave Policy Assignment'], .document-link[data-doctype='Employee Onboarding'], .document-link[data-doctype='Employee Transfer'], .document-link[data-doctype='Employee Promotion'], .document-link[data-doctype='Employee Grievance'], .document-link[data-doctype='Employee Separation'], .document-link[data-doctype='Exit Interview'], .document-link[data-doctype='Full and Final Statement'], .document-link[data-doctype='Shift Request'], .document-link[data-doctype='Shift Assignment'], .document-link[data-doctype='Expense Claim'], .document-link[data-doctype='Travel Request'], .document-link[data-doctype='Employee Advance'], .document-link[data-doctype='Employee Benefit Application'], .document-link[data-doctype='Employee Benefit Claim'], .document-link[data-doctype='Salary Structure Assignment'], .document-link[data-doctype='Additional Salary'], .document-link[data-doctype='Timesheet'], .document-link[data-doctype='Employee Incentive'], .document-link[data-doctype='Retention Bonus'], .document-link[data-doctype='Bank Account'], .document-link[data-doctype='Training Event'], .document-link[data-doctype='Training Result'], .document-link[data-doctype='Training Feedback'], .document-link[data-doctype='Employee Skill Map'], .document-link[data-doctype='Appraisal']").hide();

    // Hide the element with class "form-link-title"
    frm.page.wrapper.find(".form-link-title").hide();
    // Set pointer cursor for document links
    frm.page.wrapper.find(".document-link").css("cursor", "pointer");
}



    }
});

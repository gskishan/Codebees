# In your custom Python code
import frappe

@frappe.whitelist()
def your_custom_method_to_get_employee_profile_link(user):
    # Assuming you want to redirect employees to their profile page
    employee_profile_link = f'/app/employee/{user}'
    return {'redirect_url': employee_profile_link}

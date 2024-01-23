import frappe
from frappe.core.doctype.user.user import *
from frappe import _, msgprint, throw

@frappe.whitelist(allow_guest=True)
def successful_login():
    user_id =  frappe.get_value('User', frappe.session.user, 'email')
    should_force_password_reset =  frappe.get_value('User',user_id, 'last_login')

    # Check if the user needs to reset their password
    if should_force_password_reset:
        message = 'Click <a href="/update-password">Reset Your PassWord</a>'
        frappe.throw(message)


import frappe
from frappe.core.doctype.user.user import *
from frappe import _, msgprint, throw

@frappe.whitelist(allow_guest=True)
def successful_login():
    user_id =  frappe.get_value('User', frappe.session.user, 'email')

    # Check if the user needs to reset their password
    if should_force_password_reset(user_id):
        message = 'Click <a href="/update-password">Reset Your PassWord</a>'
        frappe.throw(message)

        # frappe.throw(frappe.AuthenticationError)

def should_force_password_reset(user_id):
    sql="""select count(user) ct from `tabSessions` where user="{0}" """.format(user_id)
    data=frappe.db.sql(sql,as_dict=1)
    if not data:
        return True
    else:
        if data[0].ct ==1:
            return True
        else:
            return False

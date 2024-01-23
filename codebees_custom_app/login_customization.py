import frappe
from frappe.core.doctype.user.user import *
from frappe import _, msgprint, throw

@frappe.whitelist(allow_guest=True)
def successful_login():
    user_id =  frappe.get_value('User', frappe.session.user, 'email')
    if should_force_password_reset(user_id):
        message = 'Click <a href="/update-password">Reset Your PassWord</a>  '
        frappe.throw(message)

def should_force_password_reset(user_id):
    sql="""select count(l.user) ct from `tabActivity Log` l inner join `tabUser` u on l.user=u.name where l.user="{0}" and operation="Login"
and last_login is not null """.format(user_id)
    data=frappe.db.sql(sql,as_dict=1)
    if not data:
        return True
    else:
        if data[0].ct < 2:
            return True
        else:
            return False

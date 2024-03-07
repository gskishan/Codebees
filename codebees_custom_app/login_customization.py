import frappe
from frappe.core.doctype.user.user import *
from frappe import _, msgprint, throw
from frappe.auth import validate_ip_address

@frappe.whitelist(allow_guest=True)
def successful_login():
    user_id =  frappe.get_value('User', frappe.session.user, 'email')
    if  not frappe.db.get_value('User', user_id, 'last_password_reset_date'):
        pass
        # message = 'Click <a href="/update-password">Reset Your PassWord</a>  '
        # frappe.throw(message)


@frappe.whitelist(allow_guest=True)
def post_login(self):
    self.run_trigger("on_login")
    validate_ip_address(self.user)
    self.validate_hour()
    self.get_user_info()
    self.make_session()
    self.setup_boot_cache()
    self.set_user_info()
    frappe.cache.set_value("make_redirect", True)

@frappe.whitelist(allow_guest=True)
def redirect_controller():
    if frappe.cache.get_value("make_redirect"):
        try:
            print(frappe.local.session_obj.user , "\n\n\n\n\n EMPLOYEE Name \n\n\n\n")

            employee_name = frappe.db.get_value('Employee', { 'user_id': frappe.local.session_obj.user }, ['name'])
            frappe.cache.set_value("make_redirect", False)
            return { "data": employee_name }
        except:
            return{ "data": False }    
    return {"data": False }

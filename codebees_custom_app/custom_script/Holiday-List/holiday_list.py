import frappe
from frappe import _

@frappe.whitelist()
def validate(self, method):
    for d in self.holidays:
        if not d.weekly_off:
            hd = self.append("custom_holidays", {})
            hd.description = d.description
            hd.holiday_date = d.holiday_date


@frappe.whitelist()
def is_employee(user):
    employee = frappe.get_doc("Employee", {"user_id": frappe.session.user})
    return employee.exists()

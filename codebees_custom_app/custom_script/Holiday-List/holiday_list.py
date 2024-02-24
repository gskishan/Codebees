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
def is_employee():
    sql="""select name from `tabEmployee` where user_id="{0}" """.format( frappe.session.user)
    data=frappe.db.sql(sql,as_dict=True)
    if data:
        return True
    else:
        return False

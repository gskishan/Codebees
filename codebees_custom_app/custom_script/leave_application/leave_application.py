import frappe
from frappe.model.document import Document
from frappe.model.mapper import get_mapped_doc
from frappe.utils import (

	flt
)

@frappe.whitelist()
def validate(self,method):
  leave_balance = self.leave_balance or 0
  total_leave_days = self.total_leave_days or 0

  self.custom_leave_balanace = leave_balance - total_leave_days

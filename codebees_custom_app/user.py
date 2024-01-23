import frappe
def validate(self,method):
   frappe.throw("yes")
   self.simultaneous_sessions=5

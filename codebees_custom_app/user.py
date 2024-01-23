import frappe
def on_update(self,method):
   if not self.last_login and frappe.db.exists("User Name", self.name):
      doc=frappe.new_doc("User Name")
      doc.user_name=self.name
      doc.save()

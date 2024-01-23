import frappe
def on_update(self,method):
   self.db_set("is_pass",1)

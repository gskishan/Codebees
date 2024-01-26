
frappe.ui.form.on('Form', {
    refresh: function(frm) {
     
        console.log('Common Script Refreshed for DocType: ' + frm.doctype);
    }

});

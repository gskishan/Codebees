frappe.listview_settings['Employee'] = {
    refresh: function (listview) {
      console.log("working")
     $("span.custom-btn-group-label:contains('List View')").closest(".btn.ellipsis").attr("hidden", true);
   
    }
   };

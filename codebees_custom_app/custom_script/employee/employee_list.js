frappe.listview_settings['Employee'] = {
    refresh: function (listview) {
      console.log("working1")
        var userRoles = frappe.user_roles;     
        var hr = userRoles.includes("HR Manager");
        var system = userRoles.includes("System Manager");
        if(!hr && !system){
            $("span.custom-btn-group-label:contains('List View')").closest(".btn.ellipsis").attr("hidden", true);
        }


   
    }
   };

frappe.listview_settings['Employee'] = {
    refresh: function (listview) {
      console.log("working1")
        var userRoles = frappe.user_roles;     
        var hr = userRoles.includes("HR Manager");
        var system = userRoles.includes("System Manager");
        if(!hr && !system){
            $("span.custom-btn-group-label:contains('List View')").closest(".btn.ellipsis").attr("hidden", true);
            $('span.sidebar-toggle-btn').hide();
            $(".layout-side-section").hide();
            $('span.page-icon-group.hidden-xs.hidden-sm').hide();
            $('menu-btn-group').hide()
        }


   
    }
   };

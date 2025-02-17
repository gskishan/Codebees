from . import __version__ as app_version
from frappe.auth import LoginManager
from codebees_custom_app.login_customization import post_login

app_name = "codebees_custom_app"
app_title = "codebees_custom_app"
app_publisher = "gskishan"
app_description = "an app for the customization"
app_email = "gskishan123@gmail.com"
app_license = "mit"




# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/codebees_custom_app/css/codebees_custom_app.css"
# app_include_js = "/assets/codebees_custom_app/js/codebees_custom_app.js"
app_include_js = "/assets/codebees_custom_app/js/comman_script.js"
app_include_css = "/assets/codebees_custom_app/css/comman.css"


# include js, css files in header of web template
# web_include_css = "/assets/codebees_custom_app/css/codebees_custom_app.css"
# web_include_js = "/assets/codebees_custom_app/js/codebees_custom_app.js"

# include custom scss in every website theme (without file extension ".scss")
# website_theme_scss = "codebees_custom_app/public/scss/website"

# include js, css files in header of web form
# webform_include_js = {"doctype": "public/js/doctype.js"}
# webform_include_css = {"doctype": "public/css/doctype.css"}

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
# doctype_js = {"doctype" : "public/js/doctype.js"}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

doctype_list_js = {
	"Employee":"custom_script/employee/employee_list.js",
	"Leave Application":"custom_script/leaves/leave_list.js"
	}
# doctype_js = {"Employee":"custom_script/employee/employee.js"}
# Home Pages
# ----------
on_session_creation  = 'codebees_custom_app.login_customization.successful_login'
# application home page (will override Website Settings)
# home_page = "login"
doc_events = {
    "Holiday List": {
        "validate":"codebees_custom_app.custom_script.Holiday-List.holiday_list.validate",
	},
	"Leave Application":{
		   "validate":"codebees_custom_app.custom_script.leave_application.leave_application.validate",
	}
}
# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Jinja
# ----------

# add methods and filters to jinja environment
# jinja = {
#	"methods": "codebees_custom_app.utils.jinja_methods",
#	"filters": "codebees_custom_app.utils.jinja_filters"
# }

# Installation
# ------------

# before_install = "codebees_custom_app.install.before_install"
# after_install = "codebees_custom_app.install.after_install"

# Uninstallation
# ------------

# before_uninstall = "codebees_custom_app.uninstall.before_uninstall"
# after_uninstall = "codebees_custom_app.uninstall.after_uninstall"

# Integration Setup
# ------------------
# To set up dependencies/integrations with other apps
# Name of the app being installed is passed as an argument

# before_app_install = "codebees_custom_app.utils.before_app_install"
# after_app_install = "codebees_custom_app.utils.after_app_install"

# Integration Cleanup
# -------------------
# To clean up dependencies/integrations with other apps
# Name of the app being uninstalled is passed as an argument

# before_app_uninstall = "codebees_custom_app.utils.before_app_uninstall"
# after_app_uninstall = "codebees_custom_app.utils.after_app_uninstall"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "codebees_custom_app.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
#	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
#	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# DocType Class
# ---------------
# Override standard doctype classes

# override_doctype_class = {
#	"ToDo": "custom_app.overrides.CustomToDo"
# }

# Document Events
# ---------------
# Hook on document methods and events


# Scheduled Tasks
# ---------------

# scheduler_events = {
#	"all": [
#		"codebees_custom_app.tasks.all"
#	],
#	"daily": [
#		"codebees_custom_app.tasks.daily"
#	],
#	"hourly": [
#		"codebees_custom_app.tasks.hourly"
#	],
#	"weekly": [
#		"codebees_custom_app.tasks.weekly"
#	],
#	"monthly": [
#		"codebees_custom_app.tasks.monthly"
#	],
# }

# Testing
# -------

# before_tests = "codebees_custom_app.install.before_tests"

# Overriding Methods
# ------------------------------
#
# override_whitelisted_methods = {
#	"frappe.desk.doctype.event.event.get_events": "codebees_custom_app.event.get_events"
# }
#
# each overriding function accepts a `data` argument;
# generated from the base implementation of the doctype dashboard,
# along with any modifications made in other Frappe apps
# override_doctype_dashboards = {
#	"Task": "codebees_custom_app.task.get_dashboard_data"
# }

# exempt linked doctypes from being automatically cancelled
#
# auto_cancel_exempted_doctypes = ["Auto Repeat"]

# Ignore links to specified DocTypes when deleting documents
# -----------------------------------------------------------

# ignore_links_on_delete = ["Communication", "ToDo"]

# Request Events
# ----------------
# before_request = ["codebees_custom_app.utils.before_request"]
# after_request = ["codebees_custom_app.utils.after_request"]

# Job Events
# ----------
# before_job = ["codebees_custom_app.utils.before_job"]
# after_job = ["codebees_custom_app.utils.after_job"]

# User Data Protection
# --------------------

# user_data_fields = [
#	{
#		"doctype": "{doctype_1}",
#		"filter_by": "{filter_by}",
#		"redact_fields": ["{field_1}", "{field_2}"],
#		"partial": 1,
#	},
#	{
#		"doctype": "{doctype_2}",
#		"filter_by": "{filter_by}",
#		"partial": 1,
#	},
#	{
#		"doctype": "{doctype_3}",
#		"strict": False,
#	},
#	{
#		"doctype": "{doctype_4}"
#	}
# ]

# Authentication and authorization
# --------------------------------

# auth_hooks = [
#	"codebees_custom_app.auth.validate"
# ]

LoginManager.post_login = post_login

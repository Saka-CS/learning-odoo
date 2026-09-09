import { Layout } from "@web/search/layout";
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";
import { DashboardItem } from "./dashboard_item";
import { Component, onWillStart } from "@odoo/owl";

class AwesomeDashboard extends Component {
  static template = "awesome_dashboard.AwesomeDashboard";

  static components = { Layout, DashboardItem };

  setup() {
    this.action = useService("action");
    this.statistics = useService("statistics");
  }

  openCustomers() {
    console.log(this.statistics);
    this.action.doAction("base.action_partner_form");
  }

  openLeads() {
    this.action.doAction({
      type: "ir.actions.act_window",
      name: "All leads",
      res_model: "crm.lead",
      views: [
        [false, "list"],
        [false, "form"],
      ],
    });
  }
}

registry
  .category("actions")
  .add("awesome_dashboard.dashboard", AwesomeDashboard);

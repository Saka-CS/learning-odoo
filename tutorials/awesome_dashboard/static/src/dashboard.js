import { Layout } from "@web/search/layout";
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";
import { DashboardItem } from "./dashboard_item";
import {
  Component,
  onMounted,
  onWillStart,
  onWillUnmount,
  useEffect,
} from "@odoo/owl";
import { loadJS } from "@web/core/assets";

class AwesomeDashboard extends Component {
  static template = "awesome_dashboard.AwesomeDashboard";

  static components = { Layout, DashboardItem };

  setup() {
    this.action = useService("action");
    this.statistics = useService("awesome_dashboard.statistics");
    onWillStart(async () => {
      this.statistics = await this.statistics.loadStatistics();
    });
    onWillStart(() => loadJS("/web/static/lib/Chart/Chart.js"));

    onMounted(() => this.renderChart());
    onWillUnmount(() => this.chart.destroy());
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

  renderChart() {
    if (this.chart) {
      this.chart.destroy();
    }
    this.chart = new Chart();
  }
}

registry
  .category("actions")
  .add("awesome_dashboard.dashboard", AwesomeDashboard);

import { Component } from "@odoo/owl";

class PieChart extends Component {
  static template = "awesome_dashboard.PieChart";

  static props = { label: String, data: Object };
}

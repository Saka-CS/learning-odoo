import { Component } from "@odoo/owl";
import { Layout } from "@web/search/layout";
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";

export class DashboardItem extends Component {
  static template = "awesome_dashboard.DashboardItem";

  static props = {
    size: { type: Number, optional: true },
    slots: { type: Object, optional: true },
  };

  static defaultProps = {
    size: 1,
  };

  setup() {}
}

import { onWillStart } from "@odoo/owl";
import { rpc } from "@web/core/network/rpc";
import { registry } from "@web/core/registry";
import { memoize } from "@web/core/utils/functions";

// export  {
//   onWillStart(async () => {
//     return await rpc("/awesome_dashboard/statistics");
//   });
// }

export const statisticsService = {
  async: ["loadStatistics"],
  start() {
    return {
      loadStatistics: memoize(() => rpc("/awesome_dashboard/statistics")),
    };
  },
};

registry
  .category("services")
  .add("awesome_dashboard.statistics", statisticsService);

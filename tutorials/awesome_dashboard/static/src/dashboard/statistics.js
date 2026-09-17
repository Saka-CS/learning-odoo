import { onWillStart, reactive } from "@odoo/owl";
import { rpc } from "@web/core/network/rpc";
import { registry } from "@web/core/registry";
import { memoize } from "@web/core/utils/functions";

export const statisticsService = {
  start() {
    const statistics = reactive({ isReady: false });

    async function loadData() {
      const updates = await rpc("/awesome_dashboard/statistics");
      Object.assign(statistics, updates, { isReady: true });
    }

    setInterval(loadData, 10000);
    loadData();

    return statistics;

    // return {
    //   loadStatistics: setInterval(
    //     memoize(() => rpc("/awesome_dashboard/statistics")),
    //     10000,
    //   ),
    // };
  },
};

registry
  .category("services")
  .add("awesome_dashboard.statistics", statisticsService);

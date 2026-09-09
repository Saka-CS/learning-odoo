import { onWillStart } from "@odoo/owl";
import { rpc } from "@web/core/network/rpc";
import { registry } from "@web/core/registry";
import { memoize } from "@web/core/utils/functions";

const load = memoize(async function load() {
  return await rpc("/awesome_dashboard/statistics");
});

// export  {
//   onWillStart(async () => {
//     return await rpc("/awesome_dashboard/statistics");
//   });
// }

export const loadStatistics = {
  start() {
    const memory = load();
    return memory;
  },
};

registry.category("services").add("statistics", loadStatistics);

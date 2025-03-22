import { I as getContext, J as escape_html, K as store_get, M as unsubscribe_stores, C as pop, z as push } from "../../chunks/index.js";
import "../../chunks/client.js";
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function _error($$payload, $$props) {
  push();
  var $$store_subs;
  $$payload.out += `<div class="flex flex-col justify-center items-center"><h1>${escape_html(store_get($$store_subs ??= {}, "$page", page).url)}</h1> <h1>${escape_html(store_get($$store_subs ??= {}, "$page", page).status)}</h1> <h1>${escape_html(store_get($$store_subs ??= {}, "$page", page).error?.message)}</h1></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _error as default
};

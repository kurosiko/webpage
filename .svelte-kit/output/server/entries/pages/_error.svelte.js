import { n as noop, V as getContext, W as store_get, X as unsubscribe_stores, S as pop, Q as push } from "../../chunks/index.js";
import "clsx";
import "../../chunks/exports.js";
import { e as escape_html } from "../../chunks/escaping.js";
function get(key, parse = JSON.parse) {
  try {
    return parse(sessionStorage[key]);
  } catch {
  }
}
const SNAPSHOT_KEY = "sveltekit:snapshot";
const SCROLL_KEY = "sveltekit:scroll";
const is_legacy = noop.toString().includes("$$") || /function \w+\(\) \{\}/.test(noop.toString());
if (is_legacy) {
  ({
    data: {},
    form: null,
    error: null,
    params: {},
    route: { id: null },
    state: {},
    status: -1,
    url: new URL("https://example.com")
  });
}
get(SCROLL_KEY) ?? {};
get(SNAPSHOT_KEY) ?? {};
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
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
  $$payload.out += `<div class="flex flex-col justify-center items-center"><h1>${escape_html(store_get($$store_subs ??= {}, "$page", page).url)}</h1> <h1>${escape_html(store_get($$store_subs ??= {}, "$page", page).status)}</h1> <h1>${escape_html(store_get($$store_subs ??= {}, "$page", page).error?.message)}</h1> <img src="https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif" alt="funny guy"></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _error as default
};

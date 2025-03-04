import "clsx";
import { Y as bind_props } from "../../../chunks/index.js";
import { e as escape_html } from "../../../chunks/escaping.js";
function Title($$payload, $$props) {
  let title = $$props["title"];
  $$payload.out += `<div class="text-center logo"><h1>${escape_html(title)}</h1></div>`;
  bind_props($$props, { title });
}
function _page($$payload) {
  Title($$payload, { title: "Ahoge is the best, isn't it?" });
}
export {
  _page as default
};

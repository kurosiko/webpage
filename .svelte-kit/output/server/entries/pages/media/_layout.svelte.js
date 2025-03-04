import { T as slot } from "../../../chunks/index.js";
function _layout($$payload, $$props) {
  $$payload.out += `<div>my recommend media contents→ <a href="/media/video">Video</a> <a href="/media/image">Image</a></div> <!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!---->`;
}
export {
  _layout as default
};

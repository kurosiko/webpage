import { S as pop, P as push, V as slot } from "../../../chunks/index.js";
import "clsx";
import { L as Link } from "../../../chunks/Link.js";
function Check_adult($$payload, $$props) {
  push();
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="fixed z-200 inset-0 bg-black/20 backdrop-blur-md items-center text-center"><div class="m-50"><label for="age-confirmation">This page contains R-18 contents.</label> <label for="age-confirmation">Are you over 18?</label> <div class="flex [&amp;>*]:flex-auto"><button>Yes</button> <button>No</button></div></div></div>`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function _layout($$payload, $$props) {
  Check_adult($$payload);
  $$payload.out += `<!----> <div>my recommend media contents→ `;
  Link($$payload, {
    href: "media/video",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Video`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Link($$payload, {
    href: "media/image",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Image`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> <!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!---->`;
}
export {
  _layout as default
};

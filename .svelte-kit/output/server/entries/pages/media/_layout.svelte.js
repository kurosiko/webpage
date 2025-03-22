import { C as pop, z as push, N as head, D as attr_style, G as slot, E as stringify } from "../../../chunks/index.js";
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
  head($$payload, ($$payload2) => {
    $$payload2.out += `<script src="https://www.youtube.com/iframe_api"><\/script><!---->`;
  });
  Check_adult($$payload);
  $$payload.out += `<!----> <div class="flex *:felx-auto text-center justify-center items-center gap-5 text-2xl font-bold *:p-5 *:hover:text-pink-400 *:transition-all p-2 *:rounded-md">`;
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
  $$payload.out += `<!----></div> <div class="md:flex rounded-md bg-red-500 p-2 font-bold text-xl gap-2 justify-center text-center items-center"${attr_style(`display: ${stringify("")};`)}><p>!!WARN!!!!</p> <p>These are not my creations</p> <p>I have no permission from their creators</p> <button class="border-2 border-amber-50 rounded-md p-2 bg-black">Hide warning message</button> <p>(In DEV)</p></div> <!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!---->`;
}
export {
  _layout as default
};

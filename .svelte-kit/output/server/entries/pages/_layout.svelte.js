import { S as pop, T as stringify, P as push, V as slot } from "../../chunks/index.js";
import { a as attr } from "../../chunks/attributes.js";
import { L as Link } from "../../chunks/Link.js";
import "clsx";
import "../../chunks/client.js";
import "../../chunks/client2.js";
function Scrollbar($$payload, $$props) {
  push();
  let bar = 0;
  $$payload.out += `<div class="bg-white w-full h-1 transition-all"><div class="bg-pink-300 h-1 transition-all"${attr("style", `width: ${stringify(bar)}%;`)}></div></div>`;
  pop();
}
function Header($$payload, $$props) {
  push();
  let { bg_transparent = false } = $$props;
  $$payload.out += `<header id="header" class="sticky top-0 left-0 z-100"><div${attr("class", `flex px-5 ${stringify(bg_transparent ? "" : "bg-black/80 backdrop-blur-sm ")}`)}><div class="basis-1/2">`;
  Link($$payload, {
    href: "",
    children: ($$payload2) => {
      $$payload2.out += `<h1 class="logo">home</h1>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> <ul class="flex gap-7 text-xl flex-auto justify-center items-center box-border [&amp;>li]:flex [&amp;>li]:flex-auto [&amp;>li]:flex-col [&amp;>li]:text-center [&amp;>li>a]:flex-auto [&amp;>li>a]:transition-all [&amp;>li>a]:rounded-full [&amp;>li>a]:p-2"><li>`;
  Link($$payload, {
    href: "works",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Works`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></li> <li>`;
  Link($$payload, {
    href: "media",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Media`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></li> <li>`;
  Link($$payload, {
    href: "tool",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Tool`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></li></ul></div> `;
  Scrollbar($$payload);
  $$payload.out += `<!----></header>`;
  pop();
}
function Footer($$payload) {
  $$payload.out += `<footer id="footer" class="sticky bottom-0 left-0"><div class="flex justify-center items-center w-screen">`;
  Link($$payload, {
    href: "https://github.com/kurosiko",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Github`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></footer>`;
}
function Logo($$payload) {
  $$payload.out += `<div class="overflow-x-clip rounded-lg border-white border-2 drop-shadow shadow-white break-all text-center m-5"><h1 class="mx-auto shadow-pink-400 [text-shadow:_3px_5px_0_var(--tw-shadow-color)] logo">Honor and revere the Ahoge.</h1></div>`;
}
function _layout($$payload, $$props) {
  push();
  let bg_transparent = false;
  Logo($$payload);
  $$payload.out += `<!----> `;
  Header($$payload, { bg_transparent });
  $$payload.out += `<!----> <div class="main_body m-5 p-10 rounded-lg border-white border-2 box-border overflow-hidden"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div> `;
  Footer($$payload);
  $$payload.out += `<!---->`;
  pop();
}
export {
  _layout as default
};

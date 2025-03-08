import { S as pop, T as stringify, P as push, V as slot } from "../../chunks/index.js";
import "clsx";
import { a as attr } from "../../chunks/attributes.js";
function Scrollbar($$payload, $$props) {
  push();
  let bar = 0;
  $$payload.out += `<div class="bg-white w-full h-1 transition-all"><div class="bg-pink-300 h-1 transition-all"${attr("style", `width: ${stringify(bar)}%;`)}></div></div>`;
  pop();
}
function Header($$payload, $$props) {
  push();
  $$payload.out += `<header id="header" class="sticky top-0 left-0 z-100"><div class="flex bg-black/80 backdrop-blur-sm px-5"><div class="basis-1/2"><a href="/"><h1 class="logo">home</h1></a></div> <ul class="flex gap-7 text-xl flex-auto justify-center items-center box-border [&amp;>li]:flex [&amp;>li]:flex-auto [&amp;>li]:flex-col [&amp;>li]:text-center [&amp;>li>a]:flex-auto [&amp;>li>a]:transition-all [&amp;>li>a]:rounded-full [&amp;>li>a]:p-2"><li><a href="/works">Works</a></li> <li><a href="/media">Media</a></li> <li><a href="/ahoge">Ahoge</a></li></ul></div> `;
  Scrollbar($$payload);
  $$payload.out += `<!----></header>`;
  pop();
}
function Footer($$payload) {
  $$payload.out += `<footer id="footer" class="sticky bottom-0 left-0"><div class="flex justify-center items-center w-screen"><a href="https://github.com/kurosiko">Github</a></div></footer>`;
}
function Logo($$payload) {
  $$payload.out += `<div class="overflow-x-clip rounded-lg border-white border-2 drop-shadow shadow-white break-all text-center m-5"><h1 class="mx-auto shadow-pink-400 [text-shadow:_3px_5px_0_var(--tw-shadow-color)] logo">Honor and revere the Ahoge.</h1></div>`;
}
function _layout($$payload, $$props) {
  Logo($$payload);
  $$payload.out += `<!----> `;
  Header($$payload);
  $$payload.out += `<!----> <div class="main_body m-5 p-10 rounded-lg border-white border-2 box-border overflow-hidden"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div> `;
  Footer($$payload);
  $$payload.out += `<!---->`;
}
export {
  _layout as default
};

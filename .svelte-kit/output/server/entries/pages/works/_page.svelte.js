import "clsx";
import { V as slot } from "../../../chunks/index.js";
import { a as attr } from "../../../chunks/attributes.js";
import { e as escape_html } from "../../../chunks/escaping.js";
function Content($$payload, $$props) {
  const {
    title = "Title",
    subtitle = "Subtitle",
    image = "",
    to = "",
    children
  } = $$props;
  $$payload.out += `<a${attr("href", to)} target="_blank"><div class="text-center backdrop-blur-sm rounded-md border-2 border-white/15 hover:border-pink-300 transition-all group"><p class="content_title">${escape_html(title)}</p> <p class="content_subtitle">${escape_html(subtitle)}</p> <p><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></p></div></a>`;
}
function _page($$payload) {
  $$payload.out += `<div>my works</div> <div class="[&amp;>div]:grid [&amp;>div]:md:grid-cols-2 [&amp;>div]:gap-5 rounded-md"><h1 class="content_title">IN DEV</h1> <div>`;
  Content($$payload, {
    title: "Test Content",
    subtitle: "Test Content Sub",
    to: "ahoge"
  });
  $$payload.out += `<!----> `;
  Content($$payload, {
    title: "VideoFetcher-v3",
    subtitle: "Native GUI Comming S∞n",
    to: "https://genshin.mihoyo.com/switch/#/"
  });
  $$payload.out += `<!----> `;
  Content($$payload, {
    title: "Webpage",
    subtitle: "With Sveltekit",
    to: "https://github.com/kurosiko/webpage"
  });
  $$payload.out += `<!----> `;
  Content($$payload, {
    title: "Sparkly",
    subtitle: "Customize Your Desktop",
    to: "https://github.com/kurosiko/Sparkly"
  });
  $$payload.out += `<!----></div> <h1 class="content_title">OUTDATED</h1> <div>`;
  Content($$payload, {
    title: "VideoFetcher",
    subtitle: "Easy & Fast YT Download Tool",
    to: "https://github.com/kurosiko/Kuros-VideoFetcher"
  });
  $$payload.out += `<!----> `;
  Content($$payload, {
    title: "VideoFetcher-v2",
    subtitle: "More Useful More Modern",
    to: "https://github.com/kurosiko/VF-v2"
  });
  $$payload.out += `<!----></div></div>`;
}
export {
  _page as default
};

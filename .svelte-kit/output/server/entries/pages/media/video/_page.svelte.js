import { S as pop, P as push, $ as ensure_array_like } from "../../../../chunks/index.js";
import { a as attr } from "../../../../chunks/attributes.js";
import { e as escape_html } from "../../../../chunks/escaping.js";
const video_asset = [
  {
    title: "LAMUNATION 1st",
    video: "rDnKUUPl1Jo",
    src: "https://www.dlsite.com/pro/work/=/product_id/VJ010196.html"
  },
  {
    title: "LAMUNATION 2nd",
    video: "S4aDDVBcahs",
    src: null
  },
  {
    title: "Dohna Dohna",
    video: "geqmu1xF4Ns",
    src: null
  },
  {
    title: "Hatsuyuki Sakura",
    video: "t0EF64SW3bs",
    src: null
  },
  {
    title: "Mashiroiro Symphony",
    video: "pMbEHivhFvM",
    src: null
  },
  {
    title: "Our Times made of dreams and colors",
    video: "K8vDUk6qh9U",
    src: null
  },
  {
    title: "FLIP＊FLOP",
    video: "J8AXYxS3DTM",
    src: null
  },
  {
    title: "Fuyukara, Kururu.",
    video: "nWZsbfuSyxc",
    src: null
  },
  {
    title: "Nukitashi",
    video: "-5lP5j52eSY",
    src: null
  },
  {
    title: "Select Oblige",
    video: "a2vF1yN7lF8",
    src: null
  },
  {
    title: "LAMUNATION",
    video: "f7oWqUM-tQ0",
    src: null
  }
];
function YT_Player($$payload, $$props) {
  push();
  const { id = "M7lc1UVf-VE", index, is_mute } = $$props;
  let videoId = id;
  $$payload.out += `<div class="w-full h-full transition-all"${attr("id", videoId)}${attr("style", "")}></div>`;
  pop();
}
function _page($$payload, $$props) {
  push();
  let iframe_list = [];
  let current_index = 0;
  let is_mute = true;
  let Jumper;
  window.addEventListener("resize", () => {
    Jumper(current_index, false);
  });
  const each_array = ensure_array_like(iframe_list);
  const each_array_1 = ensure_array_like(video_asset);
  $$payload.out += `<h1>Here is a test page</h1> <h1>I replaced iframe tag with iframe player api</h1> <button class="fixed bottom-5 right-5">${escape_html("UnMute")}</button> <div class="flex *:flex-auto *:hover:text-blue-500 text-2xl font-semibold"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    each_array[i];
    if (i == current_index) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<button class="text-pink-400">${escape_html(i + 1)}</button>`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<button class="text-white/50">${escape_html(i + 1)}</button>`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></div> <div class="fixed inset-0 z-[-1]" id="wapper"></div> <div class="fixed inset-0 overflow-x-scroll aspect-video snap-x snap-mandatory [&amp;>iframe]:aspect-video [&amp;>iframe]:snap-center gap-10 z-[-2] scroll-smooth brightness-50 [&amp;>*]:w-full [&amp;>*]:h-full"><!--[-->`;
  for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
    let item = each_array_1[i];
    $$payload.out += `<div class="relative"><div class="absolute top-[50%] left-[1em] text-black"><h1 class="font-bold text-9xl text-blance">${escape_html(item.title)}</h1></div> <button class="h-full w-full"${attr("aria-label", `Play video titled ${item.title}`)}>`;
    YT_Player($$payload, { id: item.video, index: i, is_mute });
    $$payload.out += `<!----></button></div>`;
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
export {
  _page as default
};

import { O as attr, C as pop, z as push, J as escape_html, T as await_block, Q as ensure_array_like, F as attr_class, U as clsx } from "../../../../chunks/index.js";
function YT_Player($$payload, $$props) {
  push();
  const { id = "M7lc1UVf-VE", index, is_mute } = $$props;
  let videoId = id;
  $$payload.out += `<div class="w-full h-full transition-all"${attr("id", videoId)}></div>`;
  pop();
}
function _page($$payload, $$props) {
  push();
  let current_index = 0;
  let is_mute = true;
  $$payload.out += `<h1>Here is a test page</h1> <h1>I replaced iframe tag with iframe player API</h1> <button class="fixed bottom-5 right-5">${escape_html("UnMute")}</button> <!---->`;
  await_block(
    fetch("/api/video").then((res) => res.json()).then((videos) => videos),
    () => {
    },
    (assets) => {
      const each_array = ensure_array_like(assets);
      const each_array_1 = ensure_array_like(assets);
      $$payload.out += `<div class="flex *:flex-auto *:hover:text-blue-500 text-2xl font-semibold"><!--[-->`;
      for (let i = 0, $$length = each_array.length; i < $$length; i++) {
        each_array[i];
        $$payload.out += `<button${attr_class(clsx(i === current_index ? "text-pink-400" : "text-white/50"))}>${escape_html(i + 1)}</button>`;
      }
      $$payload.out += `<!--]--></div> <div class="fixed inset-0 z-[-1]" id="wrapper"></div> <div class="fixed inset-0 overflow-x-scroll aspect-video snap-x snap-mandatory [&amp;>iframe]:aspect-video [&amp;>iframe]:snap-center gap-10 z-[-2] scroll-smooth brightness-50 [&amp;>*]:w-full [&amp;>*]:h-full"><!--[-->`;
      for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
        let item = each_array_1[i];
        $$payload.out += `<div class="relative"><div class="absolute top-[50%] left-[1em] text-black"><h1 class="font-bold text-9xl text-blance">${escape_html(item.title)}</h1></div> <button class="h-full w-full"${attr("aria-label", `Play video titled ${item.title}`)}>`;
        YT_Player($$payload, { id: item.src, index: i, is_mute });
        $$payload.out += `<!----></button></div>`;
      }
      $$payload.out += `<!--]--></div>`;
    }
  );
  $$payload.out += `<!---->`;
  pop();
}
export {
  _page as default
};

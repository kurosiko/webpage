import { V as slot, Z as bind_props, S as pop, P as push, _ as ensure_array_like, T as stringify } from "../../../../chunks/index.js";
import { u as updated, s as stores } from "../../../../chunks/client.js";
import { a as attr } from "../../../../chunks/attributes.js";
({
  get current() {
    return updated.current;
  },
  check: stores.updated.check
});
function Viewer($$payload, $$props) {
  push();
  let data = $$props["data"];
  $$payload.out += `<div class="fixed bg-black/50 inset-0 z-200 m-auto"><img${attr("src", data.url)}${attr("alt", `${data.url},${data.tweet},${data.user}`)} class="h-full object-scale-down m-auto"> <div class="relative top-[-50px]"><p>TESt</p> <p>TEStTEXT</p></div> <!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div>`;
  bind_props($$props, { data });
  pop();
}
function _page($$payload, $$props) {
  push();
  let image = [];
  let input = "";
  let limit = 20;
  let rand = true;
  let grid = 5;
  let grid_auto = false;
  const each_array = ensure_array_like(image);
  $$payload.out += `<!---->`;
  $$payload.out += `<!----> <div class="p-2 flex gap-5"><button class="p-2 border-pink-300 border-2 border-double rounded-sm hover:border-blue-400 transition-all">Submit</button> <div class="relative"><input${attr("value", input)} type="text" class="peer bg-transparent h-10 w-72 rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600" placeholder="Type inside me"><label for="username" class="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">Enter a link</label></div> <div class="flex gap-5 text-center justify-center items-center border-b-pink-300 border-b-2 px-5"><input type="checkbox"${attr("checked", rand, true)}> <div>Random</div> <input type="number"${attr("value", limit)}></div> <div class="flex gap-5 text-center justify-center items-center border-b-pink-300 border-b-2 px-5"><input type="checkbox"${attr("checked", grid_auto, true)}> <div>Grid</div> <input type="number"${attr("value", grid)}></div> <button class="p-2 border-pink-300 border-2 border-double rounded-sm hover:border-blue-400 transition-all">Reload</button></div> <div class="md:grid w-full"${attr("style", `grid-template-columns:repeat(${stringify(grid)},minmax(0,1fr));`)}><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    if (item.url) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="group relative"><img class="object-cover"${attr("src", `https://pbs.twimg.com/media/${item.url}`)}${attr("alt", item.url)}></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--> `;
  Viewer($$payload, {
    data: {
      url: "https://pbs.twimg.com/media/Glrgf9xaYAA6-s5?format=jpg&name=large",
      user: "seafirefly_",
      tweet: "1899077035815018837"
    }
  });
  $$payload.out += `<!----></div>`;
  pop();
}
export {
  _page as default
};

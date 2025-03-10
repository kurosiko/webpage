import { _ as ensure_array_like, S as pop, T as stringify, P as push } from "../../../../chunks/index.js";
import { u as updated, s as stores } from "../../../../chunks/client.js";
import { a as attr } from "../../../../chunks/attributes.js";
({
  get current() {
    return updated.current;
  },
  check: stores.updated.check
});
function _page($$payload, $$props) {
  push();
  let image = [];
  let input = "";
  let limit = 0;
  let rand = true;
  let grid = 5;
  let grid_auto = false;
  $$payload.out += `<!---->`;
  $$payload.out += `<!----> <div class="p-2 flex gap-5"><button class="p-2 border-pink-300 border-2 border-double rounded-sm hover:border-blue-400 transition-all">Submit</button> <div class="relative"><input${attr("value", input)} type="text" class="peer bg-transparent h-10 w-72 rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600" placeholder="Type inside me"><label for="username" class="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">Enter a link</label></div> <div class="flex gap-5 text-center justify-center items-center border-b-pink-300 border-b-2 px-5"><input type="checkbox"${attr("checked", rand, true)}> <div>Random</div> <input type="number"${attr("value", limit)}></div> <div class="flex gap-5 text-center justify-center items-center border-b-pink-300 border-b-2 px-5"><input type="checkbox"${attr("checked", grid_auto, true)}> <div>Grid</div> <input type="number"${attr("value", grid)}></div> <button class="p-2 border-pink-300 border-2 border-double rounded-sm hover:border-blue-400 transition-all">Reload</button></div> <div class="grid w-full"${attr("style", `grid-template-columns:repeat(${stringify(grid)},minmax(0,1fr));`)}>`;
  if (image != null) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(image);
    $$payload.out += `<!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      $$payload.out += `<div class="group relative"><img class="object-cover"${attr("src", item.url)}${attr("alt", item.url)}> <button class="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 m-auto transition-all">Delete</button></div>`;
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
export {
  _page as default
};

import { Q as ensure_array_like, O as attr, D as attr_style, C as pop, z as push, E as stringify } from "../../../../chunks/index.js";
import "../../../../chunks/client2.js";
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
  $$payload.out += `<!----> <div class="p-2 flex gap-5"><button class="p-2 border-pink-300 border-2 border-double rounded-sm hover:border-blue-400 transition-all">Submit</button> <div class="relative"><input${attr("value", input)} type="text" class="peer bg-transparent h-10 w-72 rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600" placeholder="Type inside me"><label for="username" class="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">Enter a link</label></div> <div class="flex gap-5 text-center justify-center items-center border-b-pink-300 border-b-2 px-5"><input type="checkbox"${attr("checked", rand, true)}> <div>Random</div> <input type="number"${attr("value", limit)}></div> <div class="flex gap-5 text-center justify-center items-center border-b-pink-300 border-b-2 px-5"><input type="checkbox"${attr("checked", grid_auto, true)}> <div>Grid</div> <input type="number"${attr("value", grid)}></div> <button class="p-2 border-pink-300 border-2 border-double rounded-sm hover:border-blue-400 transition-all">Reload</button></div> <div class="md:grid w-full"${attr_style(`grid-template-columns:repeat(${stringify(grid)},minmax(0,1fr));`)}><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    if (item.url) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="group relative"><img class="object-cover w-full"${attr("src", `https://pbs.twimg.com/media/${item.url}`)}${attr("alt", item.url)}> <div class="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 m-auto transition-all flex flex-col [&amp;>*]:flex-auto [&amp;>*]:border-2 [&amp;>*]:w-full [&amp;>*]:mb-[-1px] justify-center text-center items-center">`;
      if (item.tweet && item.user) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<button></button>`;
      } else {
        $$payload.out += "<!--[!-->";
        $$payload.out += `<p>src not found</p>`;
      }
      $$payload.out += `<!--]--></div></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
export {
  _page as default
};

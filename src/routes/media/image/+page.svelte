<script lang="ts">
    import {page} from "$app/state";
    import { onMount } from "svelte";
    interface response_c{
        [key:string]:string,
    }
    let ImagesDOM:()=>Promise<void>;
    let PostImage:()=>Promise<void>;
    let DeleteImage:(url:string)=>Promise<void>;
    let image:response_c[] | null = [];
    let input = "";
    const fetch_eternal = () =>{
            setTimeout(async ()=>{
                if(page.url.pathname !== "/media/image") return
                await ImagesDOM()
                fetch_eternal()
            },30000)
    }
    onMount(()=>{
        ImagesDOM = async ()=>{
        const response = await fetch("https://api.kurosiko.com/db",{
            method:"GET",
            mode:"cors"
        })
        const data = (await response.json()) as response_c[];
        image = data;
        return
        }
        PostImage = async ()=>{
            const request = await fetch("https://api.kurosiko.com/db",{
                method:"POST",
                mode:"cors",
                body: input
            })
            input = "";
            return
        }
        DeleteImage = async (url:string)=>{
            const request = await fetch("https://api.kurosiko.com/db",{
                method:"DELETE",
                mode:"cors",
                body:url,
            })
            await ImagesDOM()
        }
        fetch_eternal()
    })
</script>

<svelte:component this={ImagesDOM} />
<div class="p-2 flex gap-5">
    <button on:click={PostImage} class="p-2 border-pink-300 border-2 border-double rounded-sm hover:border-blue-400 transition-all">Submit</button>
    <input bind:value={input} type="text" class="peer bg-transparent h-10 w-72 rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600" placeholder="Type inside me"/><label for="username" class="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">Enter a link</label>
</div>
<div class="grid grid-cols-3">
    {#if image != null}
        {#each image as item}
            <div class="group relative">
                <img class="" src={item.url} alt={item.url}/>
                <button class="absolute bg-black/80 opacity-0 group-hover:opacity-100 top-0 left-0 right-0 bottom-0 m-auto transition-all" on:click={()=>DeleteImage(item.url)}>Delete</button>
            </div>
        {/each}
    {/if}
    
</div>

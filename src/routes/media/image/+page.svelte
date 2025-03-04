<script lang="ts">
    import { onMount } from "svelte";
    interface response_c{
        [key:string]:string,
    }
    //.d.ts
    let ImagesDOM:()=>Promise<void>;
    let PostImage:()=>Promise<void>;
    let image:response_c[] = [];
    let input = "";
    //
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
    })
</script>

<svelte:component this={ImagesDOM} />

<button on:click={PostImage} class="relative z-0 h-12 rounded-md bg-blue-500 px-6 text-neutral-50 after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-full after:bg-blue-500 active:scale-95 active:transition active:after:scale-x-125 active:after:scale-y-150 active:after:opacity-0 active:after:transition active:after:duration-500">Submit</button>
<input bind:value={input} type="text" id="username" name="username" class="peer bg-transparent h-10 w-72 rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600" placeholder="Type inside me"/><label for="username" class="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">Enter a link</label>
<div class="grid grid-cols-3">
    {#each image as item}
        <img src={item.url} alt={item.url}/>
    {/each}
</div>

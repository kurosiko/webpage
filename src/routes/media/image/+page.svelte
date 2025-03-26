<script lang="ts">
    import { page } from "$app/state";
    import Viewer from "$lib/Viewer.svelte";
    import { onMount } from "svelte";
    interface response_c{
        url:string | null,
        user:string | null,
        tweet:string | null
    }
    let ImagesDOM:()=>Promise<void>;
    let PostImage:()=>Promise<void>;
    let DeleteImage:(url:string)=>Promise<void>;
    let image:response_c[] = [];
    let input = "";
    let limit:number = 20;
    let rand:boolean = true;
    let grid :number = 5
    let grid_auto :boolean = false
    let detail :boolean = false;
    let close_popup:()=>void = ()=>{
        detail = false
    }
    let detail_data:{
        url:string,
        user:string,
        tweet:string
    } = {
        url:"",
        user:"",
        tweet:""
    }
    const fetch_eternal = () =>{
            setTimeout(async ()=>{
                if(page.url.pathname !== "/media/image") return
                await ImagesDOM()
                fetch_eternal()
            },30000)
    }
    
    onMount(()=>{
        ImagesDOM = async ()=>{
        const response = await fetch(`https://api.kurosiko.com/image/get?limit=${limit}${rand ? "&rand=1" :""}`,{
            method:"GET",
            mode:"cors",
        })
        const data = (await response.json()) as response_c[];
        if(!data) return
        image = data
        console.log(data)
        return
        }
        PostImage = async ()=>{
            const request = await fetch("https://api.kurosiko.com/image/reg",{
                method:"POST",
                mode:"cors",
                body: input
            })
            input = "";
            return
        }
        DeleteImage = async (url:string)=>{
            const request = await fetch("https://api.kurosiko.com/image/del",{
                method:"POST",
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
    <button onclick={PostImage} class="p-2 border-pink-300 border-2 border-double rounded-sm hover:border-blue-400 transition-all">Submit</button>
    <div class="relative">
        <input bind:value={input} type="text" class="peer bg-transparent h-10 w-72 rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600" placeholder="Type inside me"/><label for="username" class="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">Enter a link</label>
    </div>
    <div class="flex gap-5 text-center justify-center items-center border-b-pink-300 border-b-2 px-5">
        <input type="checkbox" bind:checked={rand}/>
        <div>Random</div>
        <input type="number" bind:value={limit}>
    </div>
    <div class="flex gap-5 text-center justify-center items-center border-b-pink-300 border-b-2 px-5">
        <input type="checkbox" bind:checked={grid_auto}/>
        <div>Grid</div>
        <input type="number" bind:value={grid}>
    </div>
    <button onclick={ImagesDOM} class="p-2 border-pink-300 border-2 border-double rounded-sm hover:border-blue-400 transition-all">Reload</button>
</div>


<div class="md:grid w-full " style="grid-template-columns:repeat({grid_auto ? "auto-fit" : grid},minmax(0,1fr));">
    {#each image as item}
        {#if item.url}
            <div class="group relative">
                <img class="object-cover w-full" src={`https://pbs.twimg.com/media/${item.url}`} alt={item.url}/>
                <div class="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 m-auto transition-all flex flex-col [&>*]:flex-auto [&>*]:border-2 [&>*]:w-full [&>*]:mb-[-1px] justify-center text-center items-center">
                    {#if item.tweet && item.user}
                        <!-- svelte-ignore a11y_consider_explicit_label -->
                        <!-- svelte-ignore element_invalid_self_closing_tag -->
                        <button onclick={()=>{
                                detail = true
                                detail_data = {url:item.url || '',tweet:item.tweet || '' ,user:item.user || ''}
                        }}/>
                        {:else}
                        <p>src not found</p>
                    {/if}
                </div>
            </div>
        {/if}
    {/each}
    {#if detail && detail_data}
        <Viewer data={detail_data} detail={close_popup}></Viewer>
    {/if}
</div>



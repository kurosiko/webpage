<script lang="ts">
    import { page } from "$app/state";
    import Viewer from "$lib/Viewer.svelte";
    import { onMount } from "svelte";
    interface response_c{
        url:string | null,
        user:string | null,
        tweet:string | null
    }
    let ImagesDOM = $state<() => Promise<void>>(async () => {});
    let PostImage:()=>Promise<void>;
    let DeleteImage:(url:string)=>Promise<void>;
    let image = $state<response_c[]>([]);
    let input = "";
    let limit = $state(20);
    let rand = $state(true);
    let grid = $state(5);
    let grid_auto = $state(false);
    let detail = $state(false);
    let close_popup:()=>void = ()=>{
        detail = false
    }
    let detail_data = $state<{
        url:string,
        user:string,
        tweet:string
    }>({
        url:"",
        user:"",
        tweet:""
    });
    const fetch_eternal = () =>{
            setTimeout(async ()=>{
                if (page.url.pathname !== "/media/image") return
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
        console.log(data)
        if(!data) return
        image = data;
        return
        }
        PostImage = async ()=>{
            await fetch("https://api.kurosiko.com/image/reg",{
                method:"POST",
                mode:"cors",
                body: input
            })
            input = "";
            return
        }
        DeleteImage = async (url:string)=>{
            await fetch("https://api.kurosiko.com/image/del",{
                method:"POST",
                mode:"cors",
                body:url,
            })
            await ImagesDOM()
        }
        fetch_eternal()
    })
    let image_quality_data:{value:string,lable:string}[] = [
        {value:"small",lable:"Small"},
        {value:"medium",lable:"Medium"},
        {value:"large",lable:"Large"},
        {value:"orig",lable:"Original"},
    ]
    let image_quality = $state('medium');
    const base_url = "https://pbs.twimg.com/media/";
    const request_url_generator:(image_id:string)=>string = (image_id:string)=>{
        const image_url = new URL(`${image_id}`,base_url)
        image_url.searchParams.append("format","jpg")
        image_url.searchParams.append("name",image_quality)
        return image_url.toString()
    }
</script>

<div class="p-2 flex gap-5 overflow-x-auto">
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
    <div class="flex gap-5 text-center justify-center items-center border-b-pink-300 border-b-2 px-5">
        <input type="checkbox" bind:checked={grid_auto}/>
        <div>Format</div>
        <select
            class="text-white bg-black p-2"
            bind:value={image_quality}
        >
            {#each image_quality_data as image_quality_options}
                <option value={image_quality_options.value}>{image_quality_options.lable}</option>
            {/each}
        </select>
    </div>
    <button onclick={ImagesDOM} class="p-2 border-pink-300 border-2 border-double rounded-sm hover:border-blue-400 transition-all">Reload</button>
</div>


<div class="md:grid w-full " style="grid-template-columns:repeat({grid_auto ? "auto-fit" : grid},minmax(0,1fr));">
    {#each image as item}
        {#if item.url}
            <div class="group relative">
                <img class="object-cover w-full" src={request_url_generator(item.url)} alt={item.url}/>
                <div class="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 m-auto transition-all flex flex-col [&>*]:flex-auto [&>*]:border-2 [&>*]:w-full [&>*]:mb-[-1px] justify-center text-center items-center">
                    {#if item.tweet && item.user}
                        <button 
                            onclick={()=>{
                                detail = true
                                detail_data = {url:item.url || '',tweet:item.tweet || '' ,user:item.user || ''}
                            }}
                            aria-label="Show image details"
                        >
                            Show Details
                        </button>
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

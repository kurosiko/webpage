<script lang="ts">
    import { onMount } from "svelte";
    import YtPlayer from "$lib/YT_Player.svelte";
    import { read } from "$app/server";
    let bg_player: HTMLDivElement | null = $state(null);
    let iframe_list: HTMLIFrameElement[] = [];
    let video_list:{player:any,index:number}[] = []
    let current_index = $state(0);
    let is_mute = $state(true);
    let ready = $state(false);
    let volume = $state(20);
    type Response_Video = {
        title: string;
        src: string;
        link: string | null;
    };
    $effect(()=>{
        if (bg_player) {
            iframe_list = Array.from(bg_player.children).filter(
                (child): child is HTMLIFrameElement => child.tagName === "DIV"
            );
        }
    })
    $effect(()=>{
        vol(volume)
    })
    const play = (player: any) => player?.playVideo();
    const stop = (player: any) => player?.stopVideo();
    const mute = (player: any) => player?.mute();
    const unmute = (player: any) => player?.unMute();
    const vol = (vol:number) => video_list.forEach((item:any)=>(item.player?.setVolume(vol)))
    const toggleMute = () => {
        video_list.forEach((item: any) => (is_mute ? unmute(item.player) : mute(item.player)));
        is_mute = !is_mute;
    };
    let Jumper: (index: number, shouldPlay?: boolean) => void;
    let response = $state<Promise<Response_Video[]>|null>(null);
    const wait_for_playing:{
        timeout:number,
        setup:()=>void,
        cancel:()=>void,
    } = {
        timeout: 0,
        setup() {
            this.timeout = setTimeout(() => {
                play(video_list[current_index].player)
                ready = true;
            }, 5000);
        },
        cancel() {
            ready = false;
            clearTimeout(this.timeout);
        }
    }
    onMount(() => {
        Jumper = (index: number, shouldPlay = true) => {
            if (shouldPlay) wait_for_playing.cancel()
            if (index >= video_list.length) index = 0;
            current_index = index;
            const target = iframe_list[index];
            target.scrollIntoView({ behavior: "smooth" });
            if (!shouldPlay) return;
            video_list.forEach((item: any) => stop(item.player));
            vol(volume)
            if (shouldPlay) wait_for_playing.setup()
        };
        response = fetch("/api/video").then((item:any)=>item.json()).then((videos:Response_Video[])=>videos)
        window.addEventListener("resize", () => Jumper(current_index, false));
    });

    const player_handle = (event: {player:any,index:number}) => {    
        ready = true;
        video_list.push(event);
        video_list.sort((a: any, b: any) => a.index - b.index);
        if(event.index == 0) wait_for_playing.setup()
    };
</script>

<h1>!!These contents are not my creation!!</h1>
<h1>I love flat-chested girls</h1>
<h1>If you have any problem with these contents, please contact me.</h1>


<div class="fixed bottom-5 right-5 flex flex-col opacity-50 hover:opacity-100 p-3 group [&>*]:rounded-md rounded-md">
    <button onclick={toggleMute}>{is_mute ? "UnMute" : "Mute"}</button>
    <div>
        Vol
        <input type="range" min="0" max="100" bind:value={volume} class="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-white/50">
    </div>
    <span class="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-white/50 transition-all duration-100 group-hover:h-full"></span>
    <span class="ease absolute left-0 bottom-0 h-0 w-0 border-b-2 border-white/50 transition-all duration-200 group-hover:w-full"></span>
    <span class="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-white/50 transition-all duration-300 group-hover:h-full"></span>
    <span class="ease absolute right-0 top-0 h-0 w-0 border-t-2 border-white/50 transition-all duration-400 group-hover:w-full"></span>
</div>


{#await response}
    <p>Fetching data...</p>
    {:then assets}
        {#if assets}
        <a href={assets[current_index].link} class=" hover:text-pink-400">{assets[current_index].link?`Detail about ${assets[current_index].title}` : `Link is not available. Wait for updating DB`}</a>
            <div class="flex *:flex-auto *:hover:text-blue-500 text-2xl font-semibold">
                {#each assets as _, i}
                    <button
                        class={i === current_index ? "text-pink-400" : "text-white/50"}
                        onclick={() => Jumper(i)}
                    >
                        {i + 1}
                    </button>
                {/each}
            </div>
            <div class="fixed inset-0 z-[-1]" id="wrapper"></div>
            <div
                class="fixed inset-0 overflow-x-scroll aspect-video snap-x snap-mandatory [&>iframe]:aspect-video [&>iframe]:snap-center z-[-2] scroll-smooth brightness-50 [&>*]:w-full [&>*]:h-full"
                bind:this={bg_player}
            >
                {#each assets as item, i}
                    <div class="relative">
                        <div class="absolute top-[50%] left-[1em] z-1 text-black">
                            <h1 class="font-bold text-9xl text-blance">{item.title}</h1>
                        </div>
                        <img class="absolute w-full h-full transition-all duration-1000 ease-in-out" style={ready ? "opacity:0":""}  src={`https://i.ytimg.com/vi_webp/${item.src}/maxresdefault.webp`} alt="thumbnail">

                        <YtPlayer
                            id={item.src}
                            index={i}
                            ok={player_handle}
                            end={() => Jumper(current_index + 1)}
                        />
                    </div>
                {/each}
            </div>
        {/if}
    {:catch}
        <div class=" bg-red-500 font-bold text-2xl">
            <p>Error Occurred while fetching db data.</p>
            <p>Please reload page.</p>
        </div>
{/await}


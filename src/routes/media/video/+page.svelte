
<script lang="ts">
    import { onMount } from "svelte";
    import video_asset from "./video"
    import YtPlayer from "$lib/YT_Player.svelte";
    let player: HTMLDivElement | null = null;
    let iframe_list: HTMLIFrameElement[] = [];
    let video_list:any[] = [];
    let current_index:number = 0
    let is_mute:boolean = true;
    $: if (player) {
        iframe_list = [...player.children].filter((child): child is HTMLIFrameElement => child.tagName === "DIV");
    }
    let Jumper: (index: number) => void;
    const play = (player:any)=>{
        player?.playVideo()
    }
    const stop = (player:any)=>{
        player?.stopVideo()
    }
    const mute = (player:any) =>{
        player?.mute()
    }
    const unmute = (player:any) =>{
        player?.unMute()
    }
    onMount(() => {
        Jumper = (index: number) => {
            is_mute = true
            current_index = index
            const target = iframe_list[index];
            target.scrollIntoView({ behavior: "smooth" });
            video_list.forEach((item:any)=>{
                item.player.stopVideo()
            })
            play(video_list[index].player)
        };
    });
    const player_handle = (event:CustomEvent)=>{
        video_list.push(event.detail)
        video_list.sort((item: any, next_item: any) => {
            if (item.index > next_item.index) return 1;
            if (item.index < next_item.index) return -1;
            return 0;
        });
    }
</script>
<h1>Here is a test page</h1>
<button class="fixed bottom-5 right-5" onclick={()=>{is_mute ? unmute(video_list[current_index].player) : mute(video_list[current_index].player);is_mute = !is_mute}}>{is_mute ? "UnMute" : "Mute"}</button>
<div class="flex *:flex-auto">
    {#each iframe_list as item, i}
        <button onclick={() => { Jumper(i) }}>{i + 1}</button>
    {/each}
</div>
<div class="fixed inset-0 z-[-1]" id="wapper"></div>
<div class="fixed inset-0 overflow-x-scroll aspect-video snap-x snap-mandatory [&>iframe]:aspect-video [&>iframe]:snap-center gap-10 z-[-2] scroll-smooth brightness-50 [&>*]:w-full [&>*]:h-full" bind:this={player}>
    {#each video_asset as item,i}
        <div class="relative">
            <div class="absolute top-[50%] left-[1em] text-black">
                <h1 class="font-bold text-9xl">{item.title}</h1>
            </div>
            <button class="h-full w-full" aria-label={`Play video titled ${item.title}`}>
                <YtPlayer id={item.video} index={i} is_mute={is_mute} on:ready={player_handle}></YtPlayer>
            </button>
        </div>
    {/each}
</div>

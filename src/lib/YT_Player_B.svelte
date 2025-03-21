<script lang="ts">
    import { createEventDispatcher, onMount } from 'svelte';
    export let id: string = 'M7lc1UVf-VE';
    $: videoId = id;
    export let player: any;
    export let Play:()=>void = ()=>{player?.playVideo()};
    let Pause:()=>void;
    let volume:number = 50;
    const dispatch = createEventDispatcher()
    onMount(() => {
       const windowRef: any = window;
       if (typeof windowRef.YT != 'undefined') {
           player = new windowRef.YT.Player(videoId, {
            videoId,
            playerVars: {
                playsinline: 1,
                modestbranding:0,
                rel:0,
                disablekb:0,
                fs:0,
                controls:0,
                mute:0,
                loop:1
            },
            events:{
                onReady: (event: any) => {
                    const player: any = event.target;
                    dispatch("ready", player);
                }
            }
        });
    }
});
</script>

<div class="h-full w-full" id={videoId}></div>
<slot></slot>

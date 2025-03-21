<script lang="ts">
    
    import { createEventDispatcher, onMount} from 'svelte';
    const { id = 'M7lc1UVf-VE',index,is_mute} = $props<{id:string,index:number,is_mute:boolean}>();
    let videoId = id;
    $effect(() => {
        videoId = id
    });
    let player: any;
    let volume:number = 50;
    const dispatch = createEventDispatcher()
    const def_player:()=>void = ()=>{
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
                mute:is_mute ? 1 : 0,
                loop:1
            },
            events:{
                onReady: (event: any) => {
                    dispatch("ready", {player:event.target,index:index});
                    event.target.setLoop(true)
                }
            }
        });
       }}
    onMount(() => {def_player()});
</script>


<div class="w-full h-full" id={videoId}></div>

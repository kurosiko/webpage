<script lang="ts">
    import { onMount} from 'svelte';
    type Props = {
        id:string,
        index:number,
        is_mute:boolean,
        ok: (args:{player:any,index:number}) => void,
        end:()=>void
    }
    const { id = 'M7lc1UVf-VE',index = 0,is_mute = true,ok,end = ()=>{}}:Props = $props();
    let videoId = id;
    let player: any;
    let windowRef:any;
    const def_player:()=>void = ()=>{
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
                    ok({player:event.target,index:index});
                },
                onStateChange:(event:any)=>{
                    if(event.data == 0){
                        end()
                    }
                }
            }
        });
       }}
    onMount(() => {
        windowRef = window
        def_player()
        
    });
</script>

<div class="w-full h-full transition-all" id={videoId}></div>


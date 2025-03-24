<script lang="ts">
    import YtPlayer from "$lib/YT_Player.svelte";
    let playerRef:any;
    const handle = (event:{player:any,index:number}) => {
        playerRef = event.player
        title = playerRef?.videoTitle
    }
    let play = ()=>{
        playerRef?.playVideo()
    }
    let pause = ()=>{
        playerRef?.stopVideo()
    }
    let mute = ()=>{
        playerRef?.mute()
    }
    let unmute = ()=>{
        playerRef?.unMute()
    }
    let data = ()=>{
        console.log(playerRef?.showVideoInfo())
    }
    let {title = "title"} = $props()
</script>

<div class="grid grid-cols-2">
    <YtPlayer id="gcrIuZ20A60" ok={handle} index={0} end={()=>{play()}}/>
    <div class="grid grid-cols-2">
        <button onclick={play}>Play</button>
        <button onclick={pause}>Stop</button>
        <button onclick={mute}>Mute</button>
        <button onclick={unmute}>UnMute</button>

    </div>
</div>
<button onclick={data}>Show Detail</button>
<p>{title}</p>

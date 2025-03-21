<script lang="ts">
    import YtPlayer from "$lib/YT_Player_B.svelte";
    let player:any;
    let playerRef:any;
    const handle = (event: CustomEvent) => {
        console.log(event)
        playerRef = event.detail
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
    $:title = playerRef?.videoTitle
    
</script>

<div class="grid grid-cols-2">
    <YtPlayer player={player} id="gcrIuZ20A60" on:ready={handle}></YtPlayer>
    <div class="grid grid-cols-2">
        <button onclick={play}>Play</button>
        <button onclick={pause}>Stop</button>
        <button onclick={mute}>Mute</button>
        <button onclick={unmute}>UnMute</button>

    </div>
</div>
<button onclick={data}>Show Detail</button>
<p>{title}</p>

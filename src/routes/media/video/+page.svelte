<script lang="ts">

    import Link from "$lib/Link.svelte";
    import { onMount } from "svelte";
    let player: HTMLDivElement | null = null;
    let iframe_list:HTMLIFrameElement[] = []
    $: if (player) {
        iframe_list = [...player.children].filter((child): child is HTMLIFrameElement => child.tagName === "IFRAME")
    }
    let Jumper:(index:number)=>void;
    onMount(() => {
            Jumper = (index: number) => {
                iframe_list.forEach((item:HTMLIFrameElement)=>item.removeAttribute("id"))
                const target = iframe_list[index]
                target.scrollIntoView({behavior:"smooth"})
            };
        });
</script>
<h1>Here is the test page</h1>
<div class="flex *:flex-auto">
{#each iframe_list as item,i}
    <button on:click={()=>{Jumper(i)}}>{i+1}</button>
{/each}
</div>
<div class="flex *:flex-auto text-center">

</div>
<div class="fixed inset-0 flex overflow-x-scroll aspect-video snap-x  snap-mandatory [&>iframe]:aspect-video [&>iframe]:snap-center gap-10 z-[-1] scroll-smooth brightness-50" bind:this={player}>
        <iframe class="h-full w-full" src="https://www.youtube.com/embed/rDnKUUPl1Jo?si=wOJ4yV7Tc31YehxC?&amp;controls=1&amp;showinfo=0&amp;rel=0&amp;loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe class="h-full w-full" src="https://www.youtube.com/embed/S4aDDVBcahs?si=9iezTsFHlAgfds-A?&amp;controls=1&amp;showinfo=0&amp;rel=0&amp;loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe class="h-full w-full" src="https://www.youtube.com/embed/geqmu1xF4Ns?si=mA12-En2Q_YN0DJo?&amp;controls=1&amp;showinfo=0&amp;rel=0&amp;loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe class="h-full w-full" src="https://www.youtube.com/embed/t0EF64SW3bs?si=_DWRwdhaUCdqiuU_?&amp;controls=1&amp;showinfo=0&amp;rel=0&amp;loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe class="h-full w-full" src="https://www.youtube.com/embed/pMbEHivhFvM?si=cMw4LUIbcZD0sz8s?&amp;controls=1&amp;showinfo=0&amp;rel=0&amp;loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <img src="" alt="ahoge"/>
</div>


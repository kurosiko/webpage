<svelte:head>
    <script src="https://www.youtube.com/iframe_api"></script>
</svelte:head>
<script lang="ts">
    import CheckAdult from "$lib/Check_adult.svelte";
    import Link from "$lib/Link.svelte";
    import type { LayoutProps } from "./$types";
    let hide_warn = $state(false);
    let {data,children}:LayoutProps = $props();
</script>
{#if !data.adult}
    <CheckAdult/>
{/if}
<div class="flex *:felx-auto text-center justify-center items-center gap-5 text-2xl font-bold *:p-5 *:hover:text-pink-400 *:transition-all p-2 *:rounded-md">
    <Link href="media/video">Video</Link>
    <Link href="media/image">Image</Link>
</div>
<div class="md:flex rounded-md bg-red-500 p-2 font-bold text-xl gap-2 justify-center text-center items-center" style="display: {hide_warn? "none" : ""};">
    <p>!!WARN!!!!</p>
    <p>These are not my creations</p>
    <p>I have no permission from their creators</p>
    <button class="border-2 border-amber-50 rounded-md p-2 bg-black" onclick={()=>hide_warn = !hide_warn}>Hide warning message</button>
    <p>(In DEV)</p>
</div>
{@render children()}

<script>

    import CheckAdult from "$lib/Check_adult.svelte";
    import Link from "$lib/Link.svelte";
    let hide_warn = false;
</script>
<CheckAdult></CheckAdult>
<div>
    my recommend media contents→
    <Link href="media/video">Video</Link>
    <Link href="media/image">Image</Link>
</div>
<div class="md:flex rounded-md bg-red-500 p-2 font-bold text-xl gap-2 justify-center text-center items-center" style="display: {hide_warn? "none" : ""};">
    <p>!!WARN!!!!</p>
    <p>These are not my creations</p>
    <p>I have no permission from their creators</p>
    <button class="border-2 border-amber-50 rounded-md p-2 bg-black" on:click={()=>hide_warn = !hide_warn}>Hide warning message</button>
    <p>(In DEV)</p>
</div>
<slot/>

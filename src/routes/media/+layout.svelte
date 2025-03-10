<script>

    import CheckAdult from "$lib/Check_adult.svelte";
    import Link from "$lib/Link.svelte";

</script>
<CheckAdult></CheckAdult>
<div>
    my recommend media contents→
    <Link href="media/video">Video</Link>
    <Link href="media/image">Image</Link>
</div>
<slot/>

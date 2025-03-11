<script>

    import Link from "$lib/Link.svelte";

</script>
<div class="flex overflow-x-scroll aspect-video snap-x  snap-mandatory [&>div]:aspect-video [&>div]:snap-center gap-10">
    <div>
        <iframe class="w-full h-full" 
                src="https://www.youtube.com/embed/g77pYBnYZ58?si=XNQqhaxthuvXtZvC&" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
        </iframe>
    </div>
    <div>
        <iframe class="w-full h-full" 
                src="https://www.youtube.com/embed/fSwHSANFiFM?si=MjLQ35P8sDwNuQCg" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
        </iframe>
    </div>
    <div>
        <iframe 
                id="test"
                class="w-full h-full" 
                src="https://www.youtube.com/embed/7AtD9EjJXKo?si=4FAjo_iDASCeaOrW" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
        </iframe>
    </div>
</div>
<Link href="media/video/#test">Jump to 3rd</Link>

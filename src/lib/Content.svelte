<script lang="ts">
    import type { Snippet } from "svelte";

    type Props = {
        title:string,
        subtitle:string,
        image:string,
        children:Snippet
    }
    const {title = "Title",subtitle = "Subtitle",image = "",to="",children} = $props()
</script>

<a href={to} target="_blank">
<div class="text-center backdrop-blur-sm rounded-md border-2 border-white/15 hover:border-pink-300 transition-all group ">
    <p class="content_title">{title}</p>
    <p class="content_subtitle">{subtitle}</p>
    <p><slot></slot></p>
</div>
</a>

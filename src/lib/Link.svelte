<script lang="ts">
    import { base } from "$app/paths";
  import type { Snippet } from "svelte";

    let {children,href}:{children:Snippet,href:string} = $props();
</script>

<a href="{base}/{href}" class="ease transition-all duration-300">
    {@render children()}
</a>

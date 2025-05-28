<script lang="ts">
    import { base } from "$app/paths";
    let {href}:{href:string} = $props();
</script>

<a href="{base}/{href}" class="ease transition-all duration-300"><slot /></a>

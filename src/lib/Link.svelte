<script lang="ts">
    import { base } from "$app/paths";


    export let href:string
</script>

<a href="{base}/{href}" class="ease transition-all duration-300"><slot /></a>

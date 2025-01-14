<script lang="ts">
    import {page} from '$app/stores'
</script>

<div class="flex items-center justify-center">
    <div class="text-center flex-auto">
        <h1>{$page.status}</h1>
        <h1>{$page.url}</h1>
        <h1>{$page.error?.message}</h1>
    </div>
    <img class="p-5" src="https://media1.tenor.com/m/ErB2RhcIXpwAAAAd/blue-archive-tendou-alice.gif" alt="getting confused"/>
</div>


<script lang="ts">
    import {page} from '$app/stores';
</script>


<div class="flex flex-col justify-center items-center">
    <h1>{$page.url}</h1>
    <h1>{$page.status}</h1>
    <h1>{$page.error?.message}</h1>
    <a href="/ahoge" class="hover:text-fuchsia-500">about Ahoge</a>
</div>

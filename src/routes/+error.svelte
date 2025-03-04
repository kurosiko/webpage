<script lang="ts">
    import {page} from '$app/stores';
</script>


<div class="flex flex-col justify-center items-center">
    <h1>{$page.url}</h1>
    <h1>{$page.status}</h1>
    <h1>{$page.error?.message}</h1>
    <img src="https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif" alt="funny guy">
</div>

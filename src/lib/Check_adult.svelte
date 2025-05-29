<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/state"
    let show = $state(true);
    async function adult() {
        await fetch("/adult",{
            headers:{
                request_from:page.url.pathname
            }
            }
        )
        show = false;
    }

    function kid() {
        goto("/")
    }
</script>
    
{#if show}
    <div class="fixed z-200 inset-0 bg-black/20 backdrop-blur-md items-center text-center" >
    <div class="m-50">
        <label for="age-confirmation">This page contains R-18 contents.</label>
        <label for="age-confirmation">Are you over 18?</label>
        <div class="flex [&>*]:flex-auto">
            <button onclick={adult}>Yes</button>
            <button onclick={kid}>No</button>
        </div>
    </div>
    </div>
{/if}

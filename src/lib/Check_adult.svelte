<script lang="ts">
  import { redirect } from "@sveltejs/kit";
    import { onMount } from "svelte";
    let adult = ()=>{}
    let kid = ()=>{}
    let is_adult = false;
    onMount(()=>{
        adult = async ()=>{
            await fetch("/adult")
        }
        kid = ()=>{
            throw redirect(301,"/")
        }
    })
</script>
{#if !is_adult}
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


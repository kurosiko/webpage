<script lang="ts">
    import { onMount } from "svelte";
    let adult = ()=>{}
    let kid = ()=>{}
    let check:()=>boolean = ()=>cookies.split("; ").some((item:string)=>item == "r18=true")
    let cookies: string = ""
    let is_adult = false;
    onMount(()=>{
        cookies = document.cookie
        is_adult = check()
        adult = ()=>{
            document.cookie = "r18=true;max-age=432000"
            window.location.href = "/media"
        }
        kid = ()=>{
            window.location.href = "/"
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



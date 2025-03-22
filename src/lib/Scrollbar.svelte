<script lang="ts">
    import { onMount } from "svelte";
    let bar:number = 0
    const updateBar = ()=>{
        const current_y = window.scrollY
        const availHeight = document.documentElement.scrollHeight - window.innerHeight
        bar = Math.floor((current_y / availHeight)*100)
    }
    const event_register = ()=>{
        document.removeEventListener("scroll",updateBar)
        document.addEventListener("scroll",updateBar)
    }
    onMount(()=>{
        event_register()
    })
</script>

<div class="bg-white w-full h-1 transition-all" >
    <div class="bg-pink-300 h-1 transition-all" style="width: {bar}%;"></div>
</div>

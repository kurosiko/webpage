<script lang="ts">
  import Header from '$lib/Header.svelte';  
  import Footer from '$lib/Footer.svelte';
  import Logo from '$lib/Logo.svelte';
  import "../app.css"
  import { afterNavigate} from '$app/navigation';
  import { page } from '$app/state';
  import { onMount } from 'svelte';
  import { su_control } from '$lib/state/su.svelte';
  const exception = ["/media/video"]
  let bg_transparent = false
  afterNavigate(()=>{
    bg_transparent = exception.some((item:string)=>page.url.pathname === item)
  })
  onMount(()=>{
    bg_transparent = exception.some((item:string)=>page.url.pathname === item)
  })
</script>
<Logo/>
<Header bg_transparent={bg_transparent}/>

<div class="main_body m-5 p-10 rounded-lg border-white border-2 box-border overflow-hidden">
  <slot/>
</div>
<Footer />
{#if su_control.is_su()}
  <div class="fixed bottom-0 left-0 m-4 border-2 border-white rounded-md p-5 opacity-50">
    <h1 class="font-bold">Admin Mode(ver.α)</h1>
  </div>
{/if}

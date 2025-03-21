<script lang="ts">
  import Header from '$lib/Header.svelte';  
  import Footer from '$lib/Footer.svelte';
  import Logo from '$lib/Logo.svelte';
  import "../app.css"
  import { afterNavigate} from '$app/navigation';
  import { page } from '$app/state';
  import { onMount } from 'svelte';
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



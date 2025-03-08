<script lang="ts">
  import Header from '$lib/Header.svelte';  
  import Footer from '$lib/Footer.svelte';
  import Logo from '$lib/Logo.svelte';
  import Scrollbar from '$lib/Scrollbar.svelte';
  import "../app.css"
  
</script>

<Logo/>
<Header/>

<div class="main_body m-5 p-10 rounded-lg border-white border-2 box-border overflow-hidden">
  <slot/>
</div>
<Footer />



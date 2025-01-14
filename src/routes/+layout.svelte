<script lang="ts">
  import Header from '../components/Header.svelte';  
  import Footer from '../components/Footer.svelte';
  import Logo from '../components/Logo.svelte';
  import "../app.css"
    
</script>

<Logo/>
<Header />
<slot class="content max-w-5xl mx-auto"/>
<Footer />

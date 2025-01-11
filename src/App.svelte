<script lang="ts">
  import Counter from './components/Counter.svelte'
  import Header from './components/Header.svelte';  
  import Footer from './components/Footer.svelte';
  import Logo from './components/Logo.svelte';
  import "./app.css"
    import { Route, Router } from 'svelte-routing';
</script>

<Router>
  <Logo/>
  <Header />
  <Route path="/tool1" component={Header}/>
  <Route path="/tool2" component={Footer}/>
  <Route path="/tool3" component={Logo}/>
  <p>{window.navigator.userAgent}</p>
  <Footer />
</Router>


<script>
    import Content from "$lib/Content.svelte";

</script>
<div>my works</div>
<div class="[&>div]:grid [&>div]:md:grid-cols-2 [&>div]:gap-5 rounded-md ">
    <h1 class="content_title">IN DEV</h1>
    <div>
        <Content title="Test Content" subtitle="Test Content Sub" to="ahoge"/>
        <Content title="VideoFetcher-v3" subtitle="Native GUI Comming S∞n" to="https://genshin.mihoyo.com/switch/#/"/>
        <Content title="Webpage" subtitle="With Sveltekit" to="https://github.com/kurosiko/webpage"/>
        <Content title="Sparkly" subtitle="Customize Your Desktop" to="https://github.com/kurosiko/Sparkly"/>
    </div>
    <h1 class="content_title">PLANNING (TENTATIVE)</h1>
    <div>
        <Content title="Gui Lib" subtitle="Gui Library" to=""/>
        <Content title="Custom Shell" subtitle="Cool" to=""/>
        <Content title="Launcher" subtitle="App Launcher" to=""/>
    </div>
    <h1 class="content_title">OUTDATED</h1>
    <div>
        <Content title="VideoFetcher" subtitle="Easy & Fast YT Download Tool" to="https://github.com/kurosiko/Kuros-VideoFetcher"/>
        <Content title="VideoFetcher-v2" subtitle="More Useful More Modern" to="https://github.com/kurosiko/VF-v2"/>
    </div>
    
</div>

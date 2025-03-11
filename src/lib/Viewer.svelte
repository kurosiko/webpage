<script lang="ts">
    let data:{
        url:string,
        user:string,
        tweet:string
    }
    export { data };
</script>
<div class="fixed bg-black/50 inset-0 z-200 m-auto">
    <img src={data.url} alt={`${data.url},${data.tweet},${data.user}`} class="h-full object-scale-down m-auto"/>
    <div class="relative top-[-50px]">
        <!--
        <p>{data.url}</p>
        <p>{data.tweet}</p>
        <p>{data.user}</p>
        -->
        <p>TESt</p>
        <p>TEStTEXT</p>
    </div>
    <slot/>
</div>

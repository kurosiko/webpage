<script lang="ts">
    let {data , close } : {
        data:{
            url:string,
            user:string,
            tweet:string
        },
        close:()=>void
    } = $props();
</script>
<div class="fixed bg-black/50 inset-0 z-200 m-auto backdrop-blur-md">
        <button class="flex h-full w-full" onclick={close}>
            <blockquote class="twitter-tweet" data-theme="dark" data-align="center">
            <!-- svelte-ignore a11y_consider_explicit_label -->
            <!-- svelte-ignore element_invalid_self_closing_tag -->
            <a href={`https://twitter.com/${data.user}/status/${data.tweet}`}/>
            </blockquote>
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </button>
    
</div>

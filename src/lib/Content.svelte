<script lang="ts">
    type Props = {
        title:string,
        subtitle:string,
        to:string
    }
    const {title = "Title",subtitle = "Subtitle",to=""}:Props = $props()
</script>

<a href={to} target="_blank">
<div class="text-center backdrop-blur-sm rounded-md border-2 border-white/15 hover:border-pink-300 transition-all group ">
    <p class="content_title">{title}</p>
    <p class="content_subtitle">{subtitle}</p>
</div>
</a>

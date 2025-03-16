<script lang="ts">
    let title:string = "Title";
    let subtitle:string = "Subtitle";
    let image:string = "";
    let to:string = ""
    export { title ,subtitle , to}
</script>

<a href={to} target="_blank">
<div class="text-center backdrop-blur-sm rounded-md border-2 border-white/15 hover:border-pink-300 transition-all group ">
    <p class="content_title">{title}</p>
    <p class="content_subtitle">{subtitle}</p>
    <p><slot></slot></p>
</div>
</a>

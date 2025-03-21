<script lang="ts">
    import { onMount } from "svelte";
    import Scrollbar from "./Scrollbar.svelte";
    import Link from "./Link.svelte";
    function getRandomColor() {
        const h = Math.floor(Math.random() * 360);
        const s = Math.floor(Math.random() * 30) + 70; // 50% to 100% saturation
        const l = Math.floor(Math.random() * 30) + 70; // 70% to 100% lightness
        return `hsl(${h}, ${s}%, ${l}%)`;
    }
    let bg_transparent = $props();
    onMount(() => {
    const as = Array.from(document.querySelectorAll('#header ul li a')) as HTMLElement[];
    as.forEach((a: HTMLElement) => {
        a.addEventListener('mouseover', () => {
        (a as HTMLElement).style.boxShadow = `0 0 100px ${getRandomColor()}`;
    });
        a.addEventListener('mouseout', () => {
        (a as HTMLElement).style.boxShadow = '';
        });
    });
    });
    
</script>
<style></style>
<header id="header" class="sticky top-0 left-0 z-100">
    <div class="flex px-5 {bg_transparent ? "" : "bg-black/80 backdrop-blur-sm "}">
        <div class="basis-1/2">
            <Link href=""><h1 class="logo">home</h1></Link>
        </div>
        <ul class=" flex gap-7 text-xl flex-auto justify-center items-center box-border [&>li]:flex [&>li]:flex-auto [&>li]:flex-col [&>li]:text-center [&>li>a]:flex-auto [&>li>a]:transition-all [&>li>a]:rounded-full [&>li>a]:p-2">
            <li>
                <Link href="works">Works</Link>
            </li>
            <li><Link href="media">Media</Link></li>
            <li><Link href="tool">Tool</Link></li>
        </ul>
    </div>
    <Scrollbar/>
</header>


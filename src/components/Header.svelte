<script lang="ts">
    import { onMount } from "svelte";
    import {Link} from "svelte-routing"
    function getRandomColor() {
        const h = Math.floor(Math.random() * 360);
        const s = Math.floor(Math.random() * 30) + 70; // 50% to 100% saturation
        const l = Math.floor(Math.random() * 30) + 70; // 70% to 100% lightness
        return `hsl(${h}, ${s}%, ${l}%)`;
    }

    onMount(() => {
    const links = Array.from(document.querySelectorAll('#header div a')) as HTMLElement[];
    links.forEach((link: HTMLElement) => {
        link.addEventListener('mouseover', () => {
        (link as HTMLElement).style.boxShadow = `0 0 100px ${getRandomColor()}`;
    });
    link.addEventListener('mouseout', () => {
        (link as HTMLElement).style.boxShadow = '';
        });
    });
    });
</script>
<style></style>
<header id="header" class="sticky top-0 left-0 w-screen p-5">
    <div class="flex">
        <div class="basis-1/2">
            <Link to="/">back to /</Link>
        </div>
        <div class="flex gap-7 text-xl flex-auto justify-center items-center box-border">
            <Link to="/tool1" class="transition-all rounded-full flex-auto p-2 text-center">Header</Link>
            <Link to="/tool2" class="transition-all rounded-full flex-auto p-2 text-center">Footer</Link>
            <Link to="/tool3" class="transition-all rounded-full flex-auto p-2 text-center">Logo</Link>
        </div>
    </div>
</header>


<script lang="ts">
    import { onMount } from "svelte";
    function getRandomColor() {
        const h = Math.floor(Math.random() * 360);
        const s = Math.floor(Math.random() * 30) + 70; // 50% to 100% saturation
        const l = Math.floor(Math.random() * 30) + 70; // 70% to 100% lightness
        return `hsl(${h}, ${s}%, ${l}%)`;
    }
    onMount(() => {
    const as = Array.from(document.querySelectorAll('#header div a')) as HTMLElement[];
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
<header id="header" class="sticky top-0 left-0 w-screen p-5">
    <div class="flex">
        <div class="basis-1/2">
            <a href="/">back to /</a>
        </div>
        <div class="flex gap-7 text-xl flex-auto justify-center items-center box-border">
            <a href="/thug-lang" class="transition-all rounded-full flex-auto p-2 text-center">Thug-lang</a>
            <a href="/tool2" class="transition-all rounded-full flex-auto p-2 text-center">Footer</a>
            <a href="/tool3" class="transition-all rounded-full flex-auto p-2 text-center">Logo</a>
        </div>
    </div>
</header>


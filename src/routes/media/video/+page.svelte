<script lang="ts">
    import { onMount } from "svelte";
    import YtPlayer from "$lib/YT_Player.svelte";

    let bg_player: HTMLDivElement | null = null;
    let iframe_list: HTMLIFrameElement[] = [];
    let video_list: any[] = [];
    let current_index = 0;
    let is_mute = true;
    let ready = false;

    type Response_Video = {
        title: string;
        src: string;
        link: string | null;
    };

    $: if (bg_player) {
        iframe_list = Array.from(bg_player.children).filter(
            (child): child is HTMLIFrameElement => child.tagName === "DIV"
        );
    }

    const play = (player: any) => player?.playVideo();
    const stop = (player: any) => player?.stopVideo();
    const mute = (player: any) => player?.mute();
    const unmute = (player: any) => player?.unMute();

    const toggleMute = () => {
        video_list.forEach((item: any) => (is_mute ? unmute(item.player) : mute(item.player)));
        is_mute = !is_mute;
    };

    let Jumper: (index: number, shouldPlay?: boolean) => void;

    onMount(() => {
        Jumper = (index: number, shouldPlay = true) => {
            if (index >= video_list.length) index = 0;
            current_index = index;

            const target = iframe_list[index];
            target.scrollIntoView({ behavior: "smooth" });

            if (!shouldPlay) return;

            video_list.forEach((item: any) => stop(item.player));
            play(video_list[index].player);
        };

        window.addEventListener("resize", () => Jumper(current_index, false));
    });

    const player_handle = (event: CustomEvent) => {
        ready = true;
        video_list.push(event.detail);
        video_list.sort((a: any, b: any) => a.index - b.index);
        if(event.detail.index == 0) play(video_list[0].player)
    };
</script>

<h1>Here is a test page</h1>
<h1>I replaced iframe tag with iframe player API</h1>

<button
    class="fixed bottom-5 right-5"
    on:click={toggleMute}
>
    {is_mute ? "UnMute" : "Mute"}
</button>

{#await fetch("/api/video").then((res) => res.json()).then((videos: Response_Video[]) => videos) then assets}
    <div class="flex *:flex-auto *:hover:text-blue-500 text-2xl font-semibold">
        {#each assets as _, i}
            <button
                class={i === current_index ? "text-pink-400" : "text-white/50"}
                on:click={() => Jumper(i)}
            >
                {i + 1}
            </button>
        {/each}
    </div>

    <div class="fixed inset-0 z-[-1]" id="wrapper"></div>
    <div
        class="fixed inset-0 overflow-x-scroll aspect-video snap-x snap-mandatory [&>iframe]:aspect-video [&>iframe]:snap-center gap-10 z-[-2] scroll-smooth brightness-50 [&>*]:w-full [&>*]:h-full"
        bind:this={bg_player}
    >
        {#each assets as item, i}
            <div class="relative">
                <div class="absolute top-[50%] left-[1em] text-black">
                    <h1 class="font-bold text-9xl text-blance">{item.title}</h1>
                </div>
                <button
                    class="h-full w-full"
                    aria-label={`Play video titled ${item.title}`}
                >
                    <YtPlayer
                        id={item.src}
                        index={i}
                        is_mute={is_mute}
                        on:ready={player_handle}
                        on:end={() => Jumper(current_index + 1)}
                    />
                </button>
            </div>
        {/each}
    </div>
{/await}

<!-- Removed empty script block because no TypeScript code is needed -->
<script>
    const menu = [
        { name: "Profile", href: "/profile" },
        { 
            name: "User", 
            href: "/user", 
            children: [
                { name: "New User", href: "/user/new" },
                { name: "Login", href: "/user/login" }
            ]
        },
        { name: "Works", href: "/works" },
        { name: "Ahoge", href: "/ahoge" },
        { 
            name: "Media", 
            href: "/media", 
            children: [
                { name: "Video", href: "/media/video" },
                { name: "Image", href: "/media/image" }
            ]
        },
        { name: "Tool", href: "/tool" }
    ];
</script>

<h1>Main Page</h1>
<h1 class="content_title">Quick Access</h1>
<ul class="rounded-lg p-4 space-y-2 border-2 border-white">
    {#each menu as item}
        <li class="border-2 border-transparent hover:border-pink-300 rounded-lg p-2 transition-colors">
            <a class="hover:underline" href={item.href}>{item.name}</a>
            {#if item.children}
                <ul class="ml-4 mt-2 space-y-1">
                    {#each item.children as child}
                        <li class="border-2 border-transparent hover:border-pink-300 rounded-lg p-1 transition-colors">
                            <a class=" hover:underline" href={child.href}>{child.name}</a>
                        </li>
                    {/each}
                </ul>
            {/if}
        </li>
    {/each}
</ul>

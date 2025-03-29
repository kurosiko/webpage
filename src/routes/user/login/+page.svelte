<script lang="ts">
import { su_control } from "$lib/state/su.svelte";

    let id:string = "";
    let pass:string = ""

    async function handleLogin() {
        const response = await fetch("https://api.kurosiko.com/user/login",{
            method:"POST",
            mode:"cors",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                pass: pass
            })
        })
        if (response.ok){
            su_control.su()
            alert("Youre now super user!!")
        }else{
            alert("worng data")
        }
    }
</script>

<main class="max-w-md mx-auto p-6 font-sans">
    <h1 class="text-2xl font-bold mb-6 text-center">login</h1>
    <form on:submit|preventDefault={handleLogin} class="space-y-4">
        <div>
            <label for="email" class="block text-sm font-medium text-gray-700">id:</label>
            <input
                id="email"
                type="text"
                bind:value={id}
                required
                class="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
        <div>
            <label for="password" class="block text-sm font-medium text-gray-700">password:</label>
            <input
                id="password"
                type="password"
                bind:value={pass}
                required
                class="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
        <button
            type="submit"
            class="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
            login
        </button>
    </form>
</main>

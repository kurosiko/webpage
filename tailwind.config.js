/**@type {import('tailwindcss').Config} */
module.exports = {
    content:["./src/**/*.{js,svelte,html}"],
    theme:{
        extend: {
            animation: {
                "slide-in-top":"slide-in-top 0.5s ease-in-out both"
            },
            keyframes: {
                "slide-in-top": {
                    "0%": {
                        transform: "translateY(-1000Y)",
                        opacity:"0"
                    },
                    to: {
                        transform: "translateY(0)",
                        opacity:"1"
                    }
                }
            }
        }
    }
}

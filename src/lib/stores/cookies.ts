import { writable } from "svelte/store";
export const bakery = writable<string | undefined>(undefined);

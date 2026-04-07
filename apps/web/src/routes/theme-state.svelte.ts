import { createContext } from "svelte";
import { MediaQuery } from "svelte/reactivity";

export class ThemeState {
    prefersDark = new MediaQuery('prefers-color-scheme: dark', true);
    colorScheme: 'light' | 'dark' | 'auto' = $state('auto');
    colorMode: 'light' | 'dark' = $derived.by(() => {
        if (this.colorScheme === 'auto') {
            return this.prefersDark ? 'dark' : 'light';
        } else {
            return this.colorScheme;
        }
    })

    setAuto() {
        this.colorScheme = 'auto';
    }

    toggle() {
        console.log('toggle theme');
        if (this.colorScheme === 'light') {
            this.colorScheme = 'dark';
        } else if (this.colorScheme === 'dark') {
            this.colorScheme = 'light';
        } else {
            this.colorScheme = this.prefersDark ? 'light' : 'dark';
        }
    }
}

export const [getThemeContext, setThemeContext] = createContext<ThemeState>();
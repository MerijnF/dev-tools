import { createContext } from "svelte";

export class ThemeState {
    colorScheme: 'light' | 'dark' | 'auto' = $state('auto');

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
            this.colorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
    }
}

export const [getThemeContext, setThemeContext] = createContext<ThemeState>();
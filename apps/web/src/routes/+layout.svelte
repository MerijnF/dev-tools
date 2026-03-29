<script lang="ts">
	import '../styles/theme.css';
	import favicon from '$lib/assets/favicon.svg';
	import { setThemeContext, ThemeState } from './theme-state.svelte';

	let themeState = $state(new ThemeState());
	setThemeContext(themeState);

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Dev tools</title>
</svelte:head>

<div style="display: contents" data-theme-color-scheme={themeState.colorScheme}>
	{@render children()}
</div>

<style>
	:global {
		body:has([data-theme-color-scheme='light']) {
			color-scheme: light;
		}
		body:has([data-theme-color-scheme='dark']) {
			color-scheme: dark;
		}
	}
</style>

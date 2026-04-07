<script>
	import Button from '$lib/components/ui/button/Button.svelte';
	import { getThemeContext } from './theme-state.svelte';
	import DarkModeOutlineRounded from '~icons/material-symbols/dark-mode-outline-rounded';
	import LightModeOutlineRounded from '~icons/material-symbols/light-mode-outline-rounded';
	const themeState = getThemeContext();
</script>

<Button onclick={() => themeState.toggle()}>
	{#if themeState.colorMode === 'dark'}
		<LightModeOutlineRounded />
	{:else if themeState.colorMode === 'light'}
		<DarkModeOutlineRounded />
	{/if}
</Button>

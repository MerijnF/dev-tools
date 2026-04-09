<script>
	import Button from '$lib/components/ui/button/Button.svelte';
	import { getThemeContext } from './theme-state.svelte';
	import DarkMode from '~icons/material-symbols/dark-mode-outline-rounded';
	import LightMode from '~icons/material-symbols/light-mode-outline-rounded';
	const themeState = getThemeContext();
</script>

<!-- can this be done without requiring javascript? -->
<Button rounded kind="icon" onclick={() => themeState.toggle()}>
	{#if themeState.colorMode === 'dark'}
		<LightMode />
	{:else if themeState.colorMode === 'light'}
		<DarkMode />
	{/if}
</Button>

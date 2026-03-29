<script>
	import Button from '$lib/components/ui/button/Button.svelte';
	import { getThemeContext } from './theme-state.svelte';

	const themeState = getThemeContext();
</script>

<Button onclick={() => themeState.toggle()}>
	{#if themeState.colorScheme === 'dark'}
		light
	{:else if themeState.colorScheme === 'light'}
		dark
	{:else}
		automatic
	{/if}
</Button>

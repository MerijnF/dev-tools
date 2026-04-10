<script>
	import { Button } from '$lib/components/ui';
	import { resolve } from '$app/paths';
	import ThemeSwitcher from '../ThemeSwitcher.svelte';
</script>

<header>
	<a href={resolve('/')} class="brand">
		<span>Dev tools</span>
	</a>
	<nav>
		<Button href={resolve('/tools')}>Tools</Button>
	</nav>
	<div class="settings">
		<ThemeSwitcher />
	</div>
</header>

<style>
	header {
		display: flex;
		align-items: center;
		gap: var(--size-4);
		background-color: var(--color-surface-container-high);
		border-bottom: var(--border-neutral);
		padding: var(--size-4);
		position: sticky;
		top: 0;
		z-index: 100;
	}

	.brand {
		text-decoration: none;
		display: flex;
		align-items: center;

		margin: 0;
		font-size: var(--font-size-xlarge);
		font-weight: bolder;
		color: var(--color-primary);
	}

	nav {
		display: flex;
		gap: var(--size-4);
		align-items: center;
		margin-right: auto;
	}

	.settings {
		display: flex;
		gap: var(--size-2);
		align-items: center;
	}
</style>

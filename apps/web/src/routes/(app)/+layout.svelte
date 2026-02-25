<script lang="ts">
	import Header from './Header.svelte';

	let { children } = $props();
</script>

<container>
	<Header />
	<main>
		{@render children()}
	</main>
	<footer>footer</footer>
</container>

<style>
	container {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	main {
		margin-top: auto;
		margin-bottom: auto;
		flex: auto;
		padding: var(--size-4);
	}

	footer {
		background-color: var(--color-surface);
		padding: var(--size-4);
	}
</style>

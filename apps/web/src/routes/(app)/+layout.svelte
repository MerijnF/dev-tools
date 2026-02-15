<script lang="ts">
	let { children } = $props();
</script>

<header><h1>Dev tools</h1></header>
<main>
	{@render children()}
</main>
<footer>footer</footer>

<style>
	header {
		background-color: var(--color-slate-300);
		padding: 1rem;

		h1 {
			margin: 0;
		}
	}

	main {
		padding: 1rem;
	}

	footer {
		background-color: var(--color-slate-300);
		padding: 1rem;
	}
</style>

<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

<style>
	:global {
		@import '../styles/colors';

		:root {
			--color-brand-1: var(--color-emerald-700);

			--color-surface-1: var(--color-slate-100);
			--color-surface-2: var(--color-slate-200);
			--color-surface-3: var(--color-slate-300);
			--color-surface-4: var(--color-slate-400);

			--color-text-1: var(--color-slate-900);
			--color-text-1-muted: var(--color-slate-600);

			--size-0: 0;
			--size-1: 0.25rem;
			--size-2: 0.5rem;
			--size-3: 0.75rem;
			--size-4: 1rem;

			--size-line-1: 1px;
			--size-line-2: 2px;

			--border-1: solid var(--color-surface-4) var(--size-line-1);
		}

		body {
			background-color: var(--color-slate-200);
			margin: 0;
		}

		* {
			box-sizing: border-box;
		}
	}
</style>

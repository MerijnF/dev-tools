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
			--color-primary: var(--color-emerald-500);
			--color-primary-muted: var(--color-emerald-300);
			--color-primary-emphsize: var(--color-emerald-700);

			--color-background: var(--color-zinc-100);
			--color-background-muted: var(--color-zinc-200);
			--color-surface: var(--color-zinc-200);
			--color-surface-muted: var(--color-zinc-300);

			--color-neutral: var(--color-neutral-200);
			--color-neutral-emphasize: var(--color-neutral-300);
			--color-neutral-muted: var(--color-neutral-300);

			--color-text: var(--color-gray-950);
			--color-text-muted: var(--color-gray-500);

			--size-0: 0;
			--size-1: 0.25rem;
			--size-2: 0.5rem;
			--size-3: 0.75rem;
			--size-4: 1rem;
			--size-5: 1.25rem;
			--size-6: 1.5rem;
			--size-7: 1.75rem;
			--size-8: 2rem;

			--size-line-height: 1.125rem;

			--size-stroke: 1px;
			--size-stroke-bold: 2px;

			--border-neutral: solid var(--color-neutral-emphasize) var(--size-stroke);
			--outline-focus: var(--size-stroke-bold) solid var(--color-primary-muted);
			--shadow-elevated: 0 var(--size-stroke) var(--size-stroke-bold) 0
				var(--color-neutral-emphasize);
		}

		body {
			background-color: var(--color-background);
			margin: 0;
		}

		* {
			box-sizing: border-box;
			line-height: var(--size-line-height);
			font-size: 16px;
			font-family: system-ui, sans-serif;
		}
	}
</style>

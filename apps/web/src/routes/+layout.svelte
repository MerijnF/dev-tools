<script lang="ts">
	import '@fontsource-variable/noto-sans';

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
			--color-background: var(--color-zinc-50);
			--color-surface: var(--color-zinc-100);
			--color-surface-emphasize: var(--color-zinc-200);

			--color-primary: var(--color-emerald-500);
			--color-primary-muted: var(--color-emerald-400);
			--color-primary-emphasize: var(--color-emerald-600);

			--color-neutral: var(--color-neutral-200);
			--color-neutral-emphasize: var(--color-neutral-300);
			--color-neutral-muted: var(--color-neutral-100);

			--color-text: var(--color-gray-950);
			--color-text-muted: var(--color-gray-500);

			--color-link: var(--color-sky-700);
			--color-link-emphasize: var(--color-sky-800);
			--color-link-muted: var(--color-sky-500);

			--size-1: 0.25rem;
			--size-2: 0.5rem;
			--size-3: 0.75rem;
			--size-4: 1rem;
			--size-5: 1.25rem;
			--size-6: 1.5rem;
			--size-7: 1.75rem;
			--size-8: 2rem;

			--font-size-small: 0.75rem; /* 12px * 1.25 = 15px */
			--font-size-base: 1rem; /* 16px * 1.25 = 20px */
			--font-size-large: 1.25rem; /* 20px * 1.25 = 25px */
			--font-size-xlarge: 1.5rem; /* 24px * 1.25 = 30px */

			--line-height: 1.25;

			--size-stroke: 1px;
			--size-stroke-bold: 2px;

			--border-neutral: solid var(--color-neutral-emphasize) var(--size-stroke);
			--outline-focus: var(--size-stroke-bold) solid var(--color-primary-muted);
			--shadow-elevated: 0 var(--size-stroke) var(--size-stroke-bold) 0
				var(--color-neutral-emphasize);

			font-size: 16px;
			font-family: 'Noto Sans', system-ui, sans-serif;
		}

		body {
			background-color: var(--color-background);
			margin: 0;
			line-height: var(--line-height);
		}
		/* normalize */
		button,
		input,
		optgroup,
		select,
		textarea {
			font-family: inherit;
			font-size: 100%;
			line-height: var(--line-height);
			margin: 0;
		}

		*,
		::before,
		::after {
			box-sizing: border-box;
		}
	}
</style>

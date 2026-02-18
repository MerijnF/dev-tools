<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	let { children, ...restProps }: { children: Snippet } & HTMLButtonAttributes = $props();
</script>

<button {...restProps}>{@render children()}</button>

<style>
	button {
		padding: var(--size-2) var(--size-3);
		background-color: var(--color-neutral);
		border: var(--border-neutral);
		border-radius: var(--size-2);
		box-shadow: var(--shadow-elevated);
		transition: box-shadow 0.2s ease-out;

		&:hover {
			background-color: var(--color-neutral-emphasize);
			cursor: pointer;
		}

		&:active {
			box-shadow: none;
		}

		&:focus-visible {
			outline: var(--outline-focus);
		}

		&:disabled {
			background-color: var(--color-neutral-muted);
			color: var(--color-text-muted);
			cursor: not-allowed;
			box-shadow: none;
		}
	}
</style>

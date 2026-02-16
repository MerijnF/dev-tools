<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	let { children, ...restProps }: { children: Snippet } & HTMLButtonAttributes = $props();
</script>

<button {...restProps}>{@render children()}</button>

<style>
	button {
		padding: var(--size-2) var(--size-3);

		background-color: var(--color-surface);
		border: var(--border-1);
		border-radius: var(--size-2);

		&:hover {
			background-color: var(--color-surface-emphsize);
			cursor: pointer;
		}

		&:focus {
			outline: var(--outline-focus);
		}
	}
</style>

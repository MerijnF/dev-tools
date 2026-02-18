<script lang="ts">
	import type { HTMLTextareaAttributes } from 'svelte/elements';

	let { ...restProps }: HTMLTextareaAttributes = $props();
</script>

<textarea {...restProps}></textarea>

<style>
	textarea {
		background-color: var(--color-background);
		color: var(--color-text);
		padding: var(--size-2) var(--size-3);
		border: var(--border-neutral);
		border-radius: var(--size-2);
		vertical-align: top;
		&.one-line {
			height: calc(var(--size-line-height) + 2 * var(--size-2) + 2 * var(--size-stroke));
		}

		&:focus-visible {
			outline: var(--outline-focus);
		}

		&::placeholder {
			color: var(--color-text-muted);
		}

		&:disabled {
			background-color: var(--color-background-muted);
			color: var(--color-text-muted);
			cursor: not-allowed;
		}
	}
</style>

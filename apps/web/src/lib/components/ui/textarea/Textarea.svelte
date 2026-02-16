<script lang="ts">
	import type { HTMLTextareaAttributes } from 'svelte/elements';

	let { ...restProps }: HTMLTextareaAttributes = $props();
</script>

<textarea {...restProps}></textarea>

<style>
	textarea {
		background-color: var(--color-surface);
		color: var(--color-text);
		padding: var(--size-2) var(--size-3);
		border: var(--border-1);
		border-radius: var(--size-2);
		vertical-align: top;
		&.one-line {
			height: calc(var(--size-line-height) + 2 * var(--size-2) + 2 * var(--size-stroke));
		}

		&:focus {
			outline: var(--outline-focus);
		}

		&::placeholder {
			color: var(--color-text-muted);
		}

		&:disabled {
			background-color: var(--color-surface-muted);
			color: var(--color-text-muted);
			cursor: not-allowed;
		}
	}
</style>

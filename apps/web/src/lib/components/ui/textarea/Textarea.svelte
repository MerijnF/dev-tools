<script lang="ts">
	import type { HTMLTextareaAttributes } from 'svelte/elements';

	let { ...restProps }: HTMLTextareaAttributes = $props();
</script>

<textarea {...restProps}></textarea>

<style>
	textarea {
		background-color: var(--color-surface-2);
		color: var(--color-text-1);
		padding: var(--size-2) var(--size-3);
		border: var(--border-1);
		border-radius: var(--size-2);

		&:focus {
			outline: none;
			border-color: var(--color-brand-1);
		}

		&::placeholder {
			color: var(--color-text-1-muted);
		}
	}
</style>

<script lang="ts">
	import clsx from 'clsx';
	import type { HTMLTextareaAttributes } from 'svelte/elements';

	type TextareaProps = HTMLTextareaAttributes & {
		lines?: number;
		resize?: boolean;
	};

	let { lines: initialLines = 1, resize = true, ...restProps }: TextareaProps = $props();
</script>

<textarea class={clsx({ resize })} style="--textarea-lines: {initialLines}" {...restProps}
></textarea>

<style>
	textarea {
		background-color: var(--color-surface-container-highest);
		color: var(--color-on-surface);
		padding: var(--size-2) var(--size-3);
		border: solid var(--color-outline) var(--size-stroke);
		border-radius: var(--size-2);
		vertical-align: top;
		width: 100%;
		resize: none;
		--textarea-height: calc(
			(1em * var(--line-height)) * var(--textarea-lines) + (2 * var(--size-2)) +
				(2 * var(--size-stroke))
		);
		height: var(--textarea-height);
		min-height: var(--textarea-height);

		&.resize {
			resize: vertical;
		}

		&:focus-visible:not(:disabled) {
			outline: var(--outline-focus);
		}

		&::placeholder {
			color: var(--color-on-surface-variant);
		}

		&:disabled {
			opacity: 80%;
			cursor: not-allowed;
			resize: none;
		}
	}
</style>

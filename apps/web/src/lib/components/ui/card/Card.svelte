<script lang="ts">
	import clsx from 'clsx';
	import type { HTMLAttributes } from 'svelte/elements';

	type CardProps = {
		variant?: 'ghost' | 'default' | 'emphasized';
	} & HTMLAttributes<HTMLDivElement>;

	let { variant = 'default', class: propsClass, children, ...restProps }: CardProps = $props();
</script>

<div class={clsx(propsClass, 'card', variant)} {...restProps}>
	{@render children?.()}
</div>

<style>
	.card {
		border: var(--border-neutral);
		border-radius: var(--size-2);
		padding: var(--size-4);
		box-shadow: var(--shadow-elevated);

		&.ghost {
			background-color: transparent;
		}

		&.default {
			background-color: var(--color-surface);
		}

		&.emphasized {
			background-color: var(--color-surface-emphasize);
		}
	}
</style>

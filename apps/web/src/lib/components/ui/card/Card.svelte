<script lang="ts">
	import clsx from 'clsx';
	import type { HTMLAttributes } from 'svelte/elements';

	type CardProps = { elevated?: boolean } & HTMLAttributes<HTMLDivElement>;

	let { class: propsClass, children, elevated = false, ...restProps }: CardProps = $props();
</script>

<div class={clsx(propsClass, 'card', { elevated: elevated })} {...restProps}>
	{@render children?.()}
</div>

<style>
	.card {
		border: var(--size-stroke) solid var(--color-outline-variant);
		border-radius: var(--size-2);
		padding: var(--size-4);
		background-color: var(--color-surface-container);

		&.elevated {
			box-shadow: var(--shadow-elevated);
		}
	}
</style>

<script lang="ts">
	import clsx from 'clsx';
	import type { HTMLAttributes } from 'svelte/elements';

	type CardProps = HTMLAttributes<HTMLDivElement>;

	let { class: propsClass, children, ...restProps }: CardProps = $props();
</script>

<div class={clsx(propsClass, 'card')} {...restProps}>
	{@render children?.()}
</div>

<style>
	.card {
		border: var(--size-stroke) solid var(--color-outline-variant);
		border-radius: var(--size-2);
		padding: var(--size-4);
		box-shadow: var(--shadow-elevated);
		background-color: var(--color-surface-container-low);

		&.default {
			background-color: var(--color-surface-container-low);
		}
	}
</style>

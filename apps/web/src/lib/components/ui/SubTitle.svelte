<script lang="ts">
	import clsx from 'clsx';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		children,
		class: classProp,
		level = 3,
		...restProps
	}: { level?: number } & HTMLAttributes<HTMLHeadingElement> = $props();
</script>

<svelte:element this={`h${level}`} class={clsx('sub-title', classProp)} {...restProps}
	>{@render children?.()}</svelte:element
>

<style>
	.sub-title {
		font-size: var(--font-size-base);
		font-weight: bold;
		color: var(--color-on-surface-variant);
		margin: 0 0 var(--size-2);
	}
</style>

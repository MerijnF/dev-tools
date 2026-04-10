<script lang="ts">
	import clsx from 'clsx';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		children,
		class: classProp,
		level = 2,
		...restProps
	}: { level?: number } & HTMLAttributes<HTMLHeadingElement> = $props();
</script>

<svelte:element this={`h${level}`} class={clsx('title', classProp)} {...restProps}
	>{@render children?.()}</svelte:element
>

<style>
	.title {
		font-size: var(--font-size-large);
		font-weight: bold;
		color: var(--color-on-surface);
		margin: 0 0 var(--size-2);
	}
</style>

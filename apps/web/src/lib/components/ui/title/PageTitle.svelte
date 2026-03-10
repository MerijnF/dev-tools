<script lang="ts">
	import clsx from 'clsx';
	import type { HTMLAttributes } from 'svelte/elements';

	let { children, class: classProp, ...restProps }: HTMLAttributes<HTMLHeadingElement> = $props();
</script>

<h1 class={clsx(classProp)} {...restProps}>{@render children?.()}</h1>

<style>
	h1 {
		font-size: var(--font-size-xlarge);
		font-weight: bold;
		color: var(--color-text);
		margin: 0 0 var(--size-2);
	}
</style>

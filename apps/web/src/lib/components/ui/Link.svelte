<script lang="ts">
	import clsx from 'clsx';
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	type LinkProps = HTMLAnchorAttributes;

	let { children, class: propsClass, ...restProps }: LinkProps = $props();
</script>

<a class={clsx(propsClass)} {...restProps}>
	{@render children?.()}
</a>

<style>
	a {
		color: var(--color-tertiary);
		text-decoration: underline;
		text-decoration-thickness: var(--size-stroke);

		&:hover {
			color: color-mix(in srgb, var(--color-tertiary) calc(100% - var(--mix-hover)), transparent);
		}

		&:focus {
			color: color-mix(in srgb, var(--color-tertiary) calc(100% - var(--mix-focus)), transparent);
		}
	}
</style>

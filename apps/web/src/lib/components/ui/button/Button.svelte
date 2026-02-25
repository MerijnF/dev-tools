<script lang="ts">
	import clsx from 'clsx';
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

	type ButtonProps = (HTMLAnchorAttributes & { href: string }) | HTMLButtonAttributes;

	let { children, class: classProps, ...restProps }: ButtonProps = $props();
</script>

{#if 'href' in restProps}
	<a class={clsx(classProps, 'button')} {...restProps}>{@render children?.()}</a>
{:else}
	<button class={clsx(classProps, 'button')} {...restProps}>{@render children?.()}</button>
{/if}

<style>
	a {
		text-decoration: none;
		color: inherit;
	}

	.button {
		padding: var(--size-2) var(--size-3);
		background-color: var(--color-neutral);
		border: var(--border-neutral);
		border-radius: var(--size-2);
		box-shadow: var(--shadow-elevated);
		transition: box-shadow 0.2s ease-out;

		&:hover {
			background-color: var(--color-neutral-emphasize);
			cursor: pointer;
		}

		&:active {
			box-shadow: none;
		}

		&:focus-visible {
			outline: var(--outline-focus);
		}

		&:disabled {
			background-color: var(--color-neutral-muted);
			color: var(--color-text-muted);
			cursor: not-allowed;
			box-shadow: none;
		}
	}
</style>

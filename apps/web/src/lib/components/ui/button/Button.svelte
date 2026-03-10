<script lang="ts">
	import clsx from 'clsx';
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

	type ButtonProps = ((HTMLAnchorAttributes & { href: string }) | HTMLButtonAttributes) & {
		variant?: 'neutral' | 'primary';
	};

	let { children, class: propsClass, variant = 'neutral', ...restProps }: ButtonProps = $props();
</script>

{#if 'href' in restProps}
	<a class={clsx(propsClass, 'button', variant)} {...restProps}>{@render children?.()}</a>
{:else}
	<button class={clsx(propsClass, 'button', variant)} {...restProps}>{@render children?.()}</button>
{/if}

<style>
	a {
		display: inline-block;
		text-decoration: none;
		color: inherit;
	}

	.button {
		padding: var(--size-2) var(--size-3);
		border: var(--border-neutral);
		border-radius: var(--size-2);
		box-shadow: var(--shadow-elevated);
		transition: box-shadow 0.2s ease-out;
		font-weight: bold;

		&.neutral {
			background-color: var(--color-neutral);
			border-color: var(--color-neutral-emphasize);
			color: var(--color-text);
			&:disabled {
				background-color: var(--color-neutral-muted);
				color: var(--color-text-muted);
			}
			&:hover {
				background-color: var(--color-neutral-emphasize);
			}
		}
		&.primary {
			background-color: var(--color-primary);
			border-color: var(--color-primary-emphasize);
			color: var(--color-text);
			&:disabled {
				background-color: var(--color-neutral-muted);
				color: var(--color-text-muted);
			}
			&:hover {
				background-color: var(--color-primary-emphasize);
			}
		}

		&:hover {
			cursor: pointer;
		}

		&:active {
			box-shadow: none;
		}

		&:focus-visible {
			outline: var(--outline-focus);
		}

		&:disabled {
			cursor: not-allowed;
			box-shadow: none;
		}
	}
</style>
